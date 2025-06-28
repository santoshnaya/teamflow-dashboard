'use client'

import { useState } from 'react'
import { MoreHorizontal, Lightbulb, Search } from 'lucide-react'
import { cn } from '@/lib/utils'

interface TaskCardProps {
  task: {
    id: number
    title: string
    type: string
    color: string
    members: Array<{ id: number; name: string; avatar: string }>
    progress: number
  }
}

export default function TaskCard({ task }: TaskCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getIcon = (type: string) => {
    switch (type) {
      case 'design':
        return <Lightbulb className="w-5 h-5" />
      case 'development':
        return <Search className="w-5 h-5" />
      default:
        return <Lightbulb className="w-5 h-5" />
    }
  }

  const getGradient = (color: string) => {
    switch (color) {
      case 'from-pink-500 to-rose-500':
        return 'linear-gradient(135deg, #EC4899, #F43F5E)'
      case 'from-purple-500 to-indigo-500':
        return 'linear-gradient(135deg, #A855F7, #6366F1)'
      default:
        return 'linear-gradient(135deg, #7C3AED, #9333EA)'
    }
  }

  return (
    <div
      className={cn(
        "relative p-6 rounded-2xl text-white transition-all duration-300 cursor-pointer overflow-hidden group min-h-[200px]",
        isHovered && "scale-105 shadow-2xl"
      )}
      style={{
        background: getGradient(task.color)
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-20 h-20 rounded-full border-2 border-white/20" />
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full border-2 border-white/20" />
      </div>

      {/* Header */}
      <div className="relative flex items-start justify-between mb-4">
        <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
          {getIcon(task.type)}
        </div>
        <button className="p-2 hover:bg-white/20 rounded-lg transition-colors duration-200">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-6 leading-tight">
        {task.title}
      </h3>

      {/* Team Members */}
      <div className="flex items-center justify-between">
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
                className="w-8 h-8 rounded-full border-2 border-white object-cover transition-transform duration-200 group-hover/avatar:scale-110"
              />
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                {member.name}
              </div>
            </div>
          ))}
        </div>

        {/* Progress Badge */}
        <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-sm font-medium">{task.progress}%</span>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className={cn(
        "absolute inset-0 opacity-0 transition-opacity duration-500",
        isHovered && "opacity-100"
      )}>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
      </div>
    </div>
  )
} 