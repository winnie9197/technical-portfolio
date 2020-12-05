import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithubAlt, faInstagram } from '@fortawesome/free-brands-svg-icons'
import './App.css';
// import ContactBackground from "process.env.PUBLIC_URL+/images/contact-background.jpg";

function App() {
  return (
    <div className="App">

      {/* Header */}
      <header className="header">
        <div className="nav-container">
          <nav className="nav">
            {/* Logo */}
            <a>
              <img className="logo" src={process.env.PUBLIC_URL+"/images/logo.png"} alt="logo" />
            </a>
            {/* Hamburger Menu */}
            <a>
              <div className="menu"><FontAwesomeIcon icon={faBars}/></div>
            </a>
          </nav>
        </div>
        
        {/* Author Image */}
        <img className="author-intro margin-top" src={process.env.PUBLIC_URL+"/images/intro.png"} alt="intro" />
        {/* Role */}
        <h4>Full-Stack Software Developer</h4>

        {/* Attributes */}
        <div className="attributes-row margin-top">
          <div className="attributes-container">
            <div className="attribute"><h3>Full-Stack Web Dev.</h3></div>
            <div className="attribute"><h3>Machine Learning.</h3></div>
            <div className="attribute"><h3>Data Analytics.</h3></div>
            <div className="attribute"><h3>Design.</h3></div>
          </div>
        </div>
        
      </header>

      {/* About */}
      <div className="about-row margin-top center-padding">
        <div className="about-container">

          {/* In a Nutshell */}
          <div className="about-title">
            <h1>In a Nutshell</h1>
          </div>
          
          
          <div className="about-text-container">
            {/* Paragraph 1*/}
            <p>
            Q: Who are you?
            <br/><br/>
            I’m a 2020 recent graduate from the Statistics program (ML/Data Mining stream) from the University of Toronto.
            <br/><br/>
            I’m passionate about many things and would give it all to achieve them. It all started under an influence. Ever since high school, I’ve been teaching myself different technologies. I’ve spent a year or so with nonprofits to mentor and teach underrepresented students Machine Learning and coding. Did I mention I’m also a professional dancer/choreographer?
            </p>
            {/* Paragraph 2*/}
            <p>
            Q: What would you want to achieve with Full stack development?
            <br/><br/>
            My vision: I’d like to contribute my efforts to make society a better place for everyone to live. Translating this to full-stack development, my goal is to create safe, inclusive, comfortable spaces where anyone would feel at home browsing. Websites can be better than just business tools. 
            </p>
          </div>
        </div>
      </div>

      {/* Technical Portfolio */}
      <div className="technical-portfolio">
        <div className="technical-portfolio-title">
          <h1>Technical Portfolio</h1>
          <hr/>
        </div>
        <p>I’m curious about different applications of technology.</p>

        <div className="technical-portfolio-items">
          <a><img className="technical-portfolio-item" src={process.env.PUBLIC_URL+"/images/portfolio-item-1.png"} alt="item1" /></a>
          <a><img className="technical-portfolio-item" src={process.env.PUBLIC_URL+"/images/portfolio-item-2.png"} alt="item2" /></a>
          <a><img className="technical-portfolio-item" src={process.env.PUBLIC_URL+"/images/portfolio-item-3.png"} alt="item3" /></a>
          <a><img className="technical-portfolio-item" src={process.env.PUBLIC_URL+"/images/portfolio-item-4.png"} alt="item4" /></a>
          <a><img className="technical-portfolio-item" src={process.env.PUBLIC_URL+"/images/portfolio-item-5.png"} alt="item5" /></a>
          <a><img className="technical-portfolio-item" src={process.env.PUBLIC_URL+"/images/portfolio-item-6.png"} alt="item6" /></a>
        </div>
      </div>

      {/* Additional Info (Author) */}
      <div className="author-row">
        <div className="author-container center-padding center-margin">
          {/* Author Title */}
          <div className="author-title-container">
            <h3 className="author-title">I'm also:</h3>
            
            <div className="strike-through"></div>
            <div className="author-image-container">
              <img className="author-image" src={process.env.PUBLIC_URL+"/images/author-image.jpg"}/>
            </div>
          </div>

          {/* Author Attributes */}
          <p className="author-attribute-1 author-attribute">human-centric</p>
          <p className="author-attribute-2 author-attribute">a forward thinker</p>
          <p className="author-attribute-3 author-attribute">inquisitive</p>
          <p className="author-attribute-4 author-attribute">fantastic with documentation</p>

          <div className="author-statement-container">
            <h4 className="author-statement">who isn’t afraid to present herself to the world. </h4>
          </div>
        </div>
        
      </div>

      {/* Tech Stack */}
      <div className="tech-stack-row center-padding">
        <div className="tech-stack-title-container">
          <div className="tech-stack-title">
            <h2>Full Stack</h2>
          </div>
        </div>
        <div className="tech-stack-content">
        <p>
          Design: Sketch, Adobe XD, MediBang
          <br/><br/> 
          Frontend: ReactJS, AngularJS, jQuery, HTML, CSS, Android
          <br/><br/>
          Backend: Node.js, Express.js
          <br/><br/>
          Databases & Languages: SQL, MongoDB, GCP BigQuery
          <br/><br/>
          Machine Learning: Scikit-learn, Numpy
          <br/><br/>
          Cloud Services: Google Cloud Platform
        </p>
        </div>
      </div>

      {/* Contact */}
      <div className="contact-row center-padding" style={{backgroundImage: "url("+process.env.PUBLIC_URL+"/images/contact-background.jpg)"}}>
        <div className="contact-text-container center-padding">
          <div className="contact-text">
            <h1>Winnie Yeung</h1>
            <h3>winniehcyeung@gmail.com</h3>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <footer className="social-links-container">
        <a href="https://www.linkedin.com/in/winniehcy/" target="_blank">
          <FontAwesomeIcon className="icon" icon={faLinkedinIn} size="lg"/>
        </a>
        <a href="https://github.com/winnie9197" target="_blank">
          <FontAwesomeIcon className="icon" icon={faGithubAlt} size="lg"/>
        </a>
        <a href="https://www.instagram.com/winnie.hc/" target="_blank">
          <FontAwesomeIcon className="icon" icon={faInstagram} size="lg"/>
        </a>
      </footer>  
    </div>
  );
}

export default App;
