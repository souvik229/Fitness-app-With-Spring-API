
import './App.css';

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Challenges from "./components/Challenges";
import Chat from "./components/Chat";
import axios from 'axios';
import jwt_decode from "jwt-decode";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (response) => {
    // Handle the login response from the Login component
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    //setIsLoggedIn --------->>>>>
    if (response) {
      setIsLoggedIn(true);
      setUser(userObject);
    }
  };

  const handleLogout = () => {
    // Handle the logout action
    setIsLoggedIn(false);
    setUser(null);
  };
  return (
    <Router>
      <div>
        <NavigationBar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={isLoggedIn ? <h2>Welcome, {user.name}!</h2> : <Login handleLogin={handleLogin} />} />
          <Route path="/profile" element={isLoggedIn ? <Profile user={user} /> : <Login handleLogin={handleLogin} />} />
          <Route path="/challenges" element={isLoggedIn ? <Challenges /> : <Login handleLogin={handleLogin} />} />
          <Route path="/chat" element={isLoggedIn ? <Chat /> : <Login handleLogin={handleLogin} />} />
        </Routes>
        {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
      </div>
    </Router>
  );
  
};

export default App;
