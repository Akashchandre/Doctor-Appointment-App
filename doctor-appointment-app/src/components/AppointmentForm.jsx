import React, { useState } from "react";

const AppointmentForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: "",
    doctorType: "",
    comments: "",
    reports: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, reports: URL.createObjectURL(file) });
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded">
      <div className="mb-4">
        <label className="block mb-2">Date & Time</label>
        <input
          type="datetime-local"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Type of Doctor</label>
        <select
          name="doctorType"
          value={formData.doctorType}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        >
          <option value="">Select Doctor Type</option>
          <option value="General Physician">General Physician</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dentist">Dentist</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Additional Comments</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Upload Reports</label>
        <input
          type="file"
          name="reports"
          onChange={handleFileChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Book Appointment
      </button>
    </form>
  );
};

export default AppointmentForm;
