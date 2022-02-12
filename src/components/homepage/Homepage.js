import { Link } from "react-router-dom";
import "./Homepage.css";
import "../rooms/Rooms.js";

function Homepage() {
  return (
    <>

      <div
        className="backgroundPhoto"
        style={{ backgroundImage: "url(/images/mainPhoto.jpg)" }}
      >
        <h1 className="welcome">
          Bun venit la Hotel Oasis!
          <h3>Bun venit in inima orasului!</h3>
          <h1 className="star">* * * * *</h1>
          <h3>Rezerva sejurul tau chiar acum.</h3>
          <Link to="/rooms" className="nav-link active" aria-current="page">
            <button className="roomsButton">Vezi toate camerele</button>
          </Link>
        </h1>
      </div>
    <div className="presentation">
      <h2 className="presentationMessage">BINE AI VENIT LA OASIS HOTEL & SPA, ÎN INIMA ORAȘULUI!</h2>

      <div className="row">
        <div className="col col1">
          Situat în centrul orașului, Hotel Oasis, face parte din cel mai modern
          ansamblu urbanisitic din Bucuresti, și este cea mai elegantă locație
          pentru business, evenimente și relaxare din oraș. Situat în centrul
          istoric, cu vedere spre Palatului Culturii, hotelul este recunoscut
          pentru serviciile sale superioare, susținute de numeroasele premii
          dobândite, precum „TripAdvisor Traveler’s Choice Award”, „Certificate
          of Excellence” și „Top Hotel Awards”.
        </div>
        <div className="col col2">
          Situat în centrul orașului, Hotel Oasis, face parte din cel mai modern
          ansamblu urbanisitic din Bucuresti, și este cea mai elegantă locație
          pentru business, evenimente și relaxare din oraș. Situat în centrul
          istoric, cu vedere spre Palatului Culturii, hotelul este recunoscut
          pentru serviciile sale superioare, susținute de numeroasele premii
          dobândite, precum „TripAdvisor Traveler’s Choice Award”, „Certificate
          of Excellence” și „Top Hotel Awards”.
        </div>
        <div className="w-100"></div>
        <div className="col col3">
          Localizarea centrală, proximitatea față de principalele atracții
          turistice și culturale, serviciile moderne de cazare, cu acces la
          centrul Spa, sala de fitness, piscina interioară, Jacuzzi-ul, sauna,
          internetul cât și parcarea gratuită întregesc serviciile complete pe
          care Hotelul Oasis le oferă.
        </div>
        <div className="col col4">
          Localizarea centrală, proximitatea față de principalele atracții
          turistice și culturale, serviciile moderne de cazare, cu acces la
          centrul Spa, sala de fitness, piscina interioară, Jacuzzi-ul, sauna,
          internetul cât și parcarea gratuită întregesc serviciile complete pe
          care Hotelul Oasis le oferă.
        </div>
      </div>
      </div>

    </>
  );
}

export default Homepage;
