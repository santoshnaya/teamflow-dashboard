'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import RightSidebar from './RightSidebar'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('active')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="flex h-screen bg-gray-bg overflow-hidden">
      <Sidebar />
      <MainContent 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <RightSidebar />
    </div>
  )
} 