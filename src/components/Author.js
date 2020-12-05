const Author = () => (
    
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
    
    );
    
    export default Author;