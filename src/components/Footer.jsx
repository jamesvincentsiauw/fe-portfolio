import './Footer.css'

function Footer({ profile }) {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 {profile.name}. {profile.title}.</p>
      </div>
    </footer>
  )
}

export default Footer
