import { motion, AnimatePresence } from 'framer-motion'
import '../../styles/loading.css'

const name = 'ALIREZA SAEB'
const letters = name.split('')

function LoadingScreen({ isVisible }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Background glow */}
          <div className="loader__glow" />

          <div className="loader__content">
            {/* Letter-by-letter name reveal */}
            <div className="loader__name" aria-label={name}>
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  className={letter === ' ' ? 'loader__space' : 'loader__letter'}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle */}
            <motion.p
              className="loader__subtitle"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              Software Engineer
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="loader__bar-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="loader__bar-fill"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.9, duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          </div>

          {/* Corner tag */}
          <motion.p
            className="loader__tag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            Brisbane, QLD
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
