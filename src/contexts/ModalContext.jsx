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
  const forceCloseCallbackRef = useRef(null)

  // Gestione del back button del browser
  useEffect(() => {
    const handlePopState = (e) => {
      // Evita loop infiniti
      if (isHandlingPopStateRef.current) return
      
      // Se abbiamo una modale aperta, chiudila invece di navigare
      if (modalCountRef.current > 0) {
        e.preventDefault()
        isHandlingPopStateRef.current = true
        
        // Forza la chiusura del modal tramite callback
        if (forceCloseCallbackRef.current) {
          forceCloseCallbackRef.current()
        }
        
        // Chiudi il modal immediatamente senza manipolare la history
        modalCountRef.current = 0
        setIsModalOpen(false)
        
        // Reset dopo un breve delay
        setTimeout(() => {
          historyStateRef.current = null
          isHandlingPopStateRef.current = false
        }, 50)
      }
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const openModal = useCallback((forceCloseCallback) => {
    if (modalCountRef.current === 0) {
      // Salva lo stato corrente della history
      historyStateRef.current = window.history.state
      
      // Registra il callback per la chiusura forzata
      forceCloseCallbackRef.current = forceCloseCallback
      
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
      
      // Pulisci il callback
      forceCloseCallbackRef.current = null
      
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
