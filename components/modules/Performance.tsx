// components/modules/Performance.tsx
'use client'

import BentoCard from '../BentoCard'
import { Activity } from '@/lib/icons'
import { motion } from 'framer-motion'

const kpis = [
  { label: 'CA mensuel', value: '48 520 €', trend: '+12%' },
  { label: 'Heures gagnées', value: '127h', trend: '+8%' },
  { label: 'Taux collecte', value: '94%', trend: '+3%' },
]

const chartData = [30, 45, 38, 55, 48, 62, 58, 70, 65, 78, 72, 85]

export default function Performance() {
  const maxValue = Math.max(...chartData)

  return (
    <BentoCard className="col-span-1 row-span-1">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center">
          <Activity size={20} className="text-yellow-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[var(--text)]">Performance</h3>
          <p className="text-sm text-[var(--muted)]">Vue d'ensemble</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {kpis.map((kpi, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="p-2.5 rounded-xl bg-white/50"
          >
            <p className="text-[10px] text-[var(--muted)] mb-1">{kpi.label}</p>
            <p className="text-sm font-bold text-[var(--text)]">{kpi.value}</p>
            <p className="text-[10px] text-green-600 font-medium">{kpi.trend}</p>
          </motion.div>
        ))}
      </div>

      <div className="flex-1 flex items-end gap-1.5 px-2">
        {chartData.map((value, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            animate={{ height: `${(value / maxValue) * 100}%` }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: 'easeOut' }}
            className="flex-1 bg-gradient-to-t from-accent to-blue-400 rounded-t-md min-h-[4px]"
          />
        ))}
      </div>
    </BentoCard>
  )
}