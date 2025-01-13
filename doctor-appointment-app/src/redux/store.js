import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./actions/reducers/authReducer";
import appointmentReducer from "./actions/reducers/appointmentReducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    appointments: appointmentReducer,
  },
});

export default store;
