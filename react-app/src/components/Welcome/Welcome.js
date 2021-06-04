import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
// import { NavLink } from 'react-router-dom';
// import LogoutButton from './auth/LogoutButton';
import background_img from "../../images/background.svg"

const Welcome = () => {
  return (
    <>

        <div >
            <h1>HI</h1>
            <img src={background_img} />
        </div>
    </>
  );
}

export default Welcome;
