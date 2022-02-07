import { useParams } from "react-router-dom";



function SubmitReservation() {
    const { roomId } = useParams();

    function submit(e) {
        e.preventDefault();
        const nume = e.target[0].value;
        const prenume = e.target[1].value;
        const email = e.target[2].value;
        const telefon = e.target[3].value

        const submitReservation = JSON.parse(localStorage.getItem("submitReservationsList") || "{}");
        submitReservation.push({
            nume,
            prenume,
            email,
            telefon
        });

        localStorage.setItem("submitReservationsList", JSON.stringify(submitReservation))

    }
}
return (
    <>
    <form onSubmit={submit}>
      <label>
        Nume
        <input type="text"></input>
      </label>
      <label>
        Prenume
        <input type="text"></input>
      </label>
      <label>
        E-mail
        <input type="email"></input>
      </label>
      <label>
        Telefon
        <input type="tel"></input>
      </label>
      <button type="submit">Finalizeaza rezervarea</button>
      <div>{message}</div>
    </form>
  

    </>
);

export default SubmitReservation;