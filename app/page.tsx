'use client'

import { useState } from 'react'
import HomeMain from './components/HomeMain'
import BottomTabBar from './components/BottomTabBar'

export default function Home() {
  const [activeTab, setActiveTab] = useState('feed')

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="pt-4 pb-24 md:pb-6">
        <HomeMain />
      </main>
      
      {/* BottomTabBar apenas para mobile */}
      <BottomTabBar active={activeTab} setActive={setActiveTab} />
    </div>
  )
}
