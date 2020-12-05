const Header = () => (

    <header className="header">
        <div className="title-container">
            <nav className="title">
            {/* Logo */}
            <a>
                <img className="logo" src={process.env.PUBLIC_URL+"/images/logo.png"} alt="logo" />
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

);

export default Header;