import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { getProducts } from '../../store/products';

import downArrow from "../../images/down-arrow.svg";
import editPencil from "../../images/edit-pencil.svg";
import './companydashboard.css';


const CompanyDashboard = () => {
    const dispatch = useDispatch();
    const company = useSelector(state => state.csession.company);
    const products = useSelector(state => state.products.products)

    useEffect(() => {
        dispatch(getProducts(company?.id))
    }, [dispatch])


    if (!company) {
        return <Redirect to="/" />;
    }

    function deleteProduct(id) {

    }

    return (
        <>
            <div className='company-info-container'>
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
                    <div className='col3'>
                        <div className='add-product'>
                            <p>Add more products to increase your<br></br>Transparency Score.</p>
                            <img className='arrow' src={downArrow} />
                        </div>
                        <div className='add-container'>
                            <div className='add'>
                                <Link className='add-link' to='/product'>
                                    ADD PRODUCT
                                </Link>
                            </div>
                        </div>

                    </div> {/* end col3 */}
                </div> {/* end grid */}

                <div className='products-container'>
                    <div className='your-products-header'>YOUR PRODUCTS</div>
                    <div className='product-list'>

                        {products?.map((product) => (
                            <div className='single-product'>
                                <div className='product-photo'>
                                    <img src={product.photo_url} />
                                </div>
                                <div className='product-table'>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Carbon Footprint</th>
                                                <th>Update</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>{product.name}</td>
                                                <td>{product.carbon_footprint_kg} kg CO<span>&#8322;</span>e</td>
                                                <td><button className='edit-button' value={product.id} onClick={(e) => deleteProduct(e.target.value)}><img className='edit-pencil' src={editPencil} /></button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        ))}

                    </div>



                </div>

            </div>

        </>
    )
}

export default CompanyDashboard;
