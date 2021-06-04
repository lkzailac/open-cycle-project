import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import LogoutButton from './auth/LogoutButton';


const NavBar = () => {
  const user = useSelector(state => state.session.user)
  const company = useSelector(state => state.session.company)

  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/companylogin" exact={true} activeClassName="active">
            Company Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact={true} activeClassName="active">
            Consumers
          </NavLink>
        </li>
        <li>
          <NavLink to="/ocp" exact={true} activeClassName="active">
            Why OCP
          </NavLink>
        </li>
        <li>
          {user || company ?
          <LogoutButton /> :
          <></>
          }
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
