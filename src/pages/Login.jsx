import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import '../styles/login.css'

const API = 'http://localhost:8000'

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/projects'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [mode, setMode] = useState('signup')

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch(`${API}/auth/${mode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.detail || 'Something went wrong')
        return
      }

      login(data.access_token)
      navigate(from)
    } catch {
      setError('Could not connect to server. Is the backend running?')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="login-page section">
      <div className="container">
        <motion.div
          className="login-card"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Lock icon */}
          <div className="login-card__icon">🔒</div>

          <div className="login-card__header">
            <p className="login-card__eyebrow">Projects Access</p>
            <h1 className="login-card__title">
              {mode === 'signup' ? 'Create an account to view projects' : 'Welcome back'}
            </h1>
            <p className="login-card__sub">
              {mode === 'signup'
                ? 'Free to sign up — takes 10 seconds. Projects are shared with verified visitors only.'
                : 'Sign in to access the projects section.'}
            </p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-form__field">
              <label className="login-form__label">Email</label>
              <input
                className="login-form__input"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="login-form__field">
              <label className="login-form__label">Password</label>
              <input
                className="login-form__input"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className="login-form__error">{error}</p>}

            <button className="btn btn-primary login-form__btn" type="submit" disabled={loading}>
              {loading ? 'Please wait…' : mode === 'signup' ? 'Create Account & View Projects' : 'Sign In'}
            </button>
          </form>

          <p className="login-card__switch">
            {mode === 'signup' ? (
              <>Already have an account?{' '}
                <button onClick={() => { setMode('login'); setError('') }}>Sign in</button>
              </>
            ) : (
              <>Don't have an account?{' '}
                <button onClick={() => { setMode('signup'); setError('') }}>Sign up</button>
              </>
            )}
          </p>
        </motion.div>
      </div>
    </main>
  )
}

export default Login
