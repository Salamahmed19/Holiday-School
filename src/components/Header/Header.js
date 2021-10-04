import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// custom style of header and navbar
const style = { textDecoration: 'none', margin: "15px 45px", fontSize: "30px", fontWeight: "bold"}
const Header = () => {
    return (
        <Nav className="bg-light">
          <NavLink to="/Home">
            <img alt="" src="images/logo.png" width="110" height="80" className="d-inline-block align-top ms-5"/>
          </NavLink>
          <NavLink to="/Home"  style={style}>Home</NavLink>
          <NavLink to="/Courses"  style={style}>Courses</NavLink>
          <NavLink to="/OurStory"  style={style}>OurStory</NavLink>
          <NavLink to="/FutureCourse"  style={style}>FutureCourse</NavLink>
          <NavLink to="/AboutUs"  style={style}>AboutUs</NavLink>
        </Nav>
    );
};

export default Header;