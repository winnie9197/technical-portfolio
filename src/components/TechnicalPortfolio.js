const TechnicalPortfolio = ({ isNotMobile }) => (

    <div id="technical-portfolio" className="technical-portfolio">
        <div className={ isNotMobile? "technical-portfolio-container center-margin center-padding":"technical-portfolio-container center-margin" }>
            <div className="technical-portfolio-title">
                <h1>Technical Portfolio</h1>
                <hr/>
            </div>
            <p>I’m curious about different applications of technology.</p>
            <div className="technical-portfolio-wrapper">
                <div className="technical-portfolio-items">
                    <a className="technical-portfolio-link">
                        
                        <img className="technical-portfolio-item" src={process.env.PUBLIC_URL+"/images/portfolio-item-1.png"} alt="item1" />
                        <div className="box-overlay"><h4>Blockchain Slide Deck</h4></div>
                    </a>
                    <a className="technical-portfolio-link"><img className="technical-portfolio-item" src={process.env.PUBLIC_URL+"/images/portfolio-item-2.png"} alt="item2" /><div className="box-overlay"><h4>React Fullstack Ecommerce</h4></div></a>
                    <a className="technical-portfolio-link"><img className="technical-portfolio-item" src={process.env.PUBLIC_URL+"/images/portfolio-item-3.png"} alt="item3" /><div className="box-overlay"><h4>Machine Learning in Python </h4></div></a>
                    <a className="technical-portfolio-link"><img className="technical-portfolio-item" src={process.env.PUBLIC_URL+"/images/portfolio-item-4.png"} alt="item4" /><div className="box-overlay"><h4>Writing Samples</h4></div></a>
                    <a className="technical-portfolio-link"><img className="technical-portfolio-item" src={process.env.PUBLIC_URL+"/images/portfolio-item-5.png"} alt="item5" /><div className="box-overlay"><h4>Title</h4></div></a>
                    <a className="technical-portfolio-link"><img className="technical-portfolio-item" src={process.env.PUBLIC_URL+"/images/portfolio-item-6.png"} alt="item6" /><div className="box-overlay"><h4>Title</h4></div></a>
                </div>
            </div>
        </div>
    </div>

);

export default TechnicalPortfolio;