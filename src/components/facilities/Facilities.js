import './Facilities.css';

function Facilities() {
    return (
        <>
            <h2 className='servicesTitle'>Servicii și facilități</h2>

            <div className='alert alert-secondary container' role="alert">
                În această perioadă, am luat toate măsurile pentru siguranța sănătății dumneavoastră și a colegilor noștri. Din acest motiv o parte din serviciile noastre nu sunt disponibile sau sunt disponibile cu acces limitat. Vezi <a href="#">Măsurile de securitate și prevenție împotriva răspândirii Coronavirus Covid19</a>

            </div>

            <div className="accordion accordion-flush container servicesMenu" id="accordionFlushExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed facilitiesMenu" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Parcare
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Parcare publică lângă hotel.
                            <br /> <br /> Tarif parcare: 10 RON/oră în limita a două ore. După expirarea duratei taxa orară se dublează. Locurile de parcare din parcarea publică nu pot fi rezervate în avans și se achită către funcționarii publici din zonă.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed facilitiesMenu" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Wi-fi gratuit
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Vă oferim internet prin wireless de mare viteză în tot hotelul, atât în camere, cât și pe holurile hotelului sau în restaurantele noastre.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed facilitiesMenu" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Room Service 24h
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">În fiecare cameră aveți la dispoziție un meniu din care vă puteți alege produse culinare sau băuturi pe care să le serviți în cameră.<br />În această perioadă serviciul de room service este disponibil exclusiv pentru micul dejun și cină. Ne cerem scuze anticipat pentru eventualele neplăceri cauzate de acest program.</div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed facilitiesMenu" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                            Facilitati fara plata
                        </button>
                    </h2>
                    <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            <ul className='facilitiesList'>
                                <li>Aer condiționat</li>
                                <li>Bancomat</li>
                                <li>Business corner</li>
                                <li>Cameră de bagaje</li>
                                <li>Hărți turistice</li>
                                <li>Informații turistice</li>
                                <li>Lift</li>
                                <li>Lustruire pantofi</li>
                                <li>Ziare</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingFive">
                        <button className="accordion-button collapsed facilitiesMenu" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                            Facilitati cu plata
                        </button>
                    </h2>
                    <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                        <ul className='facilitiesList'>
                                <li>Cafenea</li>
                                <li>Catering</li>
                                <li>Copiator</li>
                                <li>Fax</li>
                                <li>Masaj</li>
                                <li>Mic dejun bufet</li>
                                <li>Parcare</li>
                                <li>Restaurant</li>
                                <li>Serviciu Spalatorie</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Facilities;