import { useEffect, useRef } from 'react'
import { useModal } from '../contexts/ModalContext'

// Locks background scroll while a detail modal is open (via the classic
// position:fixed + negative top offset trick, needed for iOS Safari), wires
// it into ModalContext so the browser back button closes it, and restores
// the exact scroll position on close.
//
// The restore uses `behavior: 'instant'`, not 'auto': per the CSSOM View
// spec, 'auto' means "defer to the element's `scroll-behavior` CSS
// property" (smooth, here — see index.css), it does not mean "instant".
// Every scrolling API (scrollTo, and even a plain `scrollTop = x`
// assignment) is subject to that same CSS property except an explicit
// 'instant', which is the only value that reliably bypasses it. That
// mismatch — plus a setTimeout(fn, 0) delay that let the browser paint the
// frozen-at-top state at least once first — is what caused the page to
// flash to the top and animate back down instead of staying put when a
// modal closed. requestAnimationFrame runs the restore before the next
// paint, avoiding the flash.
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
        window.scrollTo({ top: scrollPositionRef.current, left: 0, behavior: 'instant' })
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
