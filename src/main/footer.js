import React from "react";
const Footer=({Down} )=>{
  return (
    <section>
<div className="div1"> <a href=""> <img className="flogo" src="https://assets.stickpng.com/images/5847f9cbcef1014c0b5e48c8.png" alt="logo"/> </a>
<a href=""> <img className="flogo" src="https://icons-for-free.com/iconfiles/png/512/fb+logo+social+social+media+social+network+icon-1320191784115198611.png" alt="fb"/> </a>
<a href=""> <img className="flogo" src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="twt"/> </a>
   
   </div>
  <div className="div2">
  <p>
        Don't have an Account?
        <span className="span">
          Craate new Account!
        </span>
      </p>
      <p >
        By signing up, you are agree with our
        <span className="span">
          Term & Conditions
        </span>
      </p>
  </div>
    </section>
  );
}

export default Footer;