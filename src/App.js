import './App.css';
import Header from './components/Header';
import About from './components/About';
import TechnicalPortfolio from './components/TechnicalPortfolio';
import Author from './components/Author';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header />

      {/* About */}
      <About />

      {/* Technical Portfolio */}
      <TechnicalPortfolio />

      {/* Additional Info (Author) */}
      <Author />

      {/* Tech Stack */}
      <TechStack />

      {/* Contact */}
      <Contact />
      
      {/* Floating Footer (NavBar)  */}
      <NavBar />
    </div>
  );
}

export default App;
