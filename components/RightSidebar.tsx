'use client'

import { useState } from 'react'
import { Calendar, Clock, Phone, Users, X, Plus, MoreHorizontal, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { teamMembers } from '@/lib/utils'

export default function RightSidebar() {
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [selectedCollaborators, setSelectedCollaborators] = useState<typeof teamMembers>([])
  const [isTimerRunning, setIsTimerRunning] = useState(true)
  const [timeElapsed, setTimeElapsed] = useState('28:35')

  const toggleCollaborator = (member: typeof teamMembers[0]) => {
    if (selectedCollaborators.find(c => c.id === member.id)) {
      setSelectedCollaborators(selectedCollaborators.filter(c => c.id !== member.id))
    } else {
      setSelectedCollaborators([...selectedCollaborators, member])
    }
  }

  return (
    <div className="w-80 bg-white border-l border-gray-200 flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900">Today&apos;s Schedule</h2>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
            <Calendar className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Today's Schedule */}
      <div className="p-6 space-y-4">
        <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl p-4 text-white relative overflow-hidden">
          <div className="absolute top-2 right-2 opacity-20">
            <Phone className="w-8 h-8" />
          </div>
          
          <div className="relative">
            <div className="text-xs text-green-100 mb-1">30 minutes call with Client</div>
            <h3 className="font-semibold text-lg mb-3">Project Discovery Call</h3>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {teamMembers.slice(0, 3).map((member, index) => (
                    <img
                      key={member.id}
                      src={member.avatar}
                      alt={member.name}
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                      style={{ zIndex: teamMembers.length - index }}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Clock className="w-3 h-3" />
                  <span className="text-sm font-medium">{timeElapsed}</span>
                </div>
                <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-200">
                  <TrendingUp className="w-4 h-4" />
                </button>
                <button className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors duration-200">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full py-3 border-2 border-primary-start text-primary-start rounded-xl font-semibold hover:bg-primary-start hover:text-white transition-all duration-300 hover:scale-105">
          + Invite
        </button>
      </div>

      {/* Design Project Stats */}
      <div className="p-6 border-t border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">Design Project</h3>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors duration-200">
            <MoreHorizontal className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        <div className="space-y-4">
          <div className="text-sm text-gray-500 mb-3">In Progress</div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">114</div>
              <div className="text-xs text-gray-500 mt-1">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">24</div>
              <div className="text-xs text-gray-500 mt-1">In Progress</div>
            </div>
            <div className="text-center">
              <div className="flex -space-x-1 justify-center mb-2">
                {teamMembers.slice(0, 3).map((member, index) => (
                  <img
                    key={member.id}
                    src={member.avatar}
                    alt={member.name}
                    className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    style={{ zIndex: teamMembers.length - index }}
                  />
                ))}
              </div>
              <div className="text-xs text-gray-500">Team Members</div>
            </div>
          </div>
        </div>
      </div>

      {/* New Task Section */}
      <div className="flex-1 p-6 border-t border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-900">New Task</h3>
          <button className="p-1 hover:bg-gray-100 rounded transition-colors duration-200">
            <MoreHorizontal className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Task Title</label>
            <input
              type="text"
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              placeholder="Create new"
              className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-start focus:border-transparent transition-all duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Add Collaborators</label>
            
            {selectedCollaborators.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {selectedCollaborators.map((collaborator) => (
                  <div
                    key={collaborator.id}
                    className="flex items-center space-x-2 bg-primary-start/10 text-primary-start px-3 py-1 rounded-full text-sm"
                  >
                    <img
                      src={collaborator.avatar}
                      alt={collaborator.name}
                      className="w-4 h-4 rounded-full object-cover"
                    />
                    <span>{collaborator.name.split(' ')[0]}</span>
                    <button
                      onClick={() => toggleCollaborator(collaborator)}
                      className="hover:bg-primary-start/20 rounded-full p-0.5 transition-colors duration-200"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-2 gap-2">
              {teamMembers.slice(3).map((member) => (
                <button
                  key={member.id}
                  onClick={() => toggleCollaborator(member)}
                  className={cn(
                    "flex items-center space-x-2 p-2 rounded-lg border transition-all duration-200",
                    selectedCollaborators.find(c => c.id === member.id)
                      ? "border-primary-start bg-primary-start/5 text-primary-start"
                      : "border-gray-200 hover:border-gray-300 text-gray-700"
                  )}
                >
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-6 h-6 rounded-full object-cover"
                  />
                  <span className="text-xs truncate">{member.name.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            disabled={!newTaskTitle.trim()}
            className={cn(
              "w-full py-3 rounded-xl font-semibold transition-all duration-300",
              newTaskTitle.trim()
                ? "bg-gradient-to-r from-primary-start to-primary-end text-white hover:shadow-lg hover:scale-105"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            )}
          >
            Create new
          </button>
        </div>
      </div>

      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center justify-center space-x-2 bg-orange-50 border border-orange-200 rounded-lg p-3">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          <span className="text-sm text-orange-700 font-medium">Test Mode</span>
          <div className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-semibold">
            0
          </div>
        </div>
      </div>
    </div>
  )
} 