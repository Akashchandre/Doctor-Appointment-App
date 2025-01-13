import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAppointments } from "../redux/actions/appointmentActions";
import AppointmentCard from "../components/AppointmentCard";

const MyAppointments = () => {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">My Appointments</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {appointments.map((appointment) => (
          <AppointmentCard key={appointment._id} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
