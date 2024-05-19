import React, { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Navbar.css";
import "./ProfileScreen.css"; // New CSS for ProfileScreen

const ProfileScreen = () => {
  const [selectedOption, setSelectedOption] = useState("Profile");

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    console.log("Uploaded file:", file);
    // Handle file upload logic here
  };

  return (
    <div className="jobs-container">
      <Sidebar selectedOption={selectedOption} onOptionClick={handleOptionClick} />
      <div className="main-content">
        <div className="inner-container">
          <div className="profile-container">
            <img src="./src/assets/roundedProfile.png" alt="User Profile" className="profile-image" />
            <h2 className="profile-username">Raja G</h2>
            <div className="profile-details">
            <div className="detail-item">
                <label>Father Name:</label>
                <span>Aba G</span>
              </div>
              <div className="detail-item">
                <label>Date of Birth:</label>
                <span>02/33/4050</span>
              </div>
              <div className="detail-item">
                <label>Email:</label>
                <span>meriEmail@gmail.com</span>
              </div>
            </div>
            <div className="upload-cv">
              <label htmlFor="cv-upload" className="upload-label">Upload CV:</label>
              <input type="file" id="cv-upload" className="upload-input" onChange={handleFileUpload} />
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default ProfileScreen;
