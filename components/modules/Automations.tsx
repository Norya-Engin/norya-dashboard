// components/modules/Automations.tsx
'use client'

import BentoCard from '../BentoCard'
import { Repeat } from '@/lib/icons'
import { useState } from 'react'
import { motion } from 'framer-motion'

interface Automation {
  id: number
  name: string
  description: string
  active: boolean
}

export default function Automations() {
  const [automations, setAutomations] = useState<Automation[]>([
    { id: 1, name: 'Relance automatique', description: 'Factures > 7 jours', active: true },
    { id: 2, name: 'Rapport hebdo', description: 'Tous les lundis 9h', active: true },
  ])

  const toggleAutomation = (id: number) => {
    setAutomations(prev =>
      prev.map(auto =>
        auto.id === id ? { ...auto, active: !auto.active } : auto
      )
    )
  }

  return (
  <BentoCard className="col-span-1 row-span-1 h-auto">
    <div className="flex items-center gap-3 mb-3">
      <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center">
        <Repeat size={20} className="text-green-500" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-[var(--text)]">Automatisations</h3>
        <p className="text-sm text-[var(--muted)]">
          {automations.filter(a => a.active).length} actives
        </p>
      </div>
    </div>

    {/* ✅ Carte responsive : s’adapte à la hauteur du contenu */}
    <div className="flex flex-col gap-2 transition-all duration-300 ease-in-out">
      {automations.map((auto, i) => (
        <motion.div
          key={auto.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ delay: i * 0.05 }}
          className="flex items-center justify-between p-3 rounded-xl bg-white/40 hover:bg-white/60 transition-all"
        >
          <div className="flex-1">
            <p className="font-medium text-sm text-[var(--text)]">{auto.name}</p>
            <p className="text-xs text-[var(--muted)]">{auto.description}</p>
          </div>
          <button
            onClick={() => toggleAutomation(auto.id)}
            className={`relative w-11 h-6 rounded-full transition-colors ${
              auto.active ? 'bg-accent' : 'bg-gray-300'
            }`}
          >
            <motion.div
              animate={{ x: auto.active ? 20 : 2 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="absolute top-1 w-4 h-4 bg-white rounded-full shadow"
            />
          </button>
        </motion.div>
      ))}
    </div>
  </BentoCard>
)
}
