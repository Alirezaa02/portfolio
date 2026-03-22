import '../../styles/contact.css'

function Contact() {
  return (
    <main className="section">
      <div className="container">
        <div className="contact-page__intro">
          <h1 className="section-title">Contact</h1>
          <p className="section-text">
            Feel free to reach out for opportunities, collaborations, or general
            conversations about software engineering and product development.
          </p>
        </div>

        <div className="contact-page__grid">
          <article className="contact-page__card">
            <p className="contact-page__label">Email</p>
            <a
              href="mailto:saebalireza02@gmail.com"
              className="contact-page__value contact-page__value--link"
            >
              saebalireza02@gmail.com
            </a>
          </article>

          <article className="contact-page__card">
            <p className="contact-page__label">Location</p>
            <p className="contact-page__value">Brisbane, Australia</p>
          </article>

          <article className="contact-page__card">
            <p className="contact-page__label">GitHub</p>
            <a
              href="https://github.com/Alirezaa02"
              target="_blank"
              rel="noreferrer"
              className="contact-page__value contact-page__value--link"
            >
              github.com/Alirezaa02
            </a>
          </article>

          <article className="contact-page__card">
            <p className="contact-page__label">Status</p>
            <p className="contact-page__value">Open to opportunities</p>
          </article>
        </div>
      </div>
    </main>
  )
}

export default Contact