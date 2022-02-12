import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Homepage from "./components/homepage/Homepage";
import Rooms from './components/rooms/Rooms';
import RoomDetails from './components/rooms/RoomDetails';
import Facilities from './components/facilities/Facilities';
import Restaurant from "./components/restaurant/Restaurant";
import Contact from './components/contact/Contact';
import Reservation from './components/reservation/Reservation';
import ThankYou from './components/reservation/ThankYou';



function App() {
  return (
    <>
    
  <div className="App">
    <BrowserRouter>
    <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/facilities" element={<Facilities />}/>
        <Route path="/rooms/:roomId" element={<RoomDetails />}/>
        <Route path="/restaurant" element={<Restaurant />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/reservation/:roomId" element={<Reservation />}/>
        <Route path='/thankYou' element={<ThankYou />}/>
      </Routes>

      <Footer />
    </BrowserRouter>
    

  </div>
  </>
  );
}

export default App;
