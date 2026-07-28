import { useEffect, useRef } from 'react'
import { useModal } from '../contexts/ModalContext'

// Locks background scroll while a detail modal is open (via the classic
// position:fixed + negative top offset trick, needed for iOS Safari), wires
// it into ModalContext so the browser back button closes it, and restores
// the exact scroll position on close.
//
// The restore uses a direct scrollTop assignment inside requestAnimationFrame
// rather than window.scrollTo(): scrollTop is instant and immune to the
// global `scroll-behavior: smooth` on <html> (index.css), while scrollTo's
// `behavior: 'auto'` override is not reliably respected in every browser —
// that mismatch is what caused the page to flash to the top and animate
// back down instead of staying put when a modal closed.
const useModalScrollLock = (isOpen, onForceClose) => {
  const { openModal, closeModal } = useModal()
  const scrollPositionRef = useRef(0)
  const wasOpenRef = useRef(false)

  useEffect(() => {
    if (isOpen && !wasOpenRef.current) {
      scrollPositionRef.current = window.scrollY
      document.body.classList.add('modal-open')
      document.body.style.top = `-${scrollPositionRef.current}px`
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      openModal(onForceClose)
      wasOpenRef.current = true
    } else if (!isOpen && wasOpenRef.current) {
      document.body.classList.remove('modal-open')
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      requestAnimationFrame(() => {
        document.documentElement.scrollTop = scrollPositionRef.current
        document.body.scrollTop = scrollPositionRef.current
      })
      closeModal()
      wasOpenRef.current = false
    }

    return () => {
      if (wasOpenRef.current) {
        document.body.classList.remove('modal-open')
        document.body.style.position = ''
        document.body.style.top = ''
        document.body.style.width = ''
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- onForceClose is
    // a fresh closure every render; only re-run this on isOpen transitions.
  }, [isOpen])
}

export default useModalScrollLock
