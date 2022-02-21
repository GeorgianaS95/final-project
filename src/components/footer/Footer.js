import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="getSocial">
        GET SOCIAL
        <img className="footerLogoImage" src="/images/fbLogo.png"></img>
      </div>
      
      <div className="container-footer">
        <div className="row">
        
          <div className="col-sm">
          <img
            className="locationLogoImage"
            src="/images/locationLogo.jpg"
          ></img>
            Bulevardul Bucuresti Nr. 316 GPS: 44°21'7" N 28°63'69" E
          </div>
          
          <div className="col-sm">
          <img className="phoneLogoImage" src="/images/phoneLogo.png"></img>
            +40 241 831 404</div>
          
          <div className="col-sm">
          <img className="messageLogoImage" src="/images/messageLogo.png"></img>
          evenimente@hoteloasis.ro
          </div>
          
        </div>
      </div>
      
    </>
  );
}

export default Footer;
