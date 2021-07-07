import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../../store/session";
import UserDemoButton from '../UserDemoButton/index'

import logo from '../../../images/ocp-logo.svg'
import cycle from '../../../images/cycle.png';
import './loginform.css'

const LoginForm = () => {
  const [emailErrors, setEmailErrors] = useState([]);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setEmailErrors(data.errors.filter((error) =>
      error.split(":")[0] === "email ").map((error) => {
        return error.split(":")[1];
      }))
      console.log("split errors========", emailErrors)
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to={`/consumer/${user.id}`} />;
  }

  return (
    <div className='login-contain'>
      <div className='login-form-container'>
        <div className='ocp-logo'>
          <img src={logo} alt='logo' />
        </div>
        <form className='login-form' onSubmit={onLogin}>
          <div>
            {emailErrors.map((error) => (


              <div>{error}</div>
            ))}
          </div>
          <div>
            {/* <label htmlFor="email">Email</label> */}
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            {/* <label htmlFor="password">Password</label> */}
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
            <button className='user-login-button' type="submit">SIGN IN</button>
            <div className='user-demo-div'>
              <UserDemoButton />
            </div>
          </div>
        </form>
      </div> {/* end login-form-container*/}
      <div className='cycle-container'>
        <img src={cycle} alt="cycle" />
      </div>


    </ div>
  );
};

export default LoginForm;
