'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

interface UiContextType {
  isSearchOpen: boolean
  isNotifOpen: boolean
  openSearch: () => void
  closeSearch: () => void
  openNotif: () => void
  closeNotif: () => void
}

const UiContext = createContext<UiContextType | undefined>(undefined)

export function UiProvider({ children }: { children: ReactNode }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isNotifOpen, setIsNotifOpen] = useState(false)

  const openSearch = () => setIsSearchOpen(true)
  const closeSearch = () => setIsSearchOpen(false)
  const openNotif = () => setIsNotifOpen(true)
  const closeNotif = () => setIsNotifOpen(false)

  return (
    <UiContext.Provider value={{
      isSearchOpen, isNotifOpen,
      openSearch, closeSearch,
      openNotif, closeNotif
    }}>
      {children}
    </UiContext.Provider>
  )
}

export function useUi() {
  const context = useContext(UiContext)
  if (context === undefined) {
    throw new Error('useUi must be used within a UiProvider')
  }
  return context
}
