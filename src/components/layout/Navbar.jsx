import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../../styles/navbar.css'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Education', path: '/education' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
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
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `site-nav__link ${isActive ? 'active' : ''}`
                }
              >
                {item.name}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        <motion.a
          href="mailto:saebalireza02@gmail.com"
          className="site-header__cta"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.4 }}
        >
          Let's Talk
        </motion.a>
      </div>
    </motion.header>
  )
}

export default Navbar
