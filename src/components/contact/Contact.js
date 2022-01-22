import './Contact.css';


function Contact() {
    return (
        <>
            <h2>Echipa</h2>
            <div className="card" >
                <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Adam Zafar</p>
                        <p className="card-text">General manager</p>
                    </div>
            </div>

            <div className="card" >
                <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Frank Quinn</p>
                        <p className="card-text">Sales manager</p>
                    </div>
            </div>

            <div className="card" >
                <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Irwin Smith</p>
                        <p className="card-text">Executive assistant manager</p>
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