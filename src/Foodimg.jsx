import React from "react";
const Foodimg = (porps) => {
  return (
    <>
      <div className="F_IG">
        <img src={porps.Img_} alt=".." />
        <div className="F-down-content">
            <p>{porps.Title}</p>
        </div>
      </div>
    </>
  );
};

export default Foodimg;
