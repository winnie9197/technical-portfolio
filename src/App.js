import './App.css';
import Header from './components/Header';
import About from './components/About';
import TechnicalPortfolio from './components/TechnicalPortfolio';
import Author from './components/Author';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import SocialLinks from './components/SocialLinks';
import { Device, Default } from './responsive-react-settings';


import { useMediaQuery } from 'react-responsive';

function App() {

  const isNotMobile = useMediaQuery({ minWidth: 991 });

  return (

      <div className="App">
        <Default>

          {/* Header */}
          <Header />

          {/* About */}
          <About isNotMobile={isNotMobile} />

          {/* Technical Portfolio */}
          <TechnicalPortfolio isNotMobile={isNotMobile} />

          {/* Additional Info (Author) */}
          {/* <Author /> */}

          {/* Tech Stack */}
          <TechStack isNotMobile={isNotMobile} />

          {/* Contact */}
          <Contact isNotMobile={isNotMobile} />
          
          {/* Floating Footer (NavBar)  */}
          <NavBar />

        </Default>
        <Device>
          <div className="mobile-row">
            <img className="author-intro margin-top" src={process.env.PUBLIC_URL+"/images/intro.png"} alt="intro" />
            <SocialLinks isNotMobile={isNotMobile} />
            <div>
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
        </Device>
      </div>
   
  );
}

export default App;
