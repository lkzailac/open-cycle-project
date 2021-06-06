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
      await dispatch(companySignUp(name, admin_email, password, logo_url, statement, warehouse_location, products_sold, carbon_goal, carbon_goal_date));
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

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateLogo = (e) => {
    setLogoUrl(e.target.value);
  };

  const updateStatement = (e) => {
    setStatement(e.target.value);
  };

  const updateWarehouse = (e) => {
    setWarehouseLocation(e.target.value);
  };

  const updateProducts = (e) => {
    setProductsSold(e.target.value);
  };

  const updateCarbonGoal = (e) => {
    setCarbonGoal(e.target.value);
  };

  const updateCarbonGoalDate = (e) => {
    setCarbonGoalDate(e.target.value);
  };

  if (company) {
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        <label>Company Name</label>
        <input
          type="text"
          name="name"
          onChange={updateName}
          value={name}
        ></input>
      </div>
      <div>
        <label>Admin Email</label>
        <input
          type="text"
          name="admin_email"
          onChange={updateEmail}
          value={admin_email}
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
      <div>
        <label>Logo Url</label>
        <input
          type="text"
          name="logo_url"
          onChange={updateLogo}
          value={logo_url}
        ></input>
      </div>
      <div>
        <label>Statement</label>
        <input
          type="text"
          name="statement"
          onChange={updateStatement}
          value={statement}
        ></input>
      </div>
      <div>
        <label>Warehouse Location</label>
        <input
          type="text"
          name="warehouse_location"
          onChange={updateWarehouse}
          value={warehouse_location}
          required={true}
        ></input>
      </div>
      <div>
        <label>Total Products</label>
        <input
          type="text"
          name="products_sold"
          onChange={updateProducts}
          value={products_sold}
          required={true}
        ></input>
      </div>
      <div>
        <label>Carbon Goal</label>
        <input
          type="text"
          name="carbon_goal"
          onChange={updateCarbonGoal}
          value={carbon_goal}
          required={true}
        ></input>
      </div>
      <div>
        <label>Carbon Goal Due Date</label>
        <input
          type="text"
          name="carbon_goal_date"
          onChange={updateCarbonGoalDate}
          value={carbon_goal_date}
          required={true}
        ></input>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default CompanySignUpForm;
