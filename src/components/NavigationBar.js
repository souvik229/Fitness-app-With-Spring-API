import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = ({ isLoggedIn }) => {
  return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
        <FontAwesomeIcon icon="fa-solid fa-house" beatFade />
        </Navbar.Brand>
                <Nav>
                <NavLink className ="nav-link" to="/">Home</NavLink>
                {isLoggedIn && (
                <>
                <NavLink className ="nav-link" to="/Profile">Profile</NavLink> 
                <NavLink className ="nav-link" to="/Challenges">Challenges</NavLink>
                <NavLink className ="nav-link" to="/chat">DashBoard</NavLink>
                </>
                )}

            </Nav>
</Navbar>

    // <nav className="navbar">
    //   <ul className="nav-list">
    //     <li className="nav-link">
    //       <Link to="/">Home</Link>
    //     </li>
    //     {isLoggedIn && (
    //       <>
    //         <li className="nav-link">
    //           <NavLink to="/Profile" activeClassName="active">
    //             Profile
    //           </NavLink>
    //         </li>
    //         <li className="nav-link">
    //           <NavLink to="/Challenges" activeClassName="active">
    //             Challenges
    //           </NavLink>
    //         </li>
    //         <li className="nav-link">
    //           <NavLink to="/chat" activeClassName="active">
    //             DashBoard
    //           </NavLink>
    //         </li>
    //         {/* <li>
    //             <button onClick={() => console.log('logout')}>logout</button>
    //         </li> */}
    //       </>
    //     )}
    //   </ul>
    // </nav>
  );
};

export default NavigationBar;
