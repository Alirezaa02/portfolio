import { Link, NavLink } from 'react-router-dom'
import '../../styles/navbar.css'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Contact', path: '/contact' },
]

function Navbar() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-logo">
          Alireza Saeb
        </Link>

        <nav className="site-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `site-nav__link ${isActive ? 'active' : ''}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <a href="mailto:saebalireza02@gmail.com" className="site-header__cta">
          Let’s Talk
        </a>
      </div>
    </header>
  )
}

export default Navbar