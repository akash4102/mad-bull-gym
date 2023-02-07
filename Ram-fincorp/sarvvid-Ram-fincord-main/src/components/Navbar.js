import React from "react";
import { useState } from "react";
import "../Styles/Navbar.css"

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <nav>
      <img  src='https://www.ramfincorp.com/assets/images/logo-light.png' alt="LOGO"/>
      <div className="navItem">
        <a href="/" className="navLink">Home</a>
        <a href="/" className="navLink">About</a>
        <a href="/" className="navLink">Apply Now</a>
      </div>
      <div>
          <p className="burger-icon" onClick={()=> setOpen(!open)}>&#9776;</p>
      </div>
    </nav>
      {open && (
        <div style={{height: "100%", width: "20rem",backgroundColor:"blue",position: "absolute", right: "0", opacity: "0.5",display: "flex",flexDirection: "column",padding: "20px"}}>
          <a href="/" style={{fontSize: "30px"}}>Home</a>
          <a href="/" style={{fontSize: "30px"}}>About</a>
          <a href="/" style={{fontSize: "30px"}}>Apply Now</a>
        </div> 
      )}
    </>
  );
};  

export default Navbar;
