import { Link } from "react-router-dom";
import "./ThankYou.css";

function ThankYou() {
    return (
        <>
    <div className="alert alert-success thanksMsg" role="alert">
        <h3>
    Multumim pentru ca ai ales Hotel Oasis! In cel mai scurt timp vei primi un mesaj de confirmare pe adresa de e-mail indicata.
    </h3></div>
        <Link to="/">Home</Link>
        </>
    );
    
}

export default ThankYou;