import React from "react";
import { NavLink } from "react-router-dom";
import Heading from "./Heading";
const Events = () => {
  return (
    <>
      <section className="Events">
        <Heading head_data="Private Events" />
        <div className="container">
          <h1>Private Events FANCY A PIZZA PARTY?</h1>
          <p>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </p>
          <NavLink to="/contact" className="btn-t">Contact us</NavLink>
        </div>
      </section>
    </>
  );
};

export default Events;
