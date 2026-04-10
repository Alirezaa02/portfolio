import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import '../styles/contact.css'
import Reveal from '../components/ui/Reveal.jsx'

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
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errors, setErrors] = useState({})

  function validate(form) {
    const errs = {}
    if (!form.from_name.trim()) errs.from_name = 'Name is required'
    if (!form.from_email.trim()) errs.from_email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.from_email)) errs.from_email = 'Invalid email'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const form = formRef.current
    const data = {
      from_name: form.from_name.value,
      from_email: form.from_email.value,
      subject: form.subject.value,
      message: form.message.value,
    }

    const errs = validate(data)
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setErrors({})
    setStatus('sending')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

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

        {/* Contact Form */}
        <Reveal delay={0.1}>
          <div className="contact-form__wrap">
            <h2 className="contact-form__heading">Send a message</h2>
            <p className="contact-form__sub">I'll get back to you within 24 hours.</p>

            <form ref={formRef} onSubmit={handleSubmit} className="contact-form" noValidate>
              <div className="contact-form__row">
                <div className="contact-form__field">
                  <label htmlFor="from_name">Name</label>
                  <input
                    id="from_name"
                    name="from_name"
                    type="text"
                    placeholder="Jane Smith"
                    className={errors.from_name ? 'has-error' : ''}
                    onChange={() => setErrors(e => ({ ...e, from_name: '' }))}
                  />
                  {errors.from_name && <span className="contact-form__error">{errors.from_name}</span>}
                </div>

                <div className="contact-form__field">
                  <label htmlFor="from_email">Email</label>
                  <input
                    id="from_email"
                    name="from_email"
                    type="email"
                    placeholder="jane@company.com"
                    className={errors.from_email ? 'has-error' : ''}
                    onChange={() => setErrors(e => ({ ...e, from_email: '' }))}
                  />
                  {errors.from_email && <span className="contact-form__error">{errors.from_email}</span>}
                </div>
              </div>

              <div className="contact-form__field">
                <label htmlFor="subject">Subject <span className="contact-form__optional">(optional)</span></label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Opportunity at Acme Corp"
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about the role, project, or just say hi..."
                  className={errors.message ? 'has-error' : ''}
                  onChange={() => setErrors(e => ({ ...e, message: '' }))}
                />
                {errors.message && <span className="contact-form__error">{errors.message}</span>}
              </div>

              <div className="contact-form__footer">
                <motion.button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                  whileTap={{ scale: 0.97 }}
                >
                  {status === 'sending' ? (
                    <span className="contact-form__dots">
                      <span /><span /><span />
                    </span>
                  ) : 'Send Message'}
                </motion.button>

                <AnimatePresence>
                  {status === 'success' && (
                    <motion.p
                      className="contact-form__status contact-form__status--ok"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      Message sent! I'll be in touch soon.
                    </motion.p>
                  )}
                  {status === 'error' && (
                    <motion.p
                      className="contact-form__status contact-form__status--err"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      Something went wrong. Try emailing me directly.
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </Reveal>
      </div>
    </main>
  )
}

export default Contact
