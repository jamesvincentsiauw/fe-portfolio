import './Hero.css'

function Hero({ profile }) {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">{profile.name}</span>
          </h1>
          <p className="hero-subtitle">{profile.title}</p>
          <p className="hero-description">
            {profile.description}
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={(e) => scrollToSection(e, 'projects')}>
              View My Work
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => scrollToSection(e, 'contact')}>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
