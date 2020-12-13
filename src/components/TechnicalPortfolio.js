import data from '../data';

function TechnicalPortfolio({ isNotMobile }) {
    const cards = data.projects.map((project) => {
        if (project.title != "TBD") {
            return (<a className="technical-portfolio-link" href={project.url} target="_blank" rel="noopener noreferrer" key={project.id}>                    
                    <img className="technical-portfolio-item" src={project.imageSrc} alt="item" />
                    <div className="box-overlay">
                        <h5>{project.title}</h5>
                        <p className="technical-portfolio-button">Click Me</p>
                    </div>
                </a>);
        } else {
            return (<a className="technical-portfolio-link click-disabled" key={project.id}>                    
                    <img className="technical-portfolio-item" src={project.imageSrc} alt="item" />
                    <div className="box-overlay"><h5>{project.title}</h5></div>
            </a>);
        }
    });

    return (
        <div id="technical-portfolio" className="technical-portfolio">
            <div className={ isNotMobile? "technical-portfolio-container center-margin center-padding":"technical-portfolio-container center-margin" }>
                <div className="technical-portfolio-title">
                    <h1>Technical Portfolio</h1>
                    <hr/>
                </div>
                <p>I’m curious about different applications of technology.</p>
                <div className="technical-portfolio-wrapper">
                    <div className="technical-portfolio-items">
                        {cards}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default TechnicalPortfolio;