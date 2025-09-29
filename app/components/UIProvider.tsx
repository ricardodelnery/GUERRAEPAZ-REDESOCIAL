'use client'
import { createContext, useContext, useState } from 'react'

type UiContextType = {
  searchOpen: boolean
  setSearchOpen: (_: boolean) => void
  notifOpen: boolean  
  setNotifOpen: (_: boolean) => void
}

const UiContext = createContext<UiContextType | undefined>(undefined)

export function UIProvider({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)

  return (
    <UiContext.Provider value={{ searchOpen, setSearchOpen, notifOpen, setNotifOpen }}>
      {children}
    </UiContext.Provider>
  )
}

export function useUI() {
  const context = useContext(UiContext)
  if (!context) {
    throw new Error('useUI must be used within a UIProvider')
  }
  return context
}
