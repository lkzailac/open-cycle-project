import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { getAll } from '../../store/products';

import downArrow from "../../images/down-arrow.svg";
import './consumerpg.css';


const ConsumerPage = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    const [searchInput, setSearchInput] = useState('')

    useEffect(() => {
        dispatch(getAll(user.id))
    }, [dispatch])

    const handleSearch =() => {

    }

    return (
        <div className='consumer-page-container'>
            <div className='consumer-page-content'>

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
                <div className='consumer-blurb'>
                    <p>Check out the Carbon Scores<br></br>of your favorite company's products.</p>
                    <img className='arrow' src={downArrow} />
                </div>

            </div> {/* end consumer-page-content*/}
        </div>
    )
}

export default ConsumerPage;
