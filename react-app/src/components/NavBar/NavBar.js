import React, { useEffect, useState } from 'react';
import { NavLink} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import LogoutButton from '../auth/LogoutButton';
import CompanyLogoutButton from "../auth/CompanyLogoutButton";
import logo from "../../images/ocp-logo.svg"
import "./navbar.css"
import LoginForm from '../auth/LoginForm';

const NavBar = (props) => {
  const user = useSelector(state => state.session.user)
  const company = useSelector(state => state.session.company)



  let sessionLinks = null;

  if (props.user) {
    sessionLinks = (
      <LogoutButton />
    )
  } else if (props.company) {
    sessionLinks = (
      <CompanyLogoutButton />
    )
  } else {
    sessionLinks = (
      <></>
    )
  }




  return (
    <nav>
      <div className='image-container'>
        <NavLink to='/'>
          <img className='nav-logo' src={logo} />
        </NavLink>

      </div>
      <ul>
        <li className='right-pad'>
          { company ?
          <NavLink to={`/company/${company.id}`} exact={true} activeClassName="active" className='nav-li r-pad'>
            Company Dashboard
          </NavLink> :
          <NavLink to='/company-login' exact={true} activeClassName="active" className='nav-li r-pad'>
            Company Dashboard
          </NavLink>
          }

        </li>
        <li className='right-pad'>
          <NavLink to="/consumers" exact={true} activeClassName="active" className='nav-li r-pad'>
            Consumers
          </NavLink>
        </li>
        <li>
          <NavLink to="/ocp" exact={true} activeClassName="active" className='nav-li'>
            Why OCP
          </NavLink>
        </li>
        <li>
          {sessionLinks}
          {/* {company ?
          <CompanyLogoutButton />
          : null}
          {user ?
          <LogoutButton /> :
          <></>
          } */}


        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
