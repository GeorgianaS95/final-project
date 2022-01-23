import { useParams } from "react-router-dom";
import "./Reservation.css";

function Reservation() {
  const { roomId } = useParams();
  
  function submit(e) {
    e.preventDefault();
    const startDate = e.target[0].value;
    const endDate = e.target[1].value;
    const nrAdults = Number(e.target[2].value);
    const nrKids = Number(e.target[3].value);
    console.log(startDate, endDate, nrAdults, nrKids);
    
    
    const reservations = JSON.parse(localStorage.getItem("reservations") || "{}");
    console.log(reservations);
    const roomReservations = reservations[roomId] || [];
    console.log(roomReservations);


    if(roomReservations.length === 0) {
      roomReservations.push({
         startDate,
         endDate,
         nrAdults,
         nrKids
      })
    } else {
      const existingReservation = roomReservations.find((currentReservation) => {
        if(startDate >= currentReservation.startDate && startDate <= currentReservation.endDate || endDate >= currentReservation.startDate && endDate <= currentReservation.endDate) {
          return true;
        
        }
        return false;
      })
      console.log(existingReservation);
      if(!existingReservation) {
        roomReservations.push({
          startDate,
          endDate,
          nrAdults,
          nrKids
       })
      }
    }



    reservations[roomId] = roomReservations;
    localStorage.setItem("reservations", JSON.stringify(reservations));
  }
  return (

    <form onSubmit={submit}>
      <label>
        Data sosirii
        <input type="date"></input>
      </label>
      <label>
        Data plecarii
        <input type="date"></input>
      </label>
      <label>
        Nr. adulti
        <select name="guests" id="guests-number-select">
          <option value=""> </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="2">3</option>
          <option value="2">4</option>
        </select>
      </label>
      <label>
        Nr. copii
        <select name="guests" id="kids-number-select">
          <option value=""> </option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </label>
      <button type="submit">Verifica disponibilitate</button>
    </form>
  );
}

export default Reservation;
