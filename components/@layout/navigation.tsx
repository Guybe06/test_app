import React from 'react'
import { Navbar } from './navBar'
import { Brand } from './brand'
import { BottomNav } from './bottomNav'

export const Navigation = () => {
  return (
    <div className="navigation flex flex-col pl-14 relative h-screen">
      <Brand />
      <div className="border-r border-gray-200 h-full mt-6">
        <Navbar />
        <BottomNav />
      </div>
    </div>
  )
}
