'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email === 'norya@admin.com' && password === '123456') {
      router.push('/dashboard') // ✅ redirige vers ton dashboard
    } else {
      alert('Identifiants incorrects 😅')
    }
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: 'url(/background.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <form
        onSubmit={handleLogin}
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(15px)',
          borderRadius: '20px',
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        }}
      >
        <h2 style={{ color: 'white', textAlign: 'center' }}>Connexion</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '10px', borderRadius: '10px', border: 'none' }}
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '10px', borderRadius: '10px', border: 'none' }}
        />
        <button
          type="submit"
          style={{
            background: '#417AFF',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            padding: '10px',
            cursor: 'pointer',
          }}
        >
          Se connecter
        </button>
      </form>
    </div>
  )
}
