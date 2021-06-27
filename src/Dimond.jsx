import React from 'react';
import { NavLink } from 'react-router-dom';
const Dimond =(props)=>{
    return(
        <>
            <div className="B_1" style={{ transformOrigin:props.tranform}}>
            <h1>{props.heading}</h1>
            <h6><NavLink to="/">{props.link}</NavLink></h6>
          </div>
        </>
    );
}

export default Dimond;