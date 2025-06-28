'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface TaskItemProps {
  task: {
    id: number
    title: string
    description: string
    icon: string
    iconBg: string
    members: Array<{ id: number; name: string; avatar: string }>
    status: string
    timeAgo: string
  }
  isLast?: boolean
}

export default function TaskItem({ task, isLast }: TaskItemProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "group relative bg-white rounded-xl p-4 transition-all duration-300 cursor-pointer border border-gray-100",
        isHovered && "shadow-lg border-primary-start/20 scale-[1.02]"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start space-x-4">
        {/* Icon */}
        <div className={cn(
          "w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold transition-transform duration-300",
          task.iconBg,
          isHovered && "scale-110"
        )}>
          {task.icon.length === 1 ? (
            <span className="text-lg">{task.icon}</span>
          ) : (
            <span className="text-xs">{task.icon}</span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-primary-start transition-colors duration-300">
                {task.title}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                {task.description}
              </p>
            </div>

            {/* Time */}
            <div className="text-xs text-gray-400 ml-4 whitespace-nowrap">
              {task.timeAgo}
            </div>
          </div>

          {/* Team Members */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex -space-x-2">
              {task.members.map((member, index) => (
                <div
                  key={member.id}
                  className="relative group/avatar"
                  style={{ zIndex: task.members.length - index }}
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-7 h-7 rounded-full border-2 border-white object-cover transition-transform duration-200 group-hover/avatar:scale-110"
                  />
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50">
                    {member.name}
                  </div>
                </div>
              ))}
            </div>

            {/* Status Indicator */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-gray-500 capitalize">{task.status}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hover Effect Background */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-r from-primary-start/5 to-primary-end/5 rounded-xl opacity-0 transition-opacity duration-300 pointer-events-none",
        isHovered && "opacity-100"
      )} />
    </div>
  )
} 