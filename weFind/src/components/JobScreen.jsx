import React, { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import JobCard from "./JobCard";
import "./Navbar.css";
import "./JobsScreen.css";

const JobsScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [jobs, setJobs] = useState([]);
  const innerContainerRef = useRef(null);
  const initialJobCount = 8;
  const jobsIncrement = 8;

  useEffect(() => {
    // Initial load with 8 jobs
    const initialJobs = Array.from({ length: initialJobCount }, (_, index) => ({
      title: `Job Title ${index + 1}`,
      company: `Company ${index + 1}`,
      description: "This is a description of the job.",
    }));
    setJobs(initialJobs);
  }, []);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const loadMoreJobs = () => {
    const newJobs = Array.from({ length: jobsIncrement }, (_, index) => ({
      title: `Job Title ${jobs.length + index + 1}`,
      company: `Company ${jobs.length + index + 1}`,
      description: "This is a description of the job.",
    }));
    setJobs((prevJobs) => [...prevJobs, ...newJobs]);
  };

  const handleScroll = () => {
    if (innerContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = innerContainerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        // Load more jobs if the user scrolls to the bottom
        loadMoreJobs();
      }
    }
  };

  return (
    <div className="jobs-container">
      <div className="navigation-container">
        <h2>
        <img src="./src/assets/logo.png" alt="WeFind Logo" className="logo-icon" />
          WeFind
        </h2>
        <div
          className={`nav-option ${selectedOption === "Profile" ? "selected" : ""}`}
          onClick={() => handleOptionClick("Profile")}
        >
          Profile
        </div>
        <div
          className={`nav-option ${selectedOption === "Jobs" ? "selected" : ""}`}
          onClick={() => handleOptionClick("Jobs")}
        >
          Jobs
        </div>
        <div
          className={`nav-option ${selectedOption === "Applied Jobs" ? "selected" : ""}`}
          onClick={() => handleOptionClick("Applied Jobs")}
        >
          Applied Jobs
        </div>
        <div
          className={`nav-option ${selectedOption === "Companies" ? "selected" : ""}`}
          onClick={() => handleOptionClick("Companies")}
        >
          Companies
        </div>
      </div>
      <div className="main-content">
        <div className="inner-container" ref={innerContainerRef} onScroll={handleScroll}>
          {jobs.map((job, index) => (
            <JobCard key={index} job={job} />
          ))}
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default JobsScreen;
