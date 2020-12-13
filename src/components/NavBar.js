import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faSmileWink, faCameraRetro, faMugHot, faStickyNote, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import SocialLinks from './SocialLinks';

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
                {/* <li className="menu-item">
                    <a href="#author"><FontAwesomeIcon icon={faMugHot}/><span>Author</span></a>
                </li> */}
                <li className="menu-item">
                    <a href="#tech-stack"><FontAwesomeIcon icon={faStickyNote}/><span>Full Stack</span></a>
                </li>
                <li className="menu-item">
                    <a href="#contact"><FontAwesomeIcon icon={faEnvelopeSquare}/><span>Contact</span></a>
                </li>
            </ul>
        </nav>  

        {/* Social Links */}
        <SocialLinks />
    </footer>  
  );
};

export default NavBar;