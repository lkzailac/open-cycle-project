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
                    <div className='join'>
                        <Link className='join-link' to='/company-signup'>
                            JOIN NOW
                        </Link>
                    </div>
                </div>
                <div className='login-container'>
                    <div className='login'>
                        <Link className='login-link' to='/company-login'>
                            SIGN IN
                        </Link>
                    </div>
                </div>
            </div> {/* end left-container */}

            <div className='right-container'>
                <div className='right-for'>
                    <h2>For</h2>
                </div>
                <div className='right-group'>
                    <h1>Consumers</h1>
                </div>
                <div className='right-p'>
                    <p>A place where consumers can find companies whose plans <br></br>for the future align with their own. </p>
                </div>
                <div className='right-arrow-container'>
                    <img className='right-arrow bounce' src={largeArrow} />
                </div>
                <div className="r-join-container">
                    <div className='r-join'>
                        <Link className='r-join-link' to='/sign-up'>
                            JOIN NOW
                        </Link>
                    </div>
                </div>
                <div className='r-login-container'>
                    <div className='r-login'>
                        <Link className='r-login-link' to='/login'>
                            SIGN IN
                        </Link>
                    </div>
                </div>
            </div> {/* end right-container */}

        </div>

    </>
  );
}

export default Welcome;
