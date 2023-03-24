
import Header from "./header";
import Footer from "./footer";

import React, { useState } from "react";

 const  Log=()=> {
  let [enter, Login] = useState(true);

  const Down = () => {
    Login(false);
  };

  return (
    <section>
      <Header />

      <div className="main1">
<button className={enter? "btn2 a" : "btn2"} onClick={() => Login(true)}> Login</button>
        <button className={!enter? "btn2 a" : "btn2"} onClick={Down}> Signup </button>
      </div>
      <form className="view">
        <input className="inp" type="email" placeholder="Email Address"
 />
        <input className="inp" type="password" placeholder="Password" />
        {!enter && (
          <input className="inp" type="password" placeholder="Confirm Password" />
        )}
        <button type="submit"  className="btn">
          {enter ? "LOGIN" : "SIGNUP"}
        </button>
        {enter && (
          <a href="">
            <p className="l1" >Forgot Password?</p>
          </a>
        )}
        <p  >{enter ? "or login with" : "or signup with"}</p>
      </form>
      <Footer signUpBtn={Down} />
    </section>
  );
}

export default Log;