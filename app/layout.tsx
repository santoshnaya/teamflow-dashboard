import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TeamFlow - Project Management Dashboard',
  description: 'A visually engaging project and task management dashboard built for collaborative teams',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-bg min-h-screen">{children}</body>
    </html>
  )
} 