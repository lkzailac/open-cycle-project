import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getProducts } from '../../store/products';


import './companydashboard.css';


const CompanyDashboard = () => {
    const dispatch = useDispatch();
    const company = useSelector(state => state.csession.company);
    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProducts(company.id))
    }, [dispatch])


    if (!company) {
        return <Redirect to="/" />;
    }

    return (
        <>
            <div className='container'>
                <div className='grid'>
                    <div className='col1'>
                        <div className='welcome'>
                            <h1>{`Welcome ${company.name}!`}</h1>
                        </div>
                        <div className='carbon-footprint'>
                            <h2>Your Carbon Footprint:</h2>
                            {company.c_footprint_mt !== 0 ? company.c_footprint_mt :
                            <p>Please add 100% of your products to calculate your<br></br>
                            overall Carbon Footprint</p>}
                        </div>
                        <div className='transparency-score'>
                            <h2>Your Transparency Score:</h2>
                            <p>{`${company.transparency_score}/10`}</p>
                        </div>
                    </div> {/* end col1 */}
                    <div className='col2'>
                        <div className='carbon-goal'>
                            <h2>Your Carbon Goal:</h2>
                        </div>
                        <div className='carbon-goal_container'>
                            <h2>{company.carbon_goal}<br></br>tCO<span>&#8322;</span>e</h2>
                            <p>{`Due: ${company.carbon_goal_date}`}</p>
                        </div>
                    </div> {/* end col2 */}
                </div> {/* end grid */}


            </div>

        </>
    )
}

export default CompanyDashboard;
