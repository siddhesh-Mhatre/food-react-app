import React, { useState } from "react";
import Footer from "./Footer";
import chef from "C:/react-project7/react-web-project/src/images/logol.png";
import { NavLink } from "react-router-dom";


const Login = () => {
  const [Trans,SetTrans]=useState('');
  const[Ind,SetInd]=useState('66px');

  const register=()=>{
    SetTrans('translateX(0px)');
    SetInd('translateX(66px)');

  }

 
    const login=()=>{
      SetTrans('translateX(300px)');
      SetInd('translateX(-59px)');

    }


  return (
    <>
      <div className="account-page">
        <div className="container">
          <div className="row">
            <div className="login-img">
              <img src={chef} alt=""/>
            </div>

            <div className="form-container">
              <div className="form-btn">
                  <span onClick={login}>Login</span>
                  <span onClick={register}>Resgiter</span>
                  <hr id="indicater" style={{ transform : Ind }} />
              </div>
              <form id="login-form" style={{ transform : Trans }}>
              <input type="text" placeholder="Username" autoComplete="false"/>
              <input type="password" placeholder="Password" autoComplete="false"/>
              <button type="submit" className="btn">Login</button>
             
              <NavLink to="#" >Forget password</NavLink>
              </form>
              <form id="Resgister-form" style={{ transform :Trans }}  >
              <input type="text" placeholder="Username" autoComplete="false" />
              <input type="email" placeholder="Email" autoComplete="false" />
              <input type="password" placeholder="Password" autoComplete="false" />
              <button type="submit" class="btn">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
