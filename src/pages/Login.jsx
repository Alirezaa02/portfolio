import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../context/AuthContext'
import API from '../lib/api'
import '../styles/login.css'

const cardVariants = {
  idle:  { x: 0 },
  shake: {
    x: [0, -10, 10, -8, 8, -4, 4, 0],
    transition: { duration: 0.5 },
  },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

function LoadingDots() {
  return (
    <span className="loading-dots">
      {[0, 1, 2].map(i => (
        <motion.span
          key={i}
          className="loading-dot"
          animate={{ opacity: [0.2, 1, 0.2], y: [0, -4, 0] }}
          transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </span>
  )
}

function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from || '/projects'

  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)
  const [mode, setMode]         = useState('signup')
  const [shake, setShake]       = useState(false)
  const [slowConn, setSlowConn] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    setSlowConn(false)

    const slowTimer = setTimeout(() => setSlowConn(true), 4000)

    try {
      const res  = await fetch(`${API}/auth/${mode}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      const data = await res.json()

      if (!res.ok) {
        setError(data.detail || 'Something went wrong')
        setShake(true)
        setTimeout(() => setShake(false), 600)
        return
      }

      login(data.access_token)
      navigate(from)
    } catch {
      setError('Could not connect to server. Try again in a moment.')
      setShake(true)
      setTimeout(() => setShake(false), 600)
    } finally {
      clearTimeout(slowTimer)
      setSlowConn(false)
      setLoading(false)
    }
  }

  function switchMode(next) {
    setMode(next)
    setError('')
  }

  return (
    <main className="login-page section">
      {/* Animated background orbs */}
      <div className="login-bg">
        <motion.div
          className="login-bg__orb login-bg__orb--1"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="login-bg__orb login-bg__orb--2"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="container">
        <motion.div
          className="login-card"
          variants={cardVariants}
          animate={shake ? 'shake' : 'idle'}
        >
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            {/* Icon */}
            <motion.div className="login-card__icon" variants={fadeUp}>
              <motion.span
                animate={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 4 }}
                style={{ display: 'inline-block' }}
              >
                🔒
              </motion.span>
            </motion.div>

            {/* Header — animates when mode switches */}
            <motion.div className="login-card__header" variants={fadeUp}>
              <p className="login-card__eyebrow">Projects Access</p>

              <AnimatePresence mode="wait">
                <motion.h1
                  key={`title-${mode}`}
                  className="login-card__title"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {mode === 'signup' ? 'Create an account to view projects' : 'Welcome back'}
                </motion.h1>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`sub-${mode}`}
                  className="login-card__sub"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mode === 'signup'
                    ? 'Free to sign up — takes 10 seconds. Projects are shared with verified visitors only.'
                    : 'Sign in to access the projects section.'}
                </motion.p>
              </AnimatePresence>
            </motion.div>

            {/* Form fields */}
            <motion.form className="login-form" onSubmit={handleSubmit} variants={fadeUp}>
              <motion.div className="login-form__field" variants={fadeUp}>
                <label className="login-form__label">Email</label>
                <motion.input
                  className="login-form__input"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.15 }}
                />
              </motion.div>

              <motion.div className="login-form__field" variants={fadeUp}>
                <label className="login-form__label">Password</label>
                <motion.input
                  className="login-form__input"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.15 }}
                />
              </motion.div>

              {/* Error */}
              <AnimatePresence>
                {error && (
                  <motion.p
                    className="login-form__error"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {error}
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Slow connection notice */}
              <AnimatePresence>
                {slowConn && (
                  <motion.p
                    className="login-form__slow"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ⏳ Waking up the server — this takes up to 30s on first load…
                  </motion.p>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <motion.button
                className="btn btn-primary login-form__btn"
                type="submit"
                disabled={loading}
                variants={fadeUp}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.97 }}
                transition={{ duration: 0.15 }}
              >
                {loading ? (
                  <LoadingDots />
                ) : mode === 'signup' ? (
                  'Create Account & View Projects'
                ) : (
                  'Sign In'
                )}
              </motion.button>
            </motion.form>

            {/* Switch mode */}
            <motion.p className="login-card__switch" variants={fadeUp}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={mode}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mode === 'signup' ? (
                    <>Already have an account?{' '}
                      <button onClick={() => switchMode('login')}>Sign in</button>
                    </>
                  ) : (
                    <>Don't have an account?{' '}
                      <button onClick={() => switchMode('signup')}>Sign up</button>
                    </>
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}

export default Login
