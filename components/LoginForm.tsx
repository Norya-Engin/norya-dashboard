'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [shake, setShake] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Veuillez remplir tous les champs')
      setShake(true)
      setTimeout(() => setShake(false), 500)
      return
    }

    if (email === 'norya@admin.com' && password === '123456') {
      setIsSubmitting(true)
      await new Promise(resolve => setTimeout(resolve, 700))
      router.push('/dashboard')
    } else {
      setError('Identifiants incorrects 😅')
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-light text-white mb-2">Connexion</h2>
        <p className="text-sm text-gray-400 font-light">
          Connectez-vous à votre espace administrateur.
        </p>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <motion.div
          animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <label htmlFor="email" className="block text-sm font-light text-gray-300 mb-2">
            Adresse e-mail
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="norya@admin.com"
            className="w-full px-4 py-3 bg-[#1A1D23] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#417AFF] transition-colors"
          />
        </motion.div>

        <motion.div
          animate={shake ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <label htmlFor="password" className="block text-sm font-light text-gray-300 mb-2">
            Mot de passe
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-3 bg-[#1A1D23] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#417AFF] transition-colors"
          />
        </motion.div>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-red-500 text-sm mt-2 text-center"
            >
              {error}
            </motion.p>
          )}
        </AnimatePresence>

        <motion.button
          type="submit"
          whileHover={{ boxShadow: '0 0 20px rgba(65, 122, 255, 0.5)' }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          className="w-full py-3 bg-[#417AFF] hover:bg-[#3668E5] text-white font-medium rounded-lg transition-all duration-300 mt-6"
        >
          {isSubmitting ? 'Connexion...' : 'Se connecter'}
        </motion.button>

        <p className="text-center text-xs text-gray-500 mt-6 font-light">
          © Norya — Tous droits réservés.
        </p>
      </form>
    </motion.div>
  )
}
