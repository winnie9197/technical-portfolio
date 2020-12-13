import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithubAlt, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { Device } from '../responsive-react-settings';

function SocialLinks({ isNotMobile }) {

    return (
        <div className={ isNotMobile ? "" : "mobile-social-links-container"}>
            <a className={ isNotMobile ? "social-link-container" : "social-link-container mobile-social-links"} href="https://www.linkedin.com/in/winniehcy/" target="_blank">
                <FontAwesomeIcon className="icon" icon={faLinkedinIn} size="lg"/>
            </a>
            <a className={ isNotMobile ? "social-link-container" : "social-link-container mobile-social-links"} href="https://github.com/winnie9197" target="_blank">
                <FontAwesomeIcon className="icon" icon={faGithubAlt} size="lg"/>
            </a>

            <Device>
                <a className={ isNotMobile ? "social-link-container" : "social-link-container mobile-social-links"} href="mailto: winniehcyeung@gmail.com" target="_blank">
                    <FontAwesomeIcon className="icon" icon={faEnvelopeSquare} size="lg"/>
                </a>
            </Device>
            
            <a className={ isNotMobile ? "social-link-container" : "social-link-container mobile-social-links"} href="https://www.instagram.com/winnie.hc/" target="_blank">
                <FontAwesomeIcon className="icon" icon={faInstagram} size="lg"/>
            </a>
        </div>
    )
}

export default SocialLinks;