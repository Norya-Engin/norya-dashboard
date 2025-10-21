// components/modules/TeamTasks.tsx
'use client'

import BentoCard from '../BentoCard'
import { Users, CheckCircle2 } from '@/lib/icons'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Task {
  id: number
  member: string
  avatar: string
  task: string
  priority: 'high' | 'medium' | 'low'
  done: boolean
}

export default function TeamTasks() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, member: 'Sophie M.', avatar: 'SM', task: 'Valider factures Oct.', priority: 'high', done: false },
    { id: 2, member: 'Thomas L.', avatar: 'TL', task: 'Rapport mensuel', priority: 'medium', done: false },
  ])

  const toggleTask = (id: number) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    )
  }

  const priorityColors = {
    high: 'bg-red-100 text-red-600',
    medium: 'bg-orange-100 text-orange-600',
    low: 'bg-blue-100 text-blue-600',
  }

  return (
    <BentoCard className="col-span-1 row-span-1 h-auto">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center">
          <Users size={20} className="text-indigo-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[var(--text)]">Tâches équipe</h3>
          <p className="text-sm text-[var(--muted)]">{tasks.filter(t => !t.done).length} en cours</p>
        </div>
      </div>

      {/* ✅ Carte responsive, s’adapte automatiquement au contenu */}
      <div className="flex flex-col gap-2 transition-all duration-300 ease-in-out">
        <AnimatePresence>
          {tasks.map((task, i) => (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: i * 0.05 }}
              className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                task.done ? 'bg-gray-50/50 opacity-60' : 'bg-white/50 hover:bg-white/80'
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-blue-400 flex items-center justify-center text-white text-xs font-bold">
                {task.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`font-medium text-sm ${task.done ? 'line-through text-[var(--muted)]' : 'text-[var(--text)]'}`}>
                  {task.task}
                </p>
                <p className="text-xs text-[var(--muted)]">{task.member}</p>
              </div>
              <span className={`px-2 py-0.5 rounded text-[10px] font-medium ${priorityColors[task.priority]}`}>
                {task.priority}
              </span>
              <button
                onClick={() => toggleTask(task.id)}
                className="text-gray-400 hover:text-accent transition-colors"
              >
                <CheckCircle2 size={18} className={task.done ? 'text-accent' : ''} />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </BentoCard>
  )
}
