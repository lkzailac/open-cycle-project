import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Welcome from "./components/Welcome/index"
import LoginForm from "./components/auth/LoginForm/index";
import SignUpForm from "./components/auth/SignUpForm";
import CompanyLoginForm from "./components/auth/CompanyLoginForm/index"
import CompanySignUpForm from "./components/auth/CompanySignUpForm/index"
import CompanyDashboard from "./components/CompanyDashboard/index"
import NavBar from "./components/NavBar/index";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import User from "./components/User";
import { authenticate } from "./store/session";
import {companyAuthenticate, companyLogin} from "./store/csession";

function App() {
  const user = useSelector(state => state.session.user)
  const company = useSelector(state => state.csession.company)
  const [loaded, setLoaded] = useState(false);
  const [companyLoaded, setCompanyLoaded]  = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, []);

  useEffect(() => {
    (async() => {
      await dispatch(companyAuthenticate());
      setCompanyLoaded(true);
    })();
  }, []);

  if (!loaded || !companyLoaded) {
    return null;
  }




  return (
    <BrowserRouter>
      <NavBar company={company} user={user}/>
      <Switch>
        <Route path="/" exact={true} >
          <Welcome />
        </Route>
        <Route path='/company-login' exact={true}>
          <CompanyLoginForm />
        </Route>
        <Route path='/company-signup' exact={true}>
          <CompanySignUpForm />
        </Route>
        <Route path={`/company/:id`} exact={true}>
          <CompanyDashboard />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path="/users/:userId" exact={true} >
          <User />
        </ProtectedRoute>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
