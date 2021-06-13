import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { companyLogin } from "../../../store/csession";
import CompanyDemoButton from "../CompanyDemoButton/index";

import logo from '../../../images/ocp-logo.svg'
import cycle from '../../../images/cycle.png';
import "./companyloginform.css";

const CompanyLoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [admin_email, setAdminEmail] = useState("");
  const [password, setPassword] = useState("");
  const company = useSelector(state => state.csession.company);
  const dispatch = useDispatch();

  const onCompanyLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(companyLogin(name, admin_email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setAdminEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (company) {
    return <Redirect to={`/company/${company.id}`} />;
  }

  return (
    <div className='c-login-contain'>
      <div className='c-login-form-container'>
        <div className='c-ocp-logo'>
          <img src={logo} alt='logo' />
        </div>
        <form className='c-login-form' onSubmit={onCompanyLogin}>
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div>
            {/* <label htmlFor="name">Company Name</label> */}
            <input
              name="name"
              type="text"
              placeholder="Company Name"
              value={name}
              onChange={updateName}
            />
          </div>
          <div>
            {/* <label htmlFor="email">Admin Email</label> */}
            <input
              name="admin_email"
              type="text"
              placeholder="Admin Email"
              value={admin_email}
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
            <div className='c-button-div'>
              <button className='c-login-button' type="submit">SIGN IN</button>
              {/* <div className='c-demo-div'> */}
              < CompanyDemoButton />
              {/* </div> */}
            </div>

          </div>
        </form>
      </div>
      <div className='cycle-container'>
        <img src={cycle} alt="cycle" />
      </div>
    </ div>
  );
};

export default CompanyLoginForm;
