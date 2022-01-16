import { useParams } from "react-router-dom";
import "./RoomDetails.css";

function RoomDetails() {
    const {roomId} = useParams();
    return <div>Room: {roomId} </div>;
}

export default RoomDetails;