'use client'
import { useState } from 'react'
import Header from './Header'

export default function HeaderWrapper() {
  const [searchOpen, setSearchOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)

  return (
    <Header 
      onOpenSearch={() => setSearchOpen(true)}
      onOpenNotif={() => setNotifOpen(true)}
    />
  )
}
