import { Link } from "react-router-dom";
import "./Rooms.css";

function Rooms() {
  const rooms = [
    {
      id: 1,
      name: "Camera Superior",
      description: "Camerele sunt perfecte pentru orice tip de calatorii.",
      image: "images/cameraSuperior.jpg",
    },
    {
      id: 2,
      name: "Camera Deluxe",
      description:
        "Camerele deluxe sunt elegante, perfecte pentru iubitorii de bun gust.",
      image: "images/cameraDeluxe.jpg",
    },
    {
      id: 3,
      name: "Camera Single",
      description:
        "Camera este destinata celor care se cazeaza singuri, dar este conceputa incat sa alunge plictiseala sau singuratatea.",
      image: "images/cameraSingle.jpeg",
    },
    {
      id: 4,
      name: "Camera Twin",
      description:
        "Va punem la dispozitie o camera dotata cu doua paturi separate, confortabile si spatioase.",
      image: "images/cameraTwin.jpg",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          {rooms.map((room) => (
            <div className="col-6" key={room.id}>
              <div className="card">
                <img src={room.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{room.name}</h5>
                  <p className="card-text">{room.description}</p>
                  <Link to={`/rooms/${room.id}`} className="btn btn-primary">
                    Vezi detalii
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
}

export default Rooms;
