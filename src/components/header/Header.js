import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <>
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark menu">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <img className="logoImage" src="/images/logo4.png"></img>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Acasa
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/rooms" className="nav-link active" aria-current="page">
                Camere
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/facilities" className="nav-link active" aria-current="page">
                Facilitati
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/restaurant" className="nav-link active" aria-current="page">
                Restaurant
              </Link>
            </li>
            
            
            <li className="nav-item">
              <Link to="/contact" className="nav-link active" aria-current="page">
                Contact
              </Link>
            </li>
            
           
          </ul>
          <div className="col-sm" style={{color:"white"}}>
          <img  className="phoneLogoImage" src="/images/phoneLogo.png"></img>
            +40 241 831 404</div>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Header;