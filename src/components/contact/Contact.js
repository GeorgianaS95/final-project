
import { message } from 'antd';
import { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import './Contact.css';


    function Contact() {

        const [messages, setMessages] = useState([]);
        useEffect(() => {
            const oldMessages = localStorage.getItem("messageList");
            if(!oldMessages) {
                localStorage.setItem("messageList", JSON.stringify([]));
            } else {
                setMessages(JSON.parse(oldMessages));
            }
            
        });

        const newMessages = [message, ...messages];
        localStorage.setItem("messageList", JSON.stringify(newMessages));


        const staff = [
            {
                id: 1,
                name: 'Adam Zafar',
                description: 'General manager',
                image: 'images/staff1.jpg'
            },
            {   
                id: 2,
                name: 'Frank Quinn',
                description: 'Sales manager',
                image: 'images/staff2.jpg'

            },
            {   
                id: 3,
                name: 'Irwin Smith',
                description: 'Executive assistant manager',
                image: 'images/staff3.jpg'
            }
        ];
        return (
            <>
             <div className="container">
        <div className="row">
          {staff.map((staffOne) => (
            <div className="col-4" key={staffOne.id}>
              <div className="card">
                <img src={staffOne.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{staffOne.name}</h5>
                  <p className="card-text">{staffOne.description}</p>
                  
                </div>
              </div>
            </div>
          ))}
          
        </div>
      </div>

      <h2>Formular de contact</h2>
             <p>
                 Ne puteți contacta pe email: reservation@oasishotel.ro, la telefon: +40 000 000 000, sau puteți utiliza formularul de contact de mai jos pentru întrebări sau solicitări.
             </p>
             <div className="container">
                 <form id="contact-form">
                     <div className="form-group">
                         <label htmlFor="name">Nume*</label>
                         <input type="text" className="form-control" />
                         <label htmlFor="firstName">Prenume*</label>
                         <input type="text" className="form-control" />
                         <label htmlFor="phone">Telefon*</label>
                         <input type="text" className="form-control" />
                     </div>
                     <div className="form-group">
                         <label htmlFor="exampleInputEmail1">E-mail*</label>
                         <input type="email" className="form-control" aria-describedby="emailHelp" />
                     </div>
                     <div className="form-group">
                         <label htmlFor="message">Mesaj</label>
                         <textarea className="form-control" rows="5"></textarea>
                     </div>
                     <button type="submit" className="btn btn-primary">Trimite mesajul</button>
                 </form>
             </div>
   
            </>
        );
    }

 

export default Contact;