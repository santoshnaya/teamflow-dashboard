'use client'

import { monthlyTasks } from '@/lib/utils'
import TaskItem from './TaskItem'

interface MonthlyTasksProps {
  activeTab: string
  searchQuery: string
}

export default function MonthlyTasks({ activeTab, searchQuery }: MonthlyTasksProps) {
  const filteredTasks = monthlyTasks.filter(task => {
    const matchesTab = activeTab === 'active' ? task.status === 'active' : task.status === 'completed'
    const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         task.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  return (
    <div className="space-y-4 overflow-auto">
      {filteredTasks.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📝</span>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No tasks found</h3>
          <p className="text-gray-500">
            {searchQuery ? 'Try adjusting your search terms' : 'No tasks in this category'}
          </p>
        </div>
      ) : (
        <>
          {/* Section Labels */}
          <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
            <div className="col-span-1">Today</div>
          </div>

          {/* Task Items */}
          {filteredTasks.slice(0, 3).map((task, index) => (
            <TaskItem key={task.id} task={task} isLast={index === 2} />
          ))}

          {filteredTasks.length > 3 && (
            <>
              <div className="grid grid-cols-12 gap-4 px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-8">
                <div className="col-span-1">Tomorrow</div>
              </div>
              {filteredTasks.slice(3).map((task, index) => (
                <TaskItem key={task.id} task={task} isLast={false} />
              ))}
            </>
          )}
        </>
      )}
    </div>
  )
} 