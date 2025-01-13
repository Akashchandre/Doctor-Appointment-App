import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import { useDispatch } from "react-redux";
import { bookAppointment } from "../redux/actions/appointmentActions";
import Banner from "../components/Banner";

const BookAppointment = () => {
  const dispatch = useDispatch();

  const handleFormSubmit = (formData) => {
    const token = localStorage.getItem("token"); 
    if (!token) {
      alert("You must be logged in to book an appointment!");
      return;
    }

    dispatch(bookAppointment(formData, token)); 
    alert("Appointment booked successfully!");
  };

  return (
    <div className="p-6">
        <Banner/>
     
      <AppointmentForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default BookAppointment;
