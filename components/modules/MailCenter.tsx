// components/modules/MailCenter.tsx
'use client'

import BentoCard from '../BentoCard'
import { Mail } from '@/lib/icons'
import { useState } from 'react'
import { motion } from 'framer-motion'

const filters = ['Tous', 'Clients', 'URSSAF', 'Fisc']

const mails = [
  { from: 'Client Pro', subject: 'Demande de devis', time: '10:24', category: 'Clients' },
  { from: 'URSSAF', subject: 'Déclaration trimestrielle', time: '09:15', category: 'URSSAF' },
  { from: 'Direction fiscale', subject: 'Avis d\'imposition', time: 'Hier', category: 'Fisc' },
]

export default function MailCenter() {
  const [activeFilter, setActiveFilter] = useState('Tous')
  const filtered = activeFilter === 'Tous' ? mails : mails.filter(m => m.category === activeFilter)

  return (
    <BentoCard className="col-span-1 row-span-2">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
          <Mail size={20} className="text-purple-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[var(--text)]">Centre de mails</h3>
          <p className="text-sm text-[var(--muted)]">{mails.length} non traités</p>
        </div>
      </div>

      <div className="flex gap-2 mb-4 flex-wrap">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeFilter === filter
                ? 'bg-accent text-white'
                : 'bg-white/50 text-[var(--muted)] hover:bg-white/80'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="flex-1 space-y-2 overflow-hidden">
        {filtered.map((mail, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="p-3 rounded-xl bg-white/50 hover:bg-white/80 transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start mb-1">
              <p className="font-medium text-sm text-[var(--text)]">{mail.from}</p>
              <span className="text-xs text-[var(--muted)]">{mail.time}</span>
            </div>
            <p className="text-xs text-[var(--muted)] truncate">{mail.subject}</p>
          </motion.div>
        ))}
      </div>
    </BentoCard>
  )
}