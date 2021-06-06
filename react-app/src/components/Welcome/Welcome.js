import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import LogoutButton from './auth/LogoutButton';
import background_img from "../../images/background.svg"
import largeArrow from "../../images/large-arrow.svg"
import leftArrow from "../../images/left-arrow.svg"
import "./welcome.css"

const Welcome = () => {
  return (
    <>
        <div className='welcome-container'>
            <div className='background-image-container'>
                <img id='background-image' src={background_img} />
            </div>
            <div className='left-container'>

                <div className='left-for'>
                    <h2>For</h2>
                </div>
                <div className='left-group'>
                    <h1>Companies</h1>
                </div>
                <div className='left-p'>
                    <p>A platform where companies can track and share their carbon outputs<br></br>and set goals for the future of commerce.</p>
                </div>
                <div className='arrow-container'>
                    <img className='left-arrow bounce' src={leftArrow} />
                </div>
                <div className="join-container">
                    <Link to='/company-signup'>
                        <div className='join'>
                            JOIN NOW
                        </div>
                    </Link>
                </div>
                <div className='login-container'>
                    <Link to='/company-login'>
                        <div className='login'>
                            SIGN IN
                        </div>
                    </Link>
                </div>
            </div>

        </div>

    </>
  );
}

export default Welcome;
