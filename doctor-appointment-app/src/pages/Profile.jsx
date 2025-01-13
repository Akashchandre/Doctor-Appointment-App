import React, { useState, useEffect } from "react";

const Profile = () => {
  // Load saved profile data from localStorage, if available
  const savedProfileData = JSON.parse(localStorage.getItem("profileData"));
  
  const [profileData, setProfileData] = useState(savedProfileData || {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    profilePicture: null,
  });

  const [isEditing, setIsEditing] = useState(!savedProfileData); // If profileData exists, start in card view

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("https://doctor-appointment-app-sz3z.onrender.com/api/profile", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) throw new Error("Failed to fetch profile");

        const data = await response.json();
        setProfileData(data); 
        setIsEditing(false);  
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      if (file) {
        const validImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'];
        
        if (validImageTypes.includes(file.type)) {
          console.log("File accepted:", file.name);
          // Handle the file (e.g., upload or preview)
        } else {
          alert("Please select a valid image file (JPG, PNG, GIF, SVG)");
        }
      }

      reader.onloadend = () => {
        setProfileData({
          ...profileData,
          profilePicture: reader.result, // Save Base64 string
        });
      };

      reader.readAsDataURL(file); // Convert image to Base64 string
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsEditing(false); // Switch to card view after saving
  
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("https://doctor-appointment-app-sz3z.onrender.com/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profileData),
      });
  
      if (!response.ok) throw new Error("Failed to save profile");
  
      const data = await response.json();
      console.log("Profile saved:", data);
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };
  

  const handleEdit = () => {
    setIsEditing(true); // Switch to form view for editing
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Patient Dashboard</h2>
      {isEditing ? (
        // Form view
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Profile Picture</label>
            <input type="file" onChange={handleFileChange} className="w-full" />
            {profileData.profilePicture && (
              <img
                src={profileData.profilePicture}
                alt="Profile"
                className="w-24 h-24 rounded-full mt-2"
                accept="image/*" 
              />
            )}
          </div>
          <div>
            <label className="block mb-1">First Name</label>
            <input
              type="text"
              name="firstName"
              value={profileData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={profileData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Address</label>
            <input
              type="text"
              name="address"
              value={profileData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">City</label>
            <input
              type="text"
              name="city"
              value={profileData.city}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">State</label>
            <input
              type="text"
              name="state"
              value={profileData.state}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Zipcode</label>
            <input
              type="text"
              name="zipcode"
              value={profileData.zipcode}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
            Save Profile
          </button>
        </form>
      ) : (
        // Card view
        <div className="border p-4 rounded shadow">
          {profileData.profilePicture && (
            <img
              src={profileData.profilePicture}
              alt="Profile"
              className="w-24 h-24 rounded-full mb-4"
            />
          )}
          <p>
            <strong>Name:</strong> {profileData.firstName} {profileData.lastName}
          </p>
          <p>
            <strong>Phone:</strong> {profileData.phone}
          </p>
          <p>
            <strong>Email:</strong> {profileData.email}
          </p>
          <p>
            <strong>Address:</strong> {profileData.address}, {profileData.city},{" "}
            {profileData.state}, {profileData.zipcode}
          </p>
          <button onClick={handleEdit} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
