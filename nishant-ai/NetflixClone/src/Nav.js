import React, { useState, useEffect } from 'react'

import './Nav.css'

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    return window.addEventListener ("scroll", () => {
      if (window.scrollY > 100){
        handleShow(true);
      } 
      else handleShow(false)
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className='nav__logo' src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='NETFLIX' />
      <img className='nav__avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Profile' />
    </div>
  )
}

export default Nav