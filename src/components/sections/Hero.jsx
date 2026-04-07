import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import '../../styles/hero.css'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const panelVariant = {
  hidden: { opacity: 0, x: 48 },
  show: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" />

      <div className="container hero__container">
        <div className="hero__grid">
          {/* Left — staggered text */}
          <motion.div
            className="hero__content"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.p className="hero__eyebrow" variants={item}>
              Software Engineer
            </motion.p>

            <motion.h1 className="hero__title" variants={item}>
              Building modern software with clean architecture, practical impact,
              and polished user experience.
            </motion.h1>

            <motion.p className="hero__description" variants={item}>
              I'm Alireza Saeb — a final-year Software Engineering student at QUT
              with hands-on commercial experience in full-stack development,
              internal business systems, and modern web applications.
            </motion.p>

            <motion.div className="hero__actions" variants={item}>
              <Link to="/projects" className="btn btn-primary">View Projects</Link>
              <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
            </motion.div>

            <motion.div className="hero__stats" variants={item}>
              <div>
                <p className="hero__stat-value">Full-Stack</p>
                <p className="hero__stat-label">Development focus</p>
              </div>
              <div>
                <p className="hero__stat-value">React</p>
                <p className="hero__stat-label">Frontend engineering</p>
              </div>
              <div>
                <p className="hero__stat-value">Cloud</p>
                <p className="hero__stat-label">Scalable systems</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — panel floats in */}
          <motion.div
            className="hero__panel"
            variants={panelVariant}
            initial="hidden"
            animate="show"
          >
            <div className="hero__panel-glow" />

            <motion.div
              className="hero__panel-card"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="hero__window-dots">
                <span className="hero__window-dot hero__window-dot--red" />
                <span className="hero__window-dot hero__window-dot--yellow" />
                <span className="hero__window-dot hero__window-dot--green" />
              </div>

              <div className="hero__panel-inner">
                <div className="hero__panel-top">
                  <span className="hero__panel-label">Current Focus</span>
                  <span className="hero__badge">Portfolio Build</span>
                </div>

                <h3 className="hero__panel-title">Premium Software Engineer Portfolio</h3>

                <p className="hero__panel-text">
                  A modern portfolio experience showcasing projects, software
                  engineering experience, and product-focused UI design.
                </p>

                <div className="hero__mini-grid">
                  <div className="hero__mini-card">
                    <p className="hero__mini-label">Frontend</p>
                    <p className="hero__mini-value">React · CSS · Router</p>
                  </div>
                  <div className="hero__mini-card">
                    <p className="hero__mini-label">Next Phase</p>
                    <p className="hero__mini-value">Auth · Database · API</p>
                  </div>
                </div>
              </div>

              <div className="hero__bottom-grid">
                <div className="hero__bottom-card">
                  <p className="hero__mini-label">UI</p>
                  <p className="hero__mini-value">Modern</p>
                </div>
                <div className="hero__bottom-card">
                  <p className="hero__mini-label">Code</p>
                  <p className="hero__mini-value">Clean</p>
                </div>
                <div className="hero__bottom-card">
                  <p className="hero__mini-label">Build</p>
                  <p className="hero__mini-value">Scalable</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
