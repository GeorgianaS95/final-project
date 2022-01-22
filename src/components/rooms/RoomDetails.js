import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./RoomDetails.css";
import Rooms from "./Rooms";

function RoomDetails() {
    const {roomId} = useParams();
    const [room, setRoom] =useState(null);
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
          image: "images/cameraSuperior.jpg",
        },
        {
          id: 3,
          name: "Camera Single",
          description:
            "Camera este destinata celor care se cazeaza singuri, dar este conceputa incat sa alunge plictiseala sau singuratatea.",
          image: "images/cameraSuperior.jpg",
        },
        {
          id: 4,
          name: "Camera Twin",
          description:
            "Va punem la dispozitie o camera dotata cu doua paturi separate, confortabile si spatioase.",
          image: "images/cameraSuperior.jpg",
        },
      ];

    useEffect(()=> {

        setRoom(rooms.find((room)=> room.id == roomId));
    }, [roomId]);
    

    return room? <div>Room: {room.name} </div>: <div>Not found</div>;
}

export default RoomDetails;