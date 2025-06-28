import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const teamMembers = [
  { id: 1, name: 'John Doe', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face' },
  { id: 2, name: 'Sarah Chen', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b67b17b0?w=32&h=32&fit=crop&crop=face' },
  { id: 3, name: 'Mike Johnson', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face' },
  { id: 4, name: 'Emily Davis', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face' },
  { id: 5, name: 'Alex Wilson', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face' },
]

export const tasks = [
  {
    id: 1,
    title: 'R&D for New Banking Mobile App',
    type: 'design',
    color: 'from-pink-500 to-rose-500',
    members: [teamMembers[0], teamMembers[1], teamMembers[2]],
    progress: 65,
  },
  {
    id: 2,
    title: 'Create Signup Page',
    type: 'development',
    color: 'from-purple-500 to-indigo-500', 
    members: [teamMembers[2], teamMembers[3], teamMembers[4]],
    progress: 40,
  },
]

export const projects = [
  { id: 1, name: 'Redwhale Design', color: 'bg-red-500', active: true },
  { id: 2, name: 'Mobile App Mock', color: 'bg-blue-500', active: false },
  { id: 3, name: 'UI Design Revision', color: 'bg-green-500', active: false },
]

export const monthlyTasks = [
  {
    id: 1,
    title: 'Uber',
    description: 'App Design and Upgrades with new features - In Progress 16 days',
    icon: '🚗',
    iconBg: 'bg-black',
    members: [teamMembers[0], teamMembers[1], teamMembers[2]],
    status: 'active',
    timeAgo: '16 days',
  },
  {
    id: 2,
    title: 'Facebook Ads',
    description: 'Facebook Ads Design for CreativeCloud - Last Worked 5 days ago',
    icon: 'f',
    iconBg: 'bg-blue-600',
    members: [teamMembers[1], teamMembers[3], teamMembers[4]],
    status: 'active',
    timeAgo: '5 days ago',
  },
  {
    id: 3,
    title: 'Payoneer',
    description: 'Payoneer Dashboard Design - Due in 3 days',
    icon: 'P',
    iconBg: 'bg-orange-500',
    members: [teamMembers[0], teamMembers[2], teamMembers[4]],
    status: 'active',
    timeAgo: '3 days',
  },
  {
    id: 4,
    title: 'Upwork',
    description: 'Developing - Viewed Just Now - Assigned 10 min ago',
    icon: '⬆️',
    iconBg: 'bg-green-500',
    members: [teamMembers[1], teamMembers[2], teamMembers[3]],
    status: 'active',
    timeAgo: '10 min ago',
  },
] 