import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {companyLogin} from "../../../store/csession"


function CompanyDemoButton() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();

        const name = 'Demo Company';
        const admin_email = 'demo@company.com';
        const password = "password";

        await dispatch(companyLogin(name, admin_email, password))
        history.push('/')

    }

    return (
        <button onClick={handleClick} type='submit'>Demo Company</button>
    )
}

export default CompanyDemoButton;
