import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { companyLogout } from "../../store/csession";


const CompanyLogoutButton = () => {
    const company = useSelector(state => state.csession.company);
    const dispatch = useDispatch();
    const history = useHistory();

    const onLogout = async (e) => {
        history.push('/')
        await dispatch(companyLogout());



    };

    // if (!company) {
    //     return <Redirect to='/' />
    // }

    return <button onClick={onLogout}>Logout</button>;
};

export default CompanyLogoutButton;
