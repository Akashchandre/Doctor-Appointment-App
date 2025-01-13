import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.clear();
    navigate("/signup");
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <header className="bg-blue-500 text-white p-4 flex items-center justify-between relative">
      <div className="flex items-center">
        {/* Hamburger icon  */}
        <FaBars className="mr-4 cursor-pointer" size={24} onClick={toggleSidebar} />
        <h1 className="text-xl font-bold">Doctor Appointment</h1>
      </div>

      {/* Sidebar menu */}
      {sidebarVisible && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg p-4 z-50 overflow-auto">
          <FaBars
            className="mb-4 cursor-pointer text-blue-500"
            size={24}
            onClick={toggleSidebar}
          />
          <nav className="flex flex-col gap-4">
            {/* Links visible only on small screens */}
            <div className="block lg:hidden">
              <Link
                to="/dashboard"
                onClick={toggleSidebar}
                className="bg-blue-500 hover:bg-gray-200 p-2 rounded"
              >
                Dashboard
              </Link>
              <br></br>
              <br></br>
              <Link
                to="/book-appointment"
                onClick={toggleSidebar}
                className="bg-blue-500 hover:bg-gray-200 p-2 rounded"
              >
                Book Appointment
              </Link>
              <br></br>
              <br></br>
              <Link
                to="/my-appointments"
                onClick={toggleSidebar}
                className="bg-blue-500 hover:bg-gray-200 p-2 rounded"
              >
                My Appointments
              </Link>
              <br></br>
              <br />
              <Link
                to="/services"
                onClick={toggleSidebar}
                className="bg-blue-500 hover:bg-gray-200 p-2 rounded"
              >
                Services
              </Link>
            </div>

            {/* Profile and Logout always visible in sidebar */}
            <Link
              to="/profile"
              onClick={toggleSidebar}
              className="bg-blue-500 hover:bg-gray-200 p-2 rounded"
            >
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded mt-4"
            >
              Logout
            </button>
          </nav>
        </div>
      )}

      {/* Regular/horizontal navigation links  */}
      <nav className="hidden lg:flex gap-4">
        <Link to="/dashboard" className="hover:underline">
          Dashboard
        </Link>
        <Link to="/book-appointment" className="hover:underline">
          Book Appointment
        </Link>
        <Link to="/my-appointments" className="hover:underline">
          My Appointments
        </Link>
        <Link to="/services" className="hover:underline">
          Services
        </Link>
      </nav>
    </header>
  );
};

export default Header;
