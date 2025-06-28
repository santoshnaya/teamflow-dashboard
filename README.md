# TeamFlow Dashboard

A visually engaging project and task management dashboard built for collaborative teams to track tasks, meetings, and progress updates in real-time with an intuitive, colorful interface.

## Features

- **Modern UI/UX**: Clean, colorful design with smooth animations
- **Task Management**: Visual task cards with progress tracking
- **Team Collaboration**: Team member avatars and collaboration tools
- **Real-time Schedule**: Today's schedule with meeting timers
- **Project Stats**: Complete project statistics and progress
- **Interactive Elements**: Hover effects, transitions, and micro-interactions

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Frontend Only** - No backend dependencies

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Dashboard.tsx
│   ├── Sidebar.tsx
│   ├── MainContent.tsx
│   ├── RightSidebar.tsx
│   ├── TaskCard.tsx
│   ├── MonthlyTasks.tsx
│   └── TaskItem.tsx
├── lib/
│   └── utils.ts
└── ...
```

## Color Scheme

- **Primary**: Gradient purple (#7C3AED → #9333EA)
- **Accent**: Red (#F43F5E), Green (#10B981)
- **Background**: Soft gray (#F9FAFB)

## Deployment

This project is ready for deployment on Vercel:

```bash
npm run build
```

The application is optimized for production and will work seamlessly on Vercel's platform.

## License

MIT License - feel free to use this project for your own purposes. 