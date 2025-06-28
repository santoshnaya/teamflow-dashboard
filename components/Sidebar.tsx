'use client'

import { useState } from 'react'
import { 
  CheckSquare, 
  Inbox, 
  FolderOpen, 
  Users, 
  Calendar, 
  Settings,
  Plus,
  MoreHorizontal
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { projects, teamMembers } from '@/lib/utils'

const menuItems = [
  { icon: CheckSquare, label: 'My Tasks', active: true },
  { icon: Inbox, label: 'Inbox', badge: 5 },
  { icon: FolderOpen, label: 'Projects' },
  { icon: Users, label: 'Standups' },
  { icon: Calendar, label: 'Meetings' },
  { icon: Settings, label: 'Settings' },
]

export default function Sidebar() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* User Profile */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <img
            src={teamMembers[0].avatar}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900">John Doe</h3>
            <p className="text-sm text-gray-500">Graphic Designer</p>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="flex-1 p-4">
        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
          Menu
        </h4>
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 group",
                item.active 
                  ? "bg-gradient-to-r from-primary-start to-primary-end text-white shadow-lg" 
                  : "text-gray-600 hover:bg-gray-50"
              )}
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <item.icon 
                className={cn(
                  "w-5 h-5 transition-transform duration-200",
                  hoveredItem === item.label && !item.active && "scale-110"
                )}
              />
              <span className="font-medium">{item.label}</span>
              {item.badge && (
                <span className="ml-auto bg-red-500 text-white text-xs rounded-full px-2 py-0.5 min-w-[20px] text-center">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Favorites Section */}
        <div className="mt-8">
          <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Favorites
          </h4>
          <div className="space-y-3">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer group"
              >
                <div className={cn("w-3 h-3 rounded-full", project.color)} />
                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-200">
                  {project.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Add Button */}
      <div className="p-4">
        <button className="w-12 h-12 bg-gradient-to-r from-primary-start to-primary-end text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ml-auto animate-float">
          <Plus className="w-6 h-6" />
        </button>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>500+ feedback by</span>
          <div className="flex items-center space-x-1">
            <span className="font-semibold">Memberstack</span>
            <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded flex items-center justify-center">
              <span className="text-white text-[8px] font-bold">M</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 