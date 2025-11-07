import './Contact.css'

function Contact({ profile }) {
  const contacts = [
    {
      label: 'Email',
      href: `mailto:${profile.email}`
    },
    {
      label: 'GitHub',
      href: profile.github
    },
    {
      label: 'LinkedIn',
      href: profile.linkedin
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Let's Connect</h2>
        <p className="contact-description">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div className="contact-links">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              className="contact-link"
              target={contact.label !== 'Email' ? '_blank' : undefined}
              rel={contact.label !== 'Email' ? 'noopener noreferrer' : undefined}
            >
              <span className="link-label">{contact.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
