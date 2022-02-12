import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Reservation.css";

function Reservation() {
  const { roomId } = useParams();
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    const startDate = e.target[0].value;
    const endDate = e.target[1].value;
    const nrAdults = Number(e.target[2].value);
    const nrKids = Number(e.target[3].value);
    console.log(startDate, endDate, nrAdults, nrKids);

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
      });
      setMessage(
        `A reservation between ${startDate} and ${endDate} was created`
      );
      setTimeout(() => {
        setMessage("");
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
        });
        setMessage(
          `O rezervare intre ${startDate} si ${endDate} a fost creata cu succes.`
        );
        setTimeout(() => {
          setMessage("");
          navigate("/thankYou");
        }, 4000);
      } else {
        setMessage(
          `In intervalul ${existingReservation.startDate} si ${existingReservation.endDate} exista deja o rezervare! Te rugam sa alegi o alta perioada.`
        );
        setTimeout(() => {
          setMessage("");
        }, 9000);
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

          {/* <div className="reservationMsg">{message}</div> */}

          {/* <div className="alert alert-success" role="alert">
            This is a success alert—check it out!
          </div> */}

          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </form>
      </div>
    </>
  );
}

export default Reservation;
