import { Link } from "react-router-dom";
import "./Homepage.css";
import "../rooms/Rooms.js";


function Homepage() {
    return (

        <>
        <div>
            <h2>Hotel Oasis *****</h2>
            <p>
            Hotel Oasis este un hotel de 5 stele în București, aflat în centrul orașului, chiar pe cea mai frumoasă arteră din Capitală. Hotel Oasis nu este doar un loc de cazare în București, ci și un hotel de 5 stele care îți propune o călătorie elegantă în timp și o experiență aparte.
            </p>
        </div>
        <div className="mainPageDescription">
            <h3>Camere de lux</h3>
            <h5>O experienta unica la un hotel de 5 stele</h5>
            <button><Link to="/rooms" className="nav-link active" aria-current="page">
                Vezi toate camerele
              </Link>
              </button>
           

        </div>
        </>
    );
}

export default Homepage;