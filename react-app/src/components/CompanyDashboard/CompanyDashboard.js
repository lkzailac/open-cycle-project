import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';


import './companydashboard.css';


const CompanyDashboard = () => {
    const company = useSelector(state => state.csession.company);


    if (!company) {
        return <Redirect to="/" />;
    }

    return (
        <>
        <h1>hi</h1>
        </>
    )
}

export default CompanyDashboard;
