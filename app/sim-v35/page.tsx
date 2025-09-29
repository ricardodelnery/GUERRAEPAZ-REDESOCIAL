'use client'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SearchSheet from '../components/SearchSheet'
import NotifDrawer from '../components/NotifDrawer'
import BottomTabBar from '../components/BottomTabBar'
import HomeMain from '../components/HomeMain'

export default function SimV35Page() {
  const [openSearch, setOpenSearch] = useState(false)
  const [openNotif, setOpenNotif] = useState(false)
  const [activeTab, setActiveTab] = useState('feed')

  return (
    <div className="min-h-screen bg-gray-100">
      <Header 
        onOpenSearch={() => setOpenSearch(true)} 
        onOpenNotif={() => setOpenNotif(true)} 
      />
      
      <main className="max-w-7xl mx-auto p-4 pb-24 md:pb-6">
        <HomeMain />
      </main>
      
      <Footer />
      <BottomTabBar active={activeTab} setActive={setActiveTab} />
      <SearchSheet open={openSearch} onClose={() => setOpenSearch(false)} />
      <NotifDrawer open={openNotif} onClose={() => setOpenNotif(false)} />
    </div>
  )
}
