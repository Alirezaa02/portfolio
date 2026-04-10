import '../styles/contact.css'
import Reveal from '../components/ui/Reveal.jsx'
import { motion } from 'framer-motion'

const contacts = [
  {
    label: 'Email',
    value: 'saebalireza02@gmail.com',
    href: 'mailto:saebalireza02@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/alireza-saeb',
    href: 'https://www.linkedin.com/in/alireza-saeb/',
  },
  {
    label: 'GitHub',
    value: 'github.com/Alirezaa02',
    href: 'https://github.com/Alirezaa02',
  },
  {
    label: 'Location',
    value: 'Brisbane, QLD — Australia',
    href: null,
  },
  {
    label: 'Status',
    value: 'Open to Opportunities',
    href: null,
    highlight: true,
  },
  {
    label: 'Education',
    value: 'QUT — Software Engineering (2026)',
    href: null,
  },
]

function Contact() {
  return (
    <main className="section">
      <div className="container">
        <Reveal>
          <div className="contact-page__intro">
            <p className="section-eyebrow">Contact</p>
            <h1 className="section-title">Let's work together.</h1>
            <p className="section-text">
              Feel free to reach out for opportunities, collaborations, or general
              conversations about software engineering and product development.
            </p>
          </div>
        </Reveal>

        <div className="contact-page__grid">
          {contacts.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.07}>
              <motion.article
                className="contact-page__card"
                whileHover={{ y: -4, borderColor: 'rgba(255,255,255,0.18)' }}
                transition={{ duration: 0.2 }}
              >
                <p className="contact-page__label">{c.label}</p>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="contact-page__value contact-page__value--link"
                  >
                    {c.value}
                  </a>
                ) : (
                  <p className={`contact-page__value ${c.highlight ? 'contact-page__value--open' : ''}`}>
                    {c.highlight && <span className="contact-page__dot" />}
                    {c.value}
                  </p>
                )}
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Contact
