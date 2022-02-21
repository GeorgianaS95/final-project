import { useState } from "react";
import "./Contact.css";


function Contact() {
  const [message, setMessage] = useState("");
  function submit(e) {
    e.preventDefault();
    let nume = e.target[0].value;
    let prenume = e.target[1].value;
    let telefon = e.target[2].value;
    let email = e.target[3].value;
    let message = e.target[4].value;

    let messages = JSON.parse(localStorage.getItem("messageList") || "[]");
    messages.push({
      nume,
      prenume,
      telefon,
      email,
      message,
    });

    setTimeout(() => {
      setMessage("Multumim pentru mesaj!");
      
    }, 1000);
    
    document.getElementById("contact-form").reset();

    localStorage.setItem("messageList", JSON.stringify(messages));
  }

  const staff = [
    {
      id: 1,
      name: "Adam Zafar",
      description: "General manager",
      image: "images/staff1.jpg",
    },
    {
      id: 2,
      name: "Frank Quinn",
      description: "Sales manager",
      image: "images/staff2.jpg",
    },
    {
      id: 3,
      name: "Irwin Smith",
      description: "Executive assistant manager",
      image: "images/staff3.jpg",
    },
  ];
  return (
    <>
    <h2 className="ourTeam">Echipa noastra</h2>
      <div className="container">
        <div className="row">
          {staff.map((staffOne) => (
            <div className="col-4" key={staffOne.id}>
              <div className="card">
                <img src={staffOne.image} className="card-img-top" alt="..." />
                <div className="card-body divStaff">
                  <h5 className="card-title staffName">{staffOne.name}</h5>
                  <p className="card-text">{staffOne.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="delim"></div>

      <h2 className="contactUs"> Contacteaza-ne</h2>
      <p className="contactMessage">
            Pentru solicitari sau intrebari va rugam sa completati formularul de mai jos. Hotel Oasis va folosi informațiile pe care le furnizați pe acest formular pentru a rămâne în contact cu dvs. Vom trata informațiile dvs. cu confidențialitate și nu le vom împărtăși altora.
      </p>
      <div className="container">
        <form onSubmit={submit} id="contact-form">
          <div className="form-group contactForm">
            <label className="labelDescription" htmlFor="name">Nume*</label>
            <input type="text" className="form-control inputTxt" />
            <label className="labelDescription" htmlFor="firstName">Prenume*</label>
            <input type="text" className="form-control inputTxt" />
            <label className="labelDescription" htmlFor="phone">Telefon*</label>
            <input type="text" className="form-control inputTxt" />
          </div>
          <div className="form-group">
            <label className="labelDescription" htmlFor="exampleInputEmail1">E-mail*</label>
            <input
              type="email"
              className="form-control inputTxt"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label className="labelDescription" htmlFor="message">Mesaj</label>
            <textarea className="form-control inputTxt" rows="5"></textarea>
          </div>
          <button type="submit" className="btn btn-primary formMessageButton">
            Trimite mesajul
          </button>
        </form>
      </div>

      {message&& <div className="alert alert-success" role="alert" style={{width:"230px", marginLeft:"560px" }}>
            {message}
          </div> }
      
    </>
  );
}

export default Contact;
