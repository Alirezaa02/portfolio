import '../../styles/about.css'

function About() {
  return (
    <section className="about section">
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <p className="about__eyebrow">About Me</p>

            <h2 className="section-title">
              Software engineer focused on building modern, scalable, and user-centred systems.
            </h2>

            <p className="section-text">
              I’m interested in building software that is not only functional, but also
              thoughtfully designed and maintainable. My work spans full-stack development,
              internal systems, and product-oriented web experiences that prioritise usability
              and long-term scalability.
            </p>

            <p className="section-text">
              I enjoy solving practical problems through clean architecture, modern development
              tools, and clear user-focused design. I’m especially drawn to projects where
              engineering quality and interface quality matter equally.
            </p>
          </div>

          <div className="about__cards">
            <article className="about__card">
              <h3 className="about__card-title">Full-Stack Thinking</h3>
              <p className="about__card-text">
                Comfortable working across frontend, backend, and system architecture.
              </p>
            </article>

            <article className="about__card">
              <h3 className="about__card-title">UI + Engineering</h3>
              <p className="about__card-text">
                Interested in building interfaces that are not only functional, but also polished and intuitive.
              </p>
            </article>

            <article className="about__card">
              <h3 className="about__card-title">Scalable Structure</h3>
              <p className="about__card-text">
                I care about clean code, reusable systems, and maintainable project structure.
              </p>
            </article>

            <article className="about__card">
              <h3 className="about__card-title">Problem Solving</h3>
              <p className="about__card-text">
                I enjoy translating technical requirements into practical software solutions.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About