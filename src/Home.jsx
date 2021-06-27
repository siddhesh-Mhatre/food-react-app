import React from "react";
import { NavLink } from "react-router-dom";
import Story from './Story';
import Cover from './Cover';
import Reservations from "./Reservations";
import Events from "./Events";
import Footer from "./Footer";

const Home = () => {
  return (
    <>

      <div className="main-banner">
        <div className="carousel-cell contact">
          <div className="image img1">
            <div className="text-conttent">
              <h1>Cooking Classses KIDS & ADULTS </h1>
              <p>
                online & onsite cooking classes For Every Level FEEL FREE TO
                SEND US A MESSAGE NOW!
              </p>
              <NavLink to="" className="btn">
                Book a Class
              </NavLink>
            </div>
          </div>
        </div>
      </div>


<Story/>
<Cover/>
<Reservations/>
<Events/>
<Footer/>
    </>
  );
};

export default Home;
