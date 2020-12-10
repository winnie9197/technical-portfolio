const TechnicalPortfolio = () => (

    <div id="technical-portfolio" className="technical-portfolio">
        <div className="technical-portfolio-container center-margin center-padding">
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
    </div>

);

export default TechnicalPortfolio;