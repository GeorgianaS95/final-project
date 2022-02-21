import './Restaurant.css';

function Restaurant() {
    return (
        <>
            <h2 className='restaurantTitle'>Restaurant</h2>
            
            <p  className='restaurantDescription'>
                Abordarea modernă a bucătăriei tradiționale franțuzești, punerea în valoare a ingredientelor ușoare și mereu proaspete, alături de ambianța elegantă pun restaurantul Oasis în topul opțiunilor pentru fine dining din tara.
            </p>
            
           
         
            

            <div className="accordion accordion-flush container" id="accordionFlushExample">
                <div className="accordion-item ">
                    <h2 className="accordion-header " id="flush-headingOne">
                        <button className="accordion-button collapsed restaurantMenu" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Program
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Mic dejun: 6:30 AM - 10:00 AM <br></br>
                            Pranz: 12:00 AM - 4:30 PM <br></br>
                            Cina: 5:00 PM - 10:00 PM
                            </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed restaurantMenu" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Restaurant Menu
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">
                            Meniul restaurantului nostru contine preparate din bucataria traditionala romaneasca, precum si din cea frantuzeasca.
                            </div>
                    </div>
                </div>
                
            </div>

            <img className="restaurantImage" src="/images/restaurant1.jpg"></img>

        </>
    );
}

export default Restaurant;