import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faSmileWink, faCameraRetro, faMugHot, faStickyNote, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithubAlt, faInstagram } from '@fortawesome/free-brands-svg-icons';

function NavBar() {

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
      setSidebar(!sidebar);
  }

  return (
    <footer className="nav-container">
        {/* Hamburger Menu */}
        <a className="menu-link" onClick={showSidebar}>
          <div className="menu"><FontAwesomeIcon icon={faBars}/></div>
        </a>

        {/* Navigation Menu */}
        <nav className={sidebar? "nav-menu-container active" : "nav-menu-container"}>
            <ul onClick={showSidebar}>
                {/* Close button*/}
                <li className="menu-item menu-close">
                    <a href="#">_</a>
                </li>

                {/* Menu Items */}
                <li className="menu-item">
                    <a href="#"><FontAwesomeIcon icon={faHome}/><span>Home</span></a>
                </li>
                <li className="menu-item">
                    <a href="#about"><FontAwesomeIcon icon={faSmileWink}/><span>About</span></a>
                </li>
                <li className="menu-item">
                    <a href="#technical-portfolio"><FontAwesomeIcon icon={faCameraRetro}/><span>Portfolio</span></a>
                </li>
                <li className="menu-item">
                    <a href="#author"><FontAwesomeIcon icon={faMugHot}/><span>Author</span></a>
                </li>
                <li className="menu-item">
                    <a href="#tech-stack"><FontAwesomeIcon icon={faStickyNote}/><span>Full Stack</span></a>
                </li>
                <li className="menu-item">
                    <a href="#contact"><FontAwesomeIcon icon={faEnvelopeSquare}/><span>Contact</span></a>
                </li>
            </ul>
        </nav>  

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
};

export default NavBar;