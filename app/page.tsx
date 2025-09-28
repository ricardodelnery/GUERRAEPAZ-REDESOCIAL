'use client'

import HomeMain from './components/HomeMain'
import BottomTabBar from './components/BottomTabBar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="pt-4 pb-24 md:pb-6">
        <HomeMain />
      </main>
      
      <BottomTabBar />
    </div>
  )
}
