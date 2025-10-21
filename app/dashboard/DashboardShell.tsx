'use client'

import { useLayoutScale, PANEL_WIDTH, PANEL_HEIGHT } from '@/lib/layoutScale'
import Sidebar from '@/components/Sidebar'
import BentoGrid from '@/components/BentoGrid'
import { motion } from 'framer-motion'

export default function DashboardShell() {
  const scale = useLayoutScale()

  return (
    <div className="relative z-10 w-screen h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
style={{
  width: PANEL_WIDTH, // garde la largeur d’origine
  height: PANEL_HEIGHT * 0.8, // réduit la hauteur à 80 %
  transformOrigin: 'center'
}}
        className="flex justify-center items-center"
      >
        {/* Conteneur de référence : la sidebar sera alignée au centre du panneau de bentos */}
        <div className="relative">
          {/* Sidebar positionnée AU BORD GAUCHE du panneau, centrée verticalement */}
          <div className="absolute -left-24 top-1/2 -translate-y-1/2 z-20">
            <Sidebar />
          </div>

          {/* Panneau flouté qui enveloppe tes 6 bentos */}
          <div className="bento-wrapper">
            <BentoGrid />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
