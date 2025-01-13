import axios from "axios";
import { fetchAppointmentsSuccess, bookAppointmentSuccess } from "./reducers/appointmentReducer";
const getToken = () => localStorage.getItem("token");
export const fetchAppointments = () => async (dispatch) => {
  try {
   
   const token = getToken();
   if (!token) {
      throw new Error("No token available, authorization denied");
    }

    const res = await axios.get("https://doctor-appointment-app-ska5.onrender.com/api/appointments", {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });

    dispatch(fetchAppointmentsSuccess(res.data));
  } catch (error) {
    console.error(
      "Fetching appointments failed:",
      error.response?.data?.message || error.message
    );
  }
};

export const bookAppointment = (appointmentData) => async (dispatch) => {
  try {
  
    const token = getToken(); 
    if (!token) {
      throw new Error("No token available, authorization denied");
    }

    const res = await axios.post("http://localhost:5000/api/appointments", appointmentData, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });

    dispatch(bookAppointmentSuccess(res.data));
  } catch (error) {
    console.error(
      "Booking appointment failed:",
      error.response?.data?.message || error.message
    );
  }
};
