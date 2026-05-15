import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import WagonSelector from '../components/WagonSelector';
import SeatMap from '../components/SeatMap';
import BookingForm from '../components/BookingForm';

const Booking = () => {
  const { trainId } = useParams();
  const [selectedWagon, setSelectedWagon] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleWagonChange = (wagon) => {
    setSelectedWagon(wagon);
    setSelectedSeats([]); 
  };

  return (
    <main className="min-h-screen py-8 booking-main">
      <Link to="/" className="back-link">
        ← Повернутися до розкладу
      </Link>
      
      <h1 className="booking-title">
        Бронювання на потяг {trainId}
      </h1>

      <div className="booking-layout">
        <WagonSelector 
          selectedWagon={selectedWagon} 
          setSelectedWagon={handleWagonChange} 
        />

        {selectedWagon && (
          <>
            <div className="fade-in">
              <SeatMap 
                selectedSeats={selectedSeats} 
                setSelectedSeats={setSelectedSeats} 
                wagonType={selectedWagon.type}
              />
            </div>
            
            <BookingForm 
              trainId={trainId} 
              wagonNumber={selectedWagon.number} 
              selectedSeats={selectedSeats} 
            />
          </>
        )}
      </div>
    </main>
  );
};

export default Booking;