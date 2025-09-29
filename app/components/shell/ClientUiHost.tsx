'use client'
import { ReactNode } from 'react'
import EnhancedHeader from './EnhancedHeader'
import { BottomTabBar } from './BottomTabBar'

export function ClientUiHost({ children }: { children: ReactNode }) {
  return (
    <>
      <EnhancedHeader />
      <main>{children}</main>
      <BottomTabBar />
    </>
  )
}
