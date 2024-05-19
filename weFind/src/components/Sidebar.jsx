// Sidebar.js
import React from "react";
import "./Sidebar.css";

const Sidebar = ({ selectedOption, onOptionClick }) => {
  return (
    <div className="navigation-container">
      <h2>
        <img src="./src/assets/logo.png" alt="WeFind Logo" className="logo-icon" />
        WeFind
      </h2>
      <div
        className={`nav-option ${selectedOption === "Profile" ? "selected" : ""}`}
        onClick={() => onOptionClick("Profile")}
      >
       
        Profile
      </div>
      <div
        className={`nav-option ${selectedOption === "Jobs" ? "selected" : ""}`}
        onClick={() => onOptionClick("Jobs")}
      >
      
        Jobs
      </div>
      <div
        className={`nav-option ${selectedOption === "Applied Jobs" ? "selected" : ""}`}
        onClick={() => onOptionClick("Applied Jobs")}
      >

        Applied Jobs
      </div>
      <div
        className={`nav-option ${selectedOption === "Companies" ? "selected" : ""}`}
        onClick={() => onOptionClick("Companies")}
      >
  
        Companies
      </div>
    </div>
  );
};

export default Sidebar;
