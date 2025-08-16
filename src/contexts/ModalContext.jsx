import React, { createContext, useContext, useState, useEffect, useRef, useCallback } from 'react'

const ModalContext = createContext()

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}

export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const modalCountRef = useRef(0)
  const historyStateRef = useRef(null)
  const isHandlingPopStateRef = useRef(false)

  // Gestione del back button del browser
  useEffect(() => {
    const handlePopState = (e) => {
      // Evita loop infiniti
      if (isHandlingPopStateRef.current) return
      
      // Se abbiamo una modale aperta, chiudila invece di navigare
      if (isModalOpen && modalCountRef.current > 0) {
        isHandlingPopStateRef.current = true
        setIsModalOpen(false)
        modalCountRef.current = 0
        
        // Ripristina la history senza causare un nuovo popstate
        setTimeout(() => {
          if (historyStateRef.current) {
            window.history.pushState(historyStateRef.current, '', window.location.href)
            historyStateRef.current = null
          }
          isHandlingPopStateRef.current = false
        }, 10)
      }
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [isModalOpen])

  const openModal = useCallback(() => {
    if (modalCountRef.current === 0) {
      // Salva lo stato corrente della history
      historyStateRef.current = window.history.state
      
      modalCountRef.current = 1
      setIsModalOpen(true)
      
      // Aggiungi una entry alla history per intercettare il back
      window.history.pushState({ modal: true }, '', window.location.href)
    }
  }, [])

  const closeModal = useCallback(() => {
    if (modalCountRef.current > 0) {
      modalCountRef.current = 0
      setIsModalOpen(false)
      
      // Solo se non stiamo già gestendo un popstate, naviga indietro
      if (!isHandlingPopStateRef.current && historyStateRef.current !== null) {
        window.history.back()
      }
    }
  }, [])

  return (
    <ModalContext.Provider value={{
      isModalOpen,
      openModal,
      closeModal
    }}>
      {children}
    </ModalContext.Provider>
  )
}
