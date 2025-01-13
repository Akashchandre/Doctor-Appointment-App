#Doctor Appointment App
A web-based application for booking doctor appointments. Users can register, book appointments, view available doctors types, and manage their profile and view all services offered by Hospital.

#Features
User authentication (Signup, Login, Logout)
Booking appointments with doctors Types
Viewing and managing user profile
View all appointments
Responsive design using Tailwind CSS

#Tech Stack
Frontend: React, React Router, Redux, Tailwind CSS
Backend: Node.js, Express.js
Database: MongoDB (MongoDB Atlas)
Authentication: JSON Web Tokens (JWT)
Deployment: Render (Backend), netlify (Frontend)

#Installation
Clone the repository:

git clonehttps://github.com/Akashchandre/Doctor-Appointment-App.git
Navigate to the project directory:

cd Doctor-Appointment-App
Install dependencies for both frontend and backend:

# For backend
cd backend
npm install

# For frontend
cd doctor-appointment-app
npm install
Set up environment variables:

Create a .env file in the backend directory and add the following:
PORT=5000
MONGO_URI=mongodb+srv://Akash:Chandre@doctorappointment.dhs9d.mongodb.net/?retryWrites=true&w=majority&appName=doctorAppointment
PORT=5000
JWT_SECRET=AkashChandre


Run the project:

# For backend
cd backend
npm run dev

# For frontend
cd doctor-appointment-app
npm start
Open your browser and visit:

http://localhost:3000

#Usage
Signup or login to access the dashboard.
Book an appointment by selecting a doctor type and time.
View booked appointments under "My Appointments".
View services offered by hospital.
Manage User Profile
