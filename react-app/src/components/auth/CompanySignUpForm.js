import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { Redirect } from 'react-router-dom';
import { companySignUp } from '../../store/csession';

const CompanySignUpForm = () => {
  const [name, setName] = useState("");
  const [admin_email, setAdminEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [logo_url, setLogoUrl] = useState("");
  const [statement, setStatement] = useState("");
  const [warehouse_location, setWarehouseLocation] = useState("");
  const [products_sold, setProductsSold] = useState("");
  const [carbon_goal, setCarbonGoal] = useState("");
  const [carbon_goal_date, setCarbonGoalDate] = useState("");
  const company = useSelector(state => state.csession.company);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(username, email, password));
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default CompanySignUpForm;
