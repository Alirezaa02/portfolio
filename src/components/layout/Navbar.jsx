import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
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

  return (
    <motion.header
      className="site-header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="site-header__inner">
        <Link to="/" className="site-logo">Alireza Saeb</Link>

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
                className={({ isActive }) =>
                  `site-nav__link ${isActive ? 'active' : ''}`
                }
              >
                {item.name}
                {item.gated && !isLoggedIn && (
                  <span className="site-nav__lock">🔒</span>
                )}
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
          {isLoggedIn ? (
            <button className="site-header__cta" onClick={logout}>Log Out</button>
          ) : (
            <a href="mailto:saebalireza02@gmail.com" className="site-header__cta">
              Let's Talk
            </a>
          )}
        </motion.div>
      </div>
    </motion.header>
  )
}

export default Navbar
