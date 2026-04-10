import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from '../../context/AuthContext'
import '../../styles/navbar.css'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects', gated: true },
  { name: 'Experience', path: '/experience' },
  { name: 'Education', path: '/education' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  const { isLoggedIn, logout } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  // Prevent body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <motion.header
      className="site-header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="site-header__inner">
        <Link to="/" className="site-logo">Alireza Saeb</Link>

        {/* Desktop nav */}
        <nav className="site-nav">
          {navItems.map((item, i) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.9 + i * 0.07, duration: 0.4 }}
              className="site-nav__item"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) => `site-nav__link ${isActive ? 'active' : ''}`}
              >
                {item.name}
                {item.gated && !isLoggedIn && <span className="site-nav__lock">🔒</span>}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        <motion.div
          className="site-header__right"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.4 }}
        >
          {/* Desktop CTA */}
          <div className="site-header__cta-wrap">
            {isLoggedIn ? (
              <button className="site-header__cta" onClick={logout}>Log Out</button>
            ) : (
              <a href="mailto:saebalireza02@gmail.com" className="site-header__cta">Let's Talk</a>
            )}
          </div>

          {/* Hamburger button */}
          <button
            className="site-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className={`site-hamburger__bar ${menuOpen ? 'open' : ''}`} />
            <span className={`site-hamburger__bar ${menuOpen ? 'open' : ''}`} />
            <span className={`site-hamburger__bar ${menuOpen ? 'open' : ''}`} />
          </button>
        </motion.div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="mobile-menu__nav">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => `mobile-menu__link ${isActive ? 'active' : ''}`}
                  >
                    {item.name}
                    {item.gated && !isLoggedIn && <span className="site-nav__lock">🔒</span>}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="mobile-menu__footer">
              {isLoggedIn ? (
                <button className="btn btn-secondary" style={{ width: '100%' }} onClick={logout}>
                  Log Out
                </button>
              ) : (
                <a href="mailto:saebalireza02@gmail.com" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                  Let's Talk
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
