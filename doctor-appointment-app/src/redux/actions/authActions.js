import axios from "axios";
import { loginSuccess, signupSuccess, logout } from "./reducers/authReducer";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const login = (credentials, navigate) => async (dispatch) => {
  try {
    const res = await axios.post("https://doctor-appointment-app-sz3z.onrender.com/api/auth/login", credentials); // Full URL for login
    localStorage.setItem("token", res.data.token);
    dispatch(loginSuccess(res.data));
    navigate("/dashboard");
    toast.success("Login successful");
  } catch (error) {
    console.error("Login failed:", error.response.data.message);
    alert("invalid Credentials")
  }
};


export const signup = (userData, navigate) => async (dispatch) => {
    try {
      const res = await axios.post("https://doctor-appointment-app-sz3z.onrender.com/api/auth/signup", userData);
      dispatch(signupSuccess(res.data));
      toast.success("Signup successful. Please login to continue.");
      navigate("/login");
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.success("User already exists. Please login.");
        navigate("/login");
      } else {
        console.error("Signup failed:", error.response?.data?.message || error.message);
        alert("Signup failed. Please try again.");
      }
    }
  };
  


export const logoutUser = () => (dispatch) => {
  dispatch(logout());
};
