import { Link } from 'react-router-dom'
import '../../styles/footer.css'

const links = [
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Education', path: '/education' },
  { label: 'Contact', path: '/contact' },
]

const socials = [
  { label: 'GitHub', href: 'https://github.com/Alirezaa02' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alireza-saeb/' },
  { label: 'Email', href: 'mailto:saebalireza02@gmail.com' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link to="/" className="site-footer__logo">Alireza Saeb</Link>
            <p className="site-footer__tagline">
              Software Engineer · Brisbane, QLD
            </p>
          </div>

          <div className="site-footer__nav">
            {links.map(l => (
              <Link key={l.path} to={l.path} className="site-footer__link">
                {l.label}
              </Link>
            ))}
          </div>

          <div className="site-footer__socials">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="site-footer__social"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© 2026 Alireza Saeb. All rights reserved.</p>
          <p>Built with React + FastAPI</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
