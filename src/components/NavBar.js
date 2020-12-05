import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithubAlt, faInstagram } from '@fortawesome/free-brands-svg-icons'

const NavBar = () => (

    <footer className="nav-container">
        {/* Hamburger Menu */}
        <a>
          <div className="menu"><FontAwesomeIcon icon={faBars}/></div>
        </a>
        {/* Social Links */}
        <a className="social-link-container" href="https://www.linkedin.com/in/winniehcy/" target="_blank">
          <FontAwesomeIcon className="icon" icon={faLinkedinIn} size="lg"/>
        </a>
        <a className="social-link-container" href="https://github.com/winnie9197" target="_blank">
          <FontAwesomeIcon className="icon" icon={faGithubAlt} size="lg"/>
        </a>
        <a className="social-link-container" href="https://www.instagram.com/winnie.hc/" target="_blank">
          <FontAwesomeIcon className="icon" icon={faInstagram} size="lg"/>
        </a>
    </footer>  

);

export default NavBar;