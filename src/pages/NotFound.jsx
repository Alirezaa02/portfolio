import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

function NotFound() {
  return (
    <main className="section">
      <div className="container">
        <motion.div
          style={{ textAlign: 'center', paddingTop: '80px', paddingBottom: '80px' }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            style={{
              fontSize: '7rem',
              fontWeight: 800,
              lineHeight: 1,
              background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '16px',
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            404
          </motion.p>

          <h1 style={{ fontSize: '1.8rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
            Page not found
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '400px', margin: '0 auto 36px' }}>
            The page you're looking for doesn't exist or has been moved.
          </p>

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary">Go Home</Link>
            <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}

export default NotFound
