import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { languages, techSkills, toolSkills, practices } from '../../data/skills'
import '../../styles/skills.css'
import Reveal from '../ui/Reveal.jsx'

function LangBar({ name, level, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div className="skills__lang-item" ref={ref}>
      <div className="skills__lang-header">
        <span className="skills__lang-name">{name}</span>
        <motion.span
          className="skills__lang-level"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.4 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="skills__lang-bar">
        <motion.div
          className="skills__lang-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{
            duration: 1.1,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ originX: 0, width: `${level}%` }}
        />
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section className="skills section">
      <div className="container">
        <Reveal>
          <div className="skills__intro">
            <p className="skills__eyebrow">Skills</p>
            <h2 className="section-title">
              Tools and technologies I use to build modern software.
            </h2>
            <p className="section-text">
              My work spans frontend development, backend systems, and cloud-focused
              tools, with an emphasis on practical implementation and clean structure.
            </p>
          </div>
        </Reveal>

        {/* Language proficiency bars */}
        <Reveal delay={0.1}>
          <div className="skills__lang-section">
            <h3 className="skills__section-heading">Programming Languages</h3>
            <div className="skills__lang-list">
              {languages.map((lang, i) => (
                <LangBar key={lang.name} name={lang.name} level={lang.level} index={i} />
              ))}
            </div>
          </div>
        </Reveal>

        {/* Frameworks tech grid */}
        <Reveal delay={0.1} direction="left">
          <div className="skills__section-heading-wrap">
            <h3 className="skills__section-heading">Frameworks & Technologies</h3>
          </div>
          <div className="skills__groups">
            {techSkills.map((group) => (
              <article key={group.category} className="skills__group">
                <h4 className="skills__group-title">{group.category}</h4>
                <div className="skills__items">
                  {group.items.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="skills__item"
                      whileHover={{ y: -4, scale: 1.04 }}
                      transition={{ duration: 0.2 }}
                    >
                      <img src={skill.icon} alt={skill.name} className="skills__icon" />
                      <span className="skills__name">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Reveal>

        {/* Tools */}
        <Reveal delay={0.1} direction="right">
          <div className="skills__section-heading-wrap">
            <h3 className="skills__section-heading">Tools & Platforms</h3>
          </div>
          <div className="skills__tools">
            {toolSkills.map((tool, i) => (
              <motion.span
                key={tool.name}
                className="skills__tool-tag"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.06 }}
              >
                {tool.name}
              </motion.span>
            ))}
          </div>
        </Reveal>

        {/* Practices */}
        <Reveal delay={0.1} direction="up">
          <div className="skills__section-heading-wrap">
            <h3 className="skills__section-heading">Practices</h3>
          </div>
          <div className="skills__tools">
            {practices.map((p, i) => (
              <motion.span
                key={p}
                className="skills__practice-tag"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.06 }}
              >
                {p}
              </motion.span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Skills
