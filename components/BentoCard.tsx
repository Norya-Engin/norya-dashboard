'use client'

import clsx from 'clsx'
import React from 'react'

type Props = {
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export default function BentoCard({ title, subtitle, children, className }: Props) {
  return (
    <div
      className={clsx(
        'glass-panel rounded-2xl p-5 h-full min-h-[280px] flex flex-col', // <= hauteur uniforme
        className
      )}
    >
      {(title || subtitle) && (
        <header className="mb-3">
          {title && <h3 className="text-lg font-semibold">{title}</h3>}
          {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
        </header>
      )}

      {/* Le contenu prend l’espace restant pour garder les hauteurs cohérentes */}
      <div className="flex-1 flex flex-col gap-3">
        {children}
      </div>
    </div>
  )
}
