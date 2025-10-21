// components/BentoGrid.tsx
'use client'

import { motion } from 'framer-motion'
import InvoicesFollowup from './modules/InvoicesFollowup'
import VatStatus from './modules/VatStatus'
import MailCenter from './modules/MailCenter'
import Automations from './modules/Automations'
import TeamTasks from './modules/TeamTasks'
import Performance from './modules/Performance'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
}

export default function BentoGrid() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="
        w-full mx-auto
        grid gap-5
        grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
        items-stretch         /* chaque cellule s’étire en hauteur */
        auto-rows-[1fr]       /* ⚠️ chaque ligne a la même hauteur */
        max-w-[1400px]
      "
    >
      {/* Ligne 1 */}
      <div className="h-full"><InvoicesFollowup /></div>
      <div className="h-full"><VatStatus /></div>
      <div className="h-full"><MailCenter /></div>

      {/* Ligne 2 */}
      <div className="h-full"><Automations /></div>
      <div className="h-full"><TeamTasks /></div>
      <div className="h-full"><Performance /></div>
    </motion.div>
  )
}
