import React, { useState } from "react";
import menu from "C:/react-project7/react-web-project/src/images/menu.png";
import logo from "C:/react-project7/react-web-project/src/images/logo.png";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import { NavLink } from "react-router-dom";
const Navbar = () => {

  var prevScrollpos = window.pageYOffset;   
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {

      document.getElementById("HN").style.top = "0px";
    } else {
      document.getElementById("HN").style.top = "-81px";
    }
    prevScrollpos = currentScrollPos;
  }

  const [Hgt, setHgt] = useState(`0px`);
  const fun = () => {
    console.log("click");
    if (Hgt === `0px`) {
      setHgt(`269px`);
    } else {
      setHgt(`0px`);
    }
  };
  return (
    <>
      <header id="HN">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <img src={logo} style={{ width: "40px" }} alt="loding.."></img>
              <NavLink to="/">
                <h2>CHOP CHOP</h2>
              </NavLink>
            </div>
            <nav>
              <ul id="MenuItems" style={{ maxHeight: Hgt }}>
                <li style={{ position: "relative" }}>
                  <AccountCircleRoundedIcon className="log" />
                  <NavLink  to="/log">Login</NavLink>
                </li>
                <li>
                  <NavLink  to="/">Home</NavLink>
                </li>
                <li >
                <NavLink  to="contact">Contact us</NavLink>
                </li>
                <li>
      
                  <NavLink  to="gift" className="gift">Gift card</NavLink>
                </li>
              </ul>
            </nav>
      
            <img src={menu} className="menu-icon" onClick={fun} alt="lodaing.." />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
