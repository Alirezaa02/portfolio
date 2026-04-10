import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import profilePic from '../../assets/profile.jpg'
import cv from '../../assets/Alireza_Saeb_CV.pdf'
import '../../styles/hero.css'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
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
              <a href={cv} download="Alireza_Saeb_CV.pdf" className="btn btn-secondary">
                Download CV
              </a>
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

          {/* Right — profile photo */}
          <motion.div
            className="hero__photo-side"
            variants={panelVariant}
            initial="hidden"
            animate="show"
          >
            {/* Glow behind photo */}
            <div className="hero__photo-glow" />

            {/* Floating photo */}
            <motion.div
              className="hero__photo-wrap"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="hero__photo-ring" />
              <img
                src={profilePic}
                alt="Alireza Saeb"
                className="hero__photo"
              />

              {/* Status badge */}
              <motion.div
                className="hero__photo-badge"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.4 }}
              >
                <span className="hero__badge-dot" />
                Open to Opportunities
              </motion.div>
            </motion.div>

            {/* Floating info cards */}
            <motion.div
              className="hero__float-card hero__float-card--left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <p className="hero__float-label">Based in</p>
              <p className="hero__float-value">Brisbane, QLD</p>
            </motion.div>

            <motion.div
              className="hero__float-card hero__float-card--right"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <p className="hero__float-label">Education</p>
              <p className="hero__float-value">QUT — 2026</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero
