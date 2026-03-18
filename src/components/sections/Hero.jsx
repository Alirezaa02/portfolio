import { Link } from 'react-router-dom'
import '../../styles/hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg" />

      <div className="container hero__container">
        <div className="hero__grid">
          <div className="hero__content">
            <p className="hero__eyebrow">Software Engineer</p>

            <h1 className="hero__title">
              Building polished digital products with strong engineering foundations.
            </h1>

            <p className="hero__description">
              I design and develop modern web applications, internal systems,
              and full-stack experiences with a focus on usability, performance,
              and clean architecture.
            </p>

            <div className="hero__actions">
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>

              <Link to="/contact" className="btn btn-secondary">
                Contact Me
              </Link>
            </div>

            <div className="hero__stats">
              <div>
                <p className="hero__stat-value">2+</p>
                <p className="hero__stat-label">Industry roles</p>
              </div>

              <div>
                <p className="hero__stat-value">Full-Stack</p>
                <p className="hero__stat-label">Engineering mindset</p>
              </div>

              <div>
                <p className="hero__stat-value">React</p>
                <p className="hero__stat-label">Frontend focus</p>
              </div>
            </div>
          </div>

          <div className="hero__panel">
            <div className="hero__panel-glow" />

            <div className="hero__panel-card">
              <div className="hero__window-dots">
                <span className="hero__window-dot hero__window-dot--red" />
                <span className="hero__window-dot hero__window-dot--yellow" />
                <span className="hero__window-dot hero__window-dot--green" />
              </div>

              <div className="hero__panel-inner">
                <div className="hero__panel-top">
                  <span className="hero__panel-label">Current Focus</span>

                  <span className="hero__badge px-3 py-1 rounded-full">
                    Portfolio Build
                  </span>
                </div>

                <h3 className="hero__panel-title">
                  Premium Software Engineer Portfolio
                </h3>

                <p className="hero__panel-text">
                  A modern portfolio experience showcasing full-stack projects,
                  software engineering experience, and product-focused UI design.
                </p>

                <div className="hero__mini-grid">
                  <div className="hero__mini-card">
                    <p className="hero__mini-label">Frontend</p>
                    <p className="hero__mini-value">React · CSS · Router</p>
                  </div>

                  <div className="hero__mini-card">
                    <p className="hero__mini-label">Next Phase</p>
                    <p className="hero__mini-value">Motion · Data · Backend</p>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero