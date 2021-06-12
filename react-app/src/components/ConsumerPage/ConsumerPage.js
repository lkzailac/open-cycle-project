import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { getAll } from '../../store/products';

import downArrow from "../../images/down-arrow.svg";
import './consumerpg.css';


const ConsumerPage = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const allgroup = useSelector(state => state.products.all)
    const all = allgroup?.all
    const [searchInput, setSearchInput] = useState('')

    useEffect(async() => {
        await dispatch(getAll(user.id))
    }, [dispatch])

    const handleSearch =() => {

    }

    /////////// RENDER COMPANY + ALL PRODUCTS
    const companyAndProducts = () => (
        <div className='all-products-inner-contain'>
        {
            all?.map((groups, i) => {
                return (
                    <div key={i} className='company-product-group'>
                        <div className='company-name-contain'>
                            <h1 className='company-name'>{groups[0]?.name}</h1>
                        </div>
                        <div className='companies-products'>
                        {
                            groups[1]?.map((item, j) => {
                                return (
                                    <div className='item-container'>
                                        <div className='single-company-products'>
                                            <h2 key={j} className='prod-name'>{item.name}</h2>
                                            <div className='product-photo'>
                                                <img src={item.photo_url} alt="product image"/>
                                            </div>
                                        </div>
                                        <div className='prod-info'>
                                            <div className='footprint'>
                                                Carbon Footprint:
                                                <p>{item.carbon_footprint_kg} kg CO<span>&#8322;</span>e</p>
                                            </div>
                                            <div className='returnable'>
                                                Returnable at the end of life?
                                                {item.returnable === true ?
                                                <p>Yes, this item can be returned <br></br>to {groups[0]?.name}.</p> :
                                                <p>No, please consider repairing or recycling.</p>}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                )
            })
        }
        </div>
    )


    return (
        <div className='consumer-page-container'>
            <div className='consumer-page-content'>
                <div className='blurb-search'>
                    <div className='consumer-blurb'>
                        <p>Check out the Carbon Scores<br></br>of your favorite company's products.</p>
                        <div className='arrow-img bounce3'>
                            <img className='arrow' src={downArrow} alt='arrow'/>
                        </div>
                    </div>

                    <div className='search-container'>
                        <form className='search-form' onSubmit={handleSearch}>
                            <input
                            type="text"
                            placeholder='Search for a Company or Product'
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            >
                            </input>
                        </form>
                    </div>
                </div>

                <div className='all-prod-container'>
                {companyAndProducts()}
                </div>

            </div> {/* end consumer-page-content*/}
        </div>
    )
}

export default ConsumerPage;
