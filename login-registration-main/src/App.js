import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import backgroundImage from './components/imageUpload.'; // Replace with your image path
import styled from 'styled-components';

import Login from "./components/login_component";
import SignUp from "./components/signup_component";
import UserDetails from "./components/userDetails";
// import ImageUpload from "./components/imageUpload.";

const AppContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    
    <Router>
      <div className="App">
      <TopBar />
      
      {/* Other content of your app goes here */}
      <SearchBar />
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn == "true" ? <UserDetails /> : <Login />}
          />
          
      <Route path="/sign-in" element={<Login />} />
      
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
        </Routes>
        {/* <ImageUpload/> */}
      </div>
    </Router>
    
  );
}

export default App;










