// components/modules/VatStatus.tsx
'use client'

import BentoCard from '../BentoCard'
import { TrendingUp } from '@/lib/icons'
import { motion } from 'framer-motion'

export default function VatStatus() {
  const progress = 68

  return (
    <BentoCard className="col-span-1 row-span-1">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center">
          <TrendingUp size={20} className="text-accent" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[var(--text)]">État TVA</h3>
          <p className="text-sm text-[var(--muted)]">Trimestre Q4 2025</p>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <div className="mb-3">
          <div className="flex justify-between mb-2">
            <span className="text-xs font-medium text-[var(--muted)]">Progression</span>
            <span className="text-xs font-semibold text-accent">{progress}%</span>
          </div>
          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
              className="h-full bg-gradient-to-r from-accent to-blue-400"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <div className="p-3 rounded-xl bg-white/50">
            <p className="text-xs text-[var(--muted)] mb-1">Collectée</p>
            <p className="text-lg font-bold text-[var(--text)]">12 450 €</p>
          </div>
          <div className="p-3 rounded-xl bg-white/50">
            <p className="text-xs text-[var(--muted)] mb-1">Déductible</p>
            <p className="text-lg font-bold text-[var(--text)]">4 890 €</p>
          </div>
        </div>
      </div>

      <button className="mt-4 w-full py-2.5 rounded-xl border-2 border-accent text-accent font-medium text-sm hover:bg-accent hover:text-white transition-all">
        Générer déclaration
      </button>
    </BentoCard>
  )
}