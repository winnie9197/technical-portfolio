const About = () => (

    <div id="about" className="about-row margin-top center-padding">
        <div className="about-container">

            {/* In a Nutshell */}
            <div className="about-title-container">
                <div className="about-title">
                    <h1>In a Nutshell</h1>
                </div>
            </div>    
            
            <div className="about-text-container">
                {/* Paragraph 1*/}
                <p>
                I’m a 2020 recent graduate from the Statistics program (ML/Data Mining stream) from the University of Toronto.
                <br/><br/>
                I’ve spent a year or so with nonprofits to mentor and teach underrepresented students Machine Learning and coding.
                </p>

                <p>
                
                {/* Paragraph 2*/}
                Translating this to full-stack development, my goal is to create safe, inclusive, comfortable spaces where anyone would feel at home browsing. Websites can be better than just business tools. 
                <br/><br/>
                Just some blob…
                </p>
            </div>
        </div>
    </div>

);

export default About;