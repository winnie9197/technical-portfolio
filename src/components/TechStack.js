const TechStack = ({isNotMobile}) => (
    <div id="tech-stack" className={ isNotMobile ? "tech-stack-row center-padding" : "tech-stack-row mobile-center-padding" }>
      <div className={ isNotMobile ? "center-margin" : "mobile-center-margin" }>
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
    </div>

);

export default TechStack;