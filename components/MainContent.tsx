'use client'

import { Search, Archive, Plus } from 'lucide-react'
import TaskCard from './TaskCard'
import MonthlyTasks from './MonthlyTasks'
import { tasks } from '@/lib/utils'

interface MainContentProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  searchQuery: string
  setSearchQuery: (query: string) => void
}

export default function MainContent({ 
  activeTab, 
  setActiveTab, 
  searchQuery, 
  setSearchQuery 
}: MainContentProps) {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header Section */}
      <div className="p-6 bg-white border-b border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">Hi John!</h1>
            <div className="flex items-center space-x-3">
              <span className="text-sm text-gray-500">15% task completed</span>
              <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full transition-all duration-500"
                  style={{ width: '15%' }}
                />
              </div>
            </div>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-primary-start to-primary-end text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
            <Plus className="w-4 h-4 inline mr-2" />
            New Task
          </button>
        </div>

        {/* Task Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      </div>

      {/* Monthly Tasks Section */}
      <div className="flex-1 p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Monthly Tasks</h2>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-500 hover:text-gray-700 transition-colors duration-200">
              Archive
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-primary-start to-primary-end text-white rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <Plus className="w-4 h-4 inline mr-2" />
              New
            </button>
          </div>
        </div>

        {/* Tabs and Search */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex space-x-6">
            <button
              onClick={() => setActiveTab('active')}
              className={`pb-2 border-b-2 transition-colors duration-200 ${
                activeTab === 'active'
                  ? 'border-primary-start text-primary-start font-semibold'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Active Tasks
            </button>
            <button
              onClick={() => setActiveTab('completed')}
              className={`pb-2 border-b-2 transition-colors duration-200 ${
                activeTab === 'completed'
                  ? 'border-primary-start text-primary-start font-semibold'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Completed
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-start focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Tasks List */}
        <MonthlyTasks activeTab={activeTab} searchQuery={searchQuery} />
      </div>
    </div>
  )
} 