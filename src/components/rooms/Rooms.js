import { Link } from "react-router-dom";
import "./Rooms.css";
import "../rooms/Rooms.js";

function Rooms() {
  const rooms = [
    {
      id: 1,
      name: "Camera Superior",
      description: "Camerele sunt perfecte pentru orice tip de calatorii.",
      image: "images/cameraSuperior.jpg",
      price: '$120/noapte',
      maxNrOfAdults:2,
      maxNrOfKids:2
    },
    {
      id: 2,
      name: "Camera Deluxe",
      description:
        "Camerele deluxe sunt elegante, perfecte pentru iubitorii de bun gust.",
      image: "images/cameraDeluxe.jpg",
      price: '$180/noapte',
      maxNrOfAdults:2,
      maxNrOfKids:2
    },
    {
      id: 3,
      name: "Camera Single",
      description:
        "Camera este destinata celor care se cazeaza singuri, dar este conceputa incat sa alunge plictiseala sau singuratatea.",
      image: "images/cameraSingle.jpeg",
      price: '$99/noapte',
      maxNrOfAdults:1,
      maxNrOfKids:0
    },
    {
      id: 4,
      name: "Camera Twin",
      description:
        "Va punem la dispozitie o camera dotata cu doua paturi separate, confortabile si spatioase.",
      image: "images/cameraTwin.jpg",
      price: '$230/noapte',
      maxNrOfAdults:4,
      maxNrOfKids:2
    },
    {
      id: 5,
      name: "Camera Twin Deluxe",
      description:
        "Va punem la dispozitie o camera dotata cu doua paturi separate, confortabile si spatioase.",
      image: "images/cameraTwinDeluxe.jpg",
      price: '$300/noapte',
      maxNrOfAdults:4,
      maxNrOfKids:2
    },
    {
      id: 6,
      name: "Camera Single Deluxe",
      description:
        "Camerele sunt perfecte pentru orice tip de calatorii.",
      image: "images/cameraSingleDeluxe.jpg",
      price: '$200/noapte',
      maxNrOfAdults:1,
      maxNrOfKids:0
    }
  ];

  return (
    <>
    <div className="roomsBody">
      <div className="container">
        <div className="row">
          {rooms.map((room) => (
            <div className="col-4" key={room.id}>
              <div className="card">
                <img src={room.image}  className="card-img-top" alt="..." />
                <div className="card-body">
                  <div>
                  <h5 className="card-title">{room.name}</h5>
                  <p className="card-text">{room.description}</p>
                  </div>
                  <Link to={`/rooms/${room.id}`} className="btn btn-primary roomBtn">
                    Vizualizeaza
                  </Link>
                  <br></br>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </>
  );
}

export default Rooms;
