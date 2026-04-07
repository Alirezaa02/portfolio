import { motion } from 'framer-motion'

const variants = {
  up:    { hidden: { opacity: 0, y: 32 },   show: { opacity: 1, y: 0 } },
  down:  { hidden: { opacity: 0, y: -32 },  show: { opacity: 1, y: 0 } },
  left:  { hidden: { opacity: 0, x: -40 },  show: { opacity: 1, x: 0 } },
  right: { hidden: { opacity: 0, x: 40 },   show: { opacity: 1, x: 0 } },
  fade:  { hidden: { opacity: 0 },           show: { opacity: 1 } },
}

function Reveal({ children, delay = 0, direction = 'up', duration = 0.6 }) {
  const v = variants[direction]

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: v.hidden,
        show: {
          ...v.show,
          transition: { duration, delay, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
