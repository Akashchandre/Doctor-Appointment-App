import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const appointmentSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    fetchAppointmentsSuccess: (state, action) => {
      return action.payload;
    },
    bookAppointmentSuccess: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { fetchAppointmentsSuccess, bookAppointmentSuccess } = appointmentSlice.actions;

export default appointmentSlice.reducer;
