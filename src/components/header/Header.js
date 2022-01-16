import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
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
          <Link to="/reservation">
          <button className="btn btn-outline-success">
              Rezerva o camera
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;