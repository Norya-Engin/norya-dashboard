// components/modules/InvoicesFollowup.tsx
'use client'

import BentoCard from '../BentoCard'
import { AlertCircle } from '@/lib/icons'
import { motion } from 'framer-motion'

const invoices = [
  { client: 'Société Martin', amount: '3 450 €', days: 12 },
  { client: 'SARL Dupont', amount: '1 890 €', days: 8 },
  { client: 'Entreprise Lefebvre', amount: '5 200 €', days: 15 },
]

export default function InvoicesFollowup() {
  return (
    <BentoCard className="col-span-1 row-span-1">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
          <AlertCircle size={20} className="text-red-500" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-[var(--text)]">Factures en retard</h3>
          <p className="text-sm text-[var(--muted)]">3 relances nécessaires</p>
        </div>
      </div>
      
      <div className="flex-1 space-y-3 overflow-hidden">
        {invoices.map((inv, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="flex items-center justify-between p-3 rounded-xl bg-white/50 hover:bg-white/80 transition-all"
          >
            <div>
              <p className="font-medium text-sm text-[var(--text)]">{inv.client}</p>
              <p className="text-xs text-[var(--muted)]">{inv.days} jours</p>
            </div>
            <span className="font-semibold text-sm text-[var(--text)]">{inv.amount}</span>
          </motion.div>
        ))}
      </div>

      <button className="mt-4 w-full py-2.5 rounded-xl bg-accent text-white font-medium text-sm hover:bg-[#3668E5] transition-colors">
        Relancer tous
      </button>
    </BentoCard>
  )
}