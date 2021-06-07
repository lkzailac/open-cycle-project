import React from 'react';
import { NavLink} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import LogoutButton from '../auth/LogoutButton';
import logo from "../../images/ocp-logo.svg"
import "./navbar.css"

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  const company = useSelector(state => state.session.company)




  return (
    <nav>
      <div className='image-container'>
        <img className='nav-logo' src={logo} />
      </div>
      <ul>
        <li className='right-pad'>
          <NavLink to="/company/:id" exact={true} activeClassName="active" className='nav-li r-pad'>
            Company Dashboard
          </NavLink>
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
