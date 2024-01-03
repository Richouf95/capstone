import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ConfirmedBooking = ({
  bookingData,
  setBookingData,
  availableTimes,
  setAvailableTimes,
}) => {
  const [data, setData] = useState();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("bookings"));

    if (items) {
      setData(items);
    }
  }, [bookingData]);

  return (
    <>
      <Header />
      <div className="booking-confirmed">
          <h1>Booking Confirmed!</h1>
        <div id="notif">
          <p>Date: {data && data.date}</p>
          <p>Time: {data && data.time}</p>
          <p>Number of Guests: {data && data.guests}</p>
          <p>Occasion: {data && data.occasion}</p>  
          <div style={{display:"flex", justifyContent:"center"}}>
          <Link to="/reservations" className="a">
            <button style={{padding:"0.8em", background:"#495e57", color:"white", fontSize:"0.5em", border:"none", borderRadius:"10px", cursor:"pointer"}}>Update Reservation</button>
          </Link>
          </div>
                  
        </div>

      </div>
      <Footer />
    </>
  );
};

export default ConfirmedBooking;
