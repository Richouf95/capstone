import "./App.css";
import Home from "./components/Home";
import BookingPage from "./components/BookingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import { fetchAPI, submitAPI } from "./API/Api";
import ConfirmedBooking from "./components/ConfirmedBooking";
import About from "./components/AboutPage";
import Menu from "./components/Menu";
import Login from "./components/Login";

function App() {
  const [bookingData, setBookingData] = useState({
    date: " ",
    time: " ",
    guests: " ",
    occasion: " ",
  });

  
  const today = new Date();

  const init = { times: fetchAPI(today) };

  const [availableTimes, setAvailableTimes] = useReducer(updateTimes, init);

  const submitForm = () => {
    const res = submitAPI(bookingData);
    if (res === true) {
      return true;
    } else {
      return false;
    }
  };

  function initializeTimes() {
    setAvailableTimes({ type: "init" });
  }

  useEffect(() => {
    initializeTimes();
  }, []);

  function updateTimes(state, action) {
    if (action.type === "init") {
      return { times: fetchAPI(today) };
    }
    if (action.type === "update_times") {
      let selectedBookingDate = new Date(bookingData.date);
      let newTimes = fetchAPI(selectedBookingDate).filter(
        (time) => time !== "17:00"
      );
      return { times: newTimes };
    }
    throw Error("Unknown action.");
  }

  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Home bookingData={bookingData} />} />
        <Route
          path="reservations"
          element={
            <BookingPage
              bookingData={bookingData}
              setBookingData={setBookingData}
              availableTimes={availableTimes}
              setAvailableTimes={setAvailableTimes}
              submitForm={submitForm}
            />
          }
        />

        <Route
          path="confirmation"
          element={<ConfirmedBooking bookingData={bookingData} />}
        />
        <Route
          path="about"
          element={<About />}
        />
        <Route
          path="menu"
          element={<Menu/>}
        />
        <Route
          path="order-online"
          element={<ConfirmedBooking bookingData={bookingData} />}
        />
        <Route
          path="Login"
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
