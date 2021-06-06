import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { companyLogin } from "../../store/csession"

const CompanyLoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [admin_email, setAdminEmail] = useState("");
  const [password, setPassword] = useState("");
  const company = useSelector(state => state.csession.company);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
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
    return <Redirect to="/" />;
  }

  return (
    <form onSubmit={onLogin}>
      <div>
        {errors.map((error) => (
          <div>{error}</div>
        ))}
      </div>
      <div>
        <label htmlFor="name">Company Name</label>
        <input
          name="name"
          type="text"
          placeholder="Company Name"
          value={name}
          onChange={updateName}
        />
      </div>
      <div>
        <label htmlFor="email">Admin Email</label>
        <input
          name="admin_email"
          type="text"
          placeholder="Admin Email"
          value={admin_email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={updatePassword}
        />
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default CompanyLoginForm;
