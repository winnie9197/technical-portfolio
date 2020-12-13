const Contact = ({ isNotMobile }) => (

    <div id="contact" className={ isNotMobile ? "contact-row center-padding" : "contact-row vertical-padding" } style={{backgroundImage: "url("+process.env.PUBLIC_URL+"/images/contact-background.jpg)"}}>
        <div className={ isNotMobile ? "contact-text-container center-padding" : "contact-text-container mobile-center-padding" }>
          <div className="contact-text">
            <a href="mailto: winniehcyeung@gmail.com" className="links" ><h3>winniehcyeung@gmail.com</h3></a>
          </div>
          <h1>Winnie Yeung</h1>
        </div>
      </div>

);

export default Contact;