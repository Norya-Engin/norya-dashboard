'use client'

import { motion } from 'framer-motion'
import { Home, Mail, FileText, Repeat, Users, Activity, Settings } from '@/lib/icons'
import { useState } from 'react'

const navItems = [
  { icon: Home, label: 'Accueil' },
  { icon: Mail, label: 'Mails' },
  { icon: FileText, label: 'Factures' },
  { icon: Repeat, label: 'Automatisations' },
  { icon: Users, label: 'Équipe' },
  { icon: Activity, label: 'Performance' },
  { icon: Settings, label: 'Paramètres' },
]

export default function Sidebar() {
  const [active, setActive] = useState(0)

  return (
    <motion.nav
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="
        glass-panel
        w-16 h-[420px] rounded-3xl
        flex flex-col items-center justify-center gap-3
        bg-white/10 backdrop-blur-xl border border-white/20
        shadow-[0_8px_40px_rgba(0,0,0,0.25)]
      "
    >
      {navItems.map((item, i) => (
        <motion.button
          key={i}
          onClick={() => setActive(i)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
            active === i
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-400/40'
              : 'text-gray-300 hover:bg-white/20'
          }`}
          aria-label={item.label}
          title={item.label}
        >
          <item.icon size={20} />
        </motion.button>
      ))}
    </motion.nav>
  )
}
