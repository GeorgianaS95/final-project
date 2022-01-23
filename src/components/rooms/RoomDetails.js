import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./RoomDetails.css";



function RoomDetails() {
  const { roomId } = useParams();
  const [room, setRoom] = useState(null);
  const rooms = [
    {
      id: 1,
      name: "Camera Superior",
      description:
        "Dacă vă aflați în căutarea unui hotel de 5 stele în București, ați găsit locul perfect. La hotel Oasis camerele Superior păstrează eleganța de altădată, iar dotările moderne, perfect integrate, realizează echilibrul perfect între cele două epoci. Printre facilitățile camerei Superior se numără birou de lucru,  aer condiționat, seif, uscător de păr, minibar, WiFi gratuit.",
      image: "/images/cameraSuperior.jpg",
      price: '$120/noapte',
      maxNrOfAdults:2,
      maxNrOfKids:2
    },
    {
      id: 2,
      name: "Camera Deluxe",
      description:
        "Camerele deluxe oferă un spațiu mai generos, fiind potrivite atât pentru un sejur în scop de afaceri cât și pentru călătoriile de relaxare. Ele sunt alegerea perfectă pentru cei ce caută cazare în centrul Bucureștiului!În camerele deluxe te poți bucura de o zonă de relaxare și una de lucru, iar dintre facilitățile camerei enumerăm: aer condiționat, facilități pentru ceai sau cafea,  minibar, WiFi gratuit. Baia  cu pereți de sticlă este prevăzută cu cadă, iar unele camere deluxe au și duș",
      image: "/images/cameraDeluxe.jpg",
      price: '$180/noapte',
      maxNrOfAdults:2,
      maxNrOfKids:2
    },
    {
      id: 3,
      name: "Camera Single",
      description:
        "Atât mobilierul, cât și decorațiunile acestui tip de cameră au fost achiziționate de la case de licitații renumite, din Viena și Parma, și transformă sejurul la hotelul nostru într-o experiență de neuitat. Apartamentele Single dispun de un living pentru relaxare și un dormitor pentru odihnă, amenajate cu piese de mobilier rafinate.",
      image: "/images/cameraSingle.jpeg",
      price: '$99/noapte',
      maxNrOfAdults:1,
      maxNrOfKids:0
    },
    {
      id: 4,
      name: "Camera Twin",
      description:
        "Fiind cele mai spațioase camere ale hotelulu, camerele Twin sunt compartimentate cu un dormitor și un living și se diferențiază prin detaliile și design-ul deosebit al pieselor de mobilier. Camerele sunt decorate cu mobilier clasic, din lemn masiv, design-ul interior fiind ridicat la rang de artă.",
      image: "/images/cameraTwin.jpg",
      price: '$230/noapte',
      maxNrOfAdults:4,
      maxNrOfKids:2
    },
    {
      id: 5,
      name: "Camera Twin Deluxe",
      description:
        "Va punem la dispozitie o camera dotata cu doua paturi separate, confortabile si spatioase. Atât mobilierul, cât și decorațiunile acestui tip de cameră au fost achiziționate de la case de licitații renumite, din Viena și Parma, și transformă sejurul la hotelul nostru într-o experiență de neuitat. Apartamentele Single dispun de un living pentru relaxare și un dormitor pentru odihnă, amenajate cu piese de mobilier rafinate.",
      image: "/images/cameraTwinDeluxe.jpg",
      price: '$300/noapte',
      maxNrOfAdults:4,
      maxNrOfKids:2
    },
    {
      id: 6,
      name: "Camera Single Deluxe",
      description:
        "Camerele sunt perfecte pentru orice tip de calatorii. Fiind cele mai spațioase camere ale hotelulu, camerele Twin sunt compartimentate cu un dormitor și un living și se diferențiază prin detaliile și design-ul deosebit al pieselor de mobilier. Camerele sunt decorate cu mobilier clasic, din lemn masiv, design-ul interior fiind ridicat la rang de artă.",
      image: "/images/cameraSingleDeluxe.jpg",
      price: '$200/noapte',
      maxNrOfAdults:1,
      maxNrOfKids:0
    }
  ];

  useEffect(() => {
    setRoom(rooms.find((room) => room.id == roomId));
  }, [roomId]);

  return room ? (
    <div>
      {room.name}
      <br></br>
      <img src={room.image} />
      <br></br> {room.description} <br></br> {room.price}
      <Link to={`/reservation/${roomId}`} className="btn btn-primary">
        Rezerva
      </Link>
      <p>
        Check in: 15:00 - 19:0
        Check out: 10:00
      </p>
    </div>
  ) : (
    <div>Not found</div>
  );
}

export default RoomDetails;
