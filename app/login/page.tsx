'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

interface FormData {
  fullName: string
  email: string
  password: string
  confirmPassword: string
}

interface Errors {
  fullName?: string
  email?: string
  password?: string
  confirmPassword?: string
}

export default function LoginForm() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [shake, setShake] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const validatePassword = (password: string) => {
    return password.length >= 8 && /\d/.test(password) && /[!@#$%^&*]/.test(password)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof Errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const newErrors: Errors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
      setShake('fullName')
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
      setShake('email')
    }

    if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 8 characters with a number and special character'
      setShake('password')
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
      setShake('confirmPassword')
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setTimeout(() => setShake(null), 500)
      return
    }

    // ✅ ICI : Les identifiants corrects pour se connecter
    if (formData.email === 'norya@admin.com' && formData.password === '123456') {
      setIsSubmitting(true)
      await new Promise(resolve => setTimeout(resolve, 800))
      router.push('/dashboard')
    } else {
      setErrors({ 
        email: 'Invalid credentials', 
        password: 'Invalid credentials' 
      })
      setShake('email')
      setTimeout(() => setShake(null), 500)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: isSubmitting ? 0 : 1 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-md"
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8"
      >
        <h2 className="text-3xl font-light text-white mb-2">Create your account</h2>
        <p className="text-sm text-gray-400 font-light">
          Join a network of visionaries and unlock premium design resources tailored for you.
        </p>
      </motion.div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <motion.div
          animate={shake === 'fullName' ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <label htmlFor="fullName" className="block text-sm font-light text-gray-300 mb-2">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Andrew Thomas"
            className={`w-full px-4 py-3 bg-[#1A1D23] border ${
              errors.fullName ? 'border-red-500' : 'border-gray-700'
            } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#417AFF] transition-colors`}
          />
          <AnimatePresence>
            {errors.fullName && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-xs mt-1"
              >
                {errors.fullName}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          animate={shake === 'email' ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <label htmlFor="email" className="block text-sm font-light text-gray-300 mb-2">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. andrew@example.com"
            className={`w-full px-4 py-3 bg-[#1A1D23] border ${
              errors.email ? 'border-red-500' : 'border-gray-700'
            } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#417AFF] transition-colors`}
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-xs mt-1"
              >
                {errors.email}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          animate={shake === 'password' ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <label htmlFor="password" className="block text-sm font-light text-gray-300 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••••••"
            className={`w-full px-4 py-3 bg-[#1A1D23] border ${
              errors.password ? 'border-red-500' : 'border-gray-700'
            } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#417AFF] transition-colors`}
          />
          <AnimatePresence>
            {errors.password && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-xs mt-1"
              >
                {errors.password}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        <motion.div
          animate={shake === 'confirmPassword' ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
        >
          <label htmlFor="confirmPassword" className="block text-sm font-light text-gray-300 mb-2">
            Confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••••••"
            className={`w-full px-4 py-3 bg-[#1A1D23] border ${
              errors.confirmPassword ? 'border-red-500' : 'border-gray-700'
            } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#417AFF] transition-colors`}
          />
          <AnimatePresence>
            {errors.confirmPassword && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-xs mt-1"
              >
                {errors.confirmPassword}
              </motion.p>
            )}
          </AnimatePresence>
          <p className="text-xs text-gray-500 mt-2 font-light">
            Password must be at least 8 characters, including a number and a special character.
          </p>
        </motion.div>

        <motion.button
          type="submit"
          whileHover={{ boxShadow: '0 0 20px rgba(65, 122, 255, 0.5)' }}
          whileTap={{ scale: 0.98 }}
          disabled={isSubmitting}
          className="w-full py-3 bg-[#417AFF] hover:bg-[#3668E5] text-white font-medium rounded-lg transition-all duration-300 mt-6"
        >
          {isSubmitting ? 'Logging in...' : 'Log in'}
        </motion.button>

        <p className="text-center text-sm text-gray-400 mt-6 font-light">
          By creating an account, you agree to our{' '}
          <span className="text-white hover:underline cursor-pointer">Terms of Service</span> and{' '}
          <span className="text-white hover:underline cursor-pointer">Privacy Policy</span>
        </p>
      </form>
    </motion.div>
  )
}