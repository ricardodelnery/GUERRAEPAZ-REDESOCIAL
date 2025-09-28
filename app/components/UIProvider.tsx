'use client'

import { createContext, useContext, useState } from 'react'
import Header from './Header'
import SearchSheet from './SearchSheet'
import NotifDrawer from './NotifDrawer'
import Footer from './Footer'

const UIContext = createContext<{
  openSearch: boolean
  setOpenSearch: (v: boolean) => void
  openNotif: boolean
  setOpenNotif: (v: boolean) => void
} | null>(null)

export function useUI() {
  const context = useContext(UIContext)
  if (!context) {
    throw new Error('useUI must be used within UIProvider')
  }
  return context
}

export default function UIProvider({ children }: { children: React.ReactNode }) {
  const [openSearch, setOpenSearch] = useState(false)
  const [openNotif, setOpenNotif] = useState(false)

  return (
    <UIContext.Provider value={{ 
      openSearch, 
      setOpenSearch, 
      openNotif, 
      setOpenNotif 
    }}>
      <Header 
        onOpenSearch={() => setOpenSearch(true)} 
        onOpenNotif={() => setOpenNotif(true)} 
      />
      {children}
      <Footer />
      <SearchSheet open={openSearch} onClose={() => setOpenSearch(false)} />
      <NotifDrawer open={openNotif} onClose={() => setOpenNotif(false)} />
    </UIContext.Provider>
  )
}
