import * as React from "react"
import "./footer.scss"

const socialData = [
  {
    "title": "email",
    "url": "mailto:sakshipatel2598@gmail.com"
  },
  {
    "title": "linkedin",
    "url": "https://www.linkedin.com/in/sakshipatel25/"
  },
  {
    "title": "github",
    "url": "https://github.com/sakshi251298"
  }
]
const Footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      <div className="bottom">
        <span>Sakshi Patel</span>
        <img className="emoji" src="./images/emojis/rockon.png" alt="emoji"/>
          <span>2025</span>
      </div>
    </div>
    <div className="footer__links">
      {
        socialData.map((social) => (
          <a href={social.url} target="_blank" rel="noreferrer" title="{{link.title}}">
            <span className="text">{social.title}</span>
          </a>
        ))
      }
    </div>
  </footer>
)

export default Footer
