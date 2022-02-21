import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Reservation.css";

function Reservation() {
  const { roomId } = useParams();
  const [message, setMessage] = useState({error:"", success:""});
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    const startDate = e.target[0].value;
    const endDate = e.target[1].value;
    const nrAdults = Number(e.target[2].value);
    const nrKids = Number(e.target[3].value);
    const name = e.target[4].value;
    const email = e.target[5].value;
    const phone = e.target[6].value;
    console.log(startDate, endDate, nrAdults, nrKids, name, email, phone);

    const reservations = JSON.parse(
      localStorage.getItem("reservations") || "{}"
    );
    console.log(reservations);
    const roomReservations = reservations[roomId] || [];
    console.log(roomReservations);

    if (roomReservations.length === 0) {
      roomReservations.push({
        startDate,
        endDate,
        nrAdults,
        nrKids,
        name,
        email,
        phone
      });
      setMessage(
        {error:"", success:`O rezervare intre ${startDate} si ${endDate} a fost creata cu succes.`}
      );
      setTimeout(() => {
        setMessage({error:"", success:""});
        navigate("/thankYou");
      }, 4000);
    } else {
      const existingReservation = roomReservations.find(
        (currentReservation) => {
          if (
            (startDate >= currentReservation.startDate &&
              startDate <= currentReservation.endDate) ||
            (endDate >= currentReservation.startDate &&
              endDate <= currentReservation.endDate)
          ) {
            return true;
          }
          return false;
        }
      );
      console.log(existingReservation);
      if (!existingReservation) {
        roomReservations.push({
          startDate,
          endDate,
          nrAdults,
          nrKids,
          name,
          email,
          phone
        });
        setMessage(
          {error:"", success:`O rezervare intre ${startDate} si ${endDate} a fost creata cu succes.`}
        );
        setTimeout(() => {
          setMessage({error:"", success:""});
          navigate("/thankYou");
        }, 4000);
      } else {
        setMessage(
         {error: `In intervalul ${existingReservation.startDate} si ${existingReservation.endDate} exista deja o rezervare! Te rugam sa alegi o alta perioada.`, success:""}
        );
        setTimeout(() => {
          setMessage({error:"", success:""});
        }, 4000);
      }
    }

    reservations[roomId] = roomReservations;
    localStorage.setItem("reservations", JSON.stringify(reservations));
  }
  return (
    <>
      <div>
        <h2 className="reservationTitle">Room Reservation</h2>
      </div>
      <div className="formReservation">
        <form onSubmit={submit}>
          <label className="infoDate">
            Data sosirii
            <input className="inputInfo" type="date"></input>
          </label>
          <label className="infoDate">
            Data plecarii
            <input className="inputInfo" type="date"></input>
          </label>
          <label className="guestsNr">
            Nr. adulti
            <select
              className="inputInfo"
              name="guests"
              id="guests-number-select"
            >
              <option value=""> </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="2">3</option>
              <option value="2">4</option>
            </select>
          </label>
          <label className="guestsNr">
            Nr. copii
            <select className="inputInfo" name="guests" id="kids-number-select">
              <option value=""> </option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </label>
          <label className="infoName">
            Nume si prenume
            <input className="inputInfo" type="text"></input>
          </label>

          <label className="infoEmail">
            Email
            <input className="inputInfo" type="email"></input>
          </label>

          <label className="infoPhone">
            Telefon
            <input className="inputInfo" type="text"></input>
          </label>

          <button
            className="btn-primary roomBtn roomButton reservationButton"
            type="submit"
          >
            Rezerva
          </button>

        

          {message.success&& <div className="alert alert-success" role="alert">
            {message.success}
          </div> }

         {message.error&& <div className="alert alert-danger" role="alert">
            {message.error}
          </div>}
        </form>
      </div>
    </>
  );
}

export default Reservation;
