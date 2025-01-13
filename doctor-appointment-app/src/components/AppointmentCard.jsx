import React from "react";

const AppointmentCard = ({ appointment }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold">{appointment.doctorType}</h3>
      <p>Date: {new Date(appointment.date).toLocaleString()}</p>
      <p>Comments: {appointment.comments}</p>

      {appointment.reports && (
        <div className="mt-4">
          <p className="font-semibold">Uploaded Report:</p>
          <a
            href={appointment.reports}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View Report
          </a>
        </div>
      )}
    </div>
  );
};

export default AppointmentCard;
