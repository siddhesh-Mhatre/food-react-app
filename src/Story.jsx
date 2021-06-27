import React from "react";
import hero from "C:/react-project7/react-web-project/src/images/img4.jpg";
import Heading from "./Heading";
const Story = () => {
  return (
    <>
      <section className="our-story">
        <div className="container">

<Heading head_data='our story'/>
          <div className="row-c">
            <div className="story-img">
              <img src={hero} alt="her" />
            </div>  
            <div className="story-down-content" >
            <h1>THE PASSION FOR PIZZA</h1>
              <p>
                Our Story THE PASSION FOR PIZZA I'm a paragraph. Click here to
                add your own text and edit me. It’s easy. Just click “Edit Text”
                or double click me to add your own content and make changes to
                the font. Feel free to drag and drop me anywhere you like on
                your page. I’m a great place for you to tell a story and let
                your users know a little more about you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Story;
