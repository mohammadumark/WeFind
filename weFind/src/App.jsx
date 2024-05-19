import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
// import RegisterScreen from './components/RegisterScreen';
// import JobScreen from './components/JobScreen';
// import AppliedJob from './components/AppliedJob';
// import ProfileScreen from './components/ProfileScreen';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/login" element={<LoginScreen />} />
    //     <Route path="/register" element={<RegisterScreen />} />
    //     <Route path="/home" element={<HomeScreen />} />
    //     <Route path="*" element={<Navigate to="/login" />} />
    //   </Routes>
    // </Router>
    <SignupScreen/>
  );
}

export default App;
