import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from '../../store/products';


import downArrow from "../../images/down-arrow.svg";
import "./productform.css";


const ProductForm = () => {
    const company = useSelector(state => state.csession.company)
    const components = useSelector(state => state.products.components)
    const manufacturing_processes = useSelector(state => state.products.manufacturing)
    const consumer_uses = useSelector(state => state.products.consumer_uses)
    const factories = useSelector(state => state.products.factories)
    const grids = useSelector(state => state.products.grids)
    const transport_modes = useSelector(state => state.products.transport_modes)
    const [name, setName] = useState('')
    const [photo_url, setphoto_url] = useState('')
    const [product_category, setProductCategory] = useState('')
    const [componentState, setComponents] = useState(null)
    const [manufacturing_process_id, setManufacturing_process_id] = useState(0)
    const [product_weight_g, setProduct_weight_g] = useState(0)
    const [package_weight_g, setPackage_weight_g] = useState(0)
    const [factory_id,  setFactory_id] = useState(0)
    const [unit, setUnit] = useState(0)
    const [transport_mode_id, setTransport_mode_id] = useState(0)
    const [consumer_useState, setConsumer_uses] = useState(null)
    const [number_of_cycles, setNumber_of_cycles] = useState(0)
    const [returnable, setReturnable] = useState(false)
    const [product_returned_percent, setProduct_returned_percent] = useState(0)
    const [product_recycled_percent, setProduct_recycled_percent] = useState(0)

    const dispatch = useDispatch()

    const onSubmit = async (e) => {
        e.preventDefault();

        const product = {
            name,
            photo_url,
            "company_id": company.id,
            product_category,
            componentState,
            manufacturing_process_id,
            product_weight_g,
            package_weight_g,
            factory_id,
            unit,
            transport_mode_id,
            consumer_useState,
            number_of_cycles,
            returnable,
            product_returned_percent,
            setProduct_recycled_percent
        }
        await dispatch(createProduct(product))
    }

    const updateName = (e) => {
        setName(e.target.value)
    }

    const updatephoto_url = (e) => {
        setphoto_url(e.target.value)
    }

    const updateProductCategory = (e) => {
        setProductCategory(e.target.value)
    }

    let comps= []
    const updateComponents = (e) => {
        comps.push(e.target.value)
        setComponents(comps)
    }

    const updateManufProcess = (e) => {
        setManufacturing_process_id(e.target.value)
    }

    const updateProdweight = (e) => {
        setProduct_weight_g(e.target.value)
    }

    const updatePackweight = (e) => {
        setPackage_weight_g(e.target.value)
    }

    const updateFactId = (e) => {
        setFactory_id(e.target.value)
    }

    const updateUnit = (e) => {
        setUnit(e.target.value)
    }

    const updateTransMode = (e) => {
        setTransport_mode_id(e.target.value)
    }

    let usess= []
    const updateUse = (e) => {
        usess.push(e.target.value)
        setConsumer_uses(usess)
    }

    const updateCycles = (e) => {
        setNumber_of_cycles(e.target.value)
    }

    const updateReturn = (e) => {
        setReturnable(e.target.value)
    }

    const updateReturnPer =(e) => {
        setProduct_returned_percent(e.target.value)
    }

    const updateRecyPer = (e) => {
        setProduct_recycled_percent(e.target.value)
    }

    let returnElements;
    if (returnable) {
        returnElements = (
            <>
            <div>
                <div className='label-container'>
                    <label>Percentage Returned</label>
                </div>
                    <input
                    type="number"
                    min="1" max="100"
                    name="product_returned_percent"
                    onChange={updateReturnPer}
                    value={product_returned_percent}
                    ></input>
            </div>
            <div>
            <div className='label-container'>
                <label>{`Percentage Recycled by ${company.name}`}</label>
            </div>
                <input
                type="number"
                min="1" max="100"
                name="product_recycled_percent"
                onChange={updateRecyPer}
                value={product_recycled_percent}
                ></input>
            </div>
            </>
        )
    } else {
        returnElements = (
            <>
                <p>Consider accepting your products back at the end of their life <br></br>in order to decrease their carbon footprint. </p>
            </>
        )
    }


    return (
        <>
      <div className='product-form-container'>
        <div className="blurb-container">
          <div className='blurb-p'>
            <p>Share your product details <br></br>and spread transparency.</p>
          </div>
          <div className='arrow'>
            <img src={downArrow} />
          </div>
        </div>
        <form onSubmit={onSubmit}>
          {/* {errors.map((error) => (
            <p>error</p>
          ))} */}

            <div>
              <div className='label-container'>
                <label>Product Name</label>
              </div>
              <input
                type="text"
                name="name"
                onChange={updateName}
                value={name}
                required={true}
              ></input>
            </div>
            <div>
              <div className='label-container'>
                <label>Image Url</label>
                {/* <button className='question-button' value='admin_email' onClick={(e) => [handleClick(e.target.value), console.log("button")]}><img className='question' src={question} /></button> */}
                {/* <button className='question-button' value='admin_email' onClick={(e) => handleClick(e.target.value)}>Button</button> */}
              </div>
              <input
                type="text"
                name="photo_url"
                onChange={updatephoto_url}
                value={photo_url}
              ></input>
            </div>
            <div>
              <div className='label-container'>
                <label>Product Category</label>
              </div>
              <input
                type="text"
                name="product_category"
                onChange={updateProductCategory}
                value={product_category}
              ></input>
            </div>
            <div>
                <div className='label-container'>
                    <label>Components</label>
                </div>
                {components.map((component) => (
                    <>
                        <div key={component.id} className='label-container'>
                            <label htmlFor={component.id}>{component.name}</label>
                        </div>
                        <input type="checkbox" onChange={updateComponents} id={component.id} name={component.id} value={component} ></input>
                    </>
                ))}
            </div>
            <div>
              <div className='label-container'>
                <label>Manufacturing Process</label>
              </div>
              <select value={manufacturing_process_id} onChange={updateManufProcess}>
                  {manufacturing_processes.map((process) => (
                      <option key={process.id} value={process.id}>{process.name}</option>
                  ))}
              </select>
            </div>
            <div>
              <div className='label-container'>
                <label>Product Weight (g)</label>
              </div>
              <input
                type="text"
                name="product_weight_g"
                onChange={updateProdweight}
                value={product_weight_g}
              ></input>
            </div>
            <div>
              <div className='label-container'>
                <label>Package Weight (g)</label>
              </div>
              <input
                type="text"
                name="package_weight_g"
                onChange={updatePackweight}
                value={package_weight_g}
              ></input>
            </div>
            <div>
              <div className='label-container'>
                <label>Factory</label>
              </div>
              <select value={factory_id} onChange={updateFactId}>
                  {factories.map((fact) => (
                      <option key={fact.id} value={fact.id}>{fact.name}</option>
                  ))}
              </select>
            </div>
            <div>
              <div className='label-container'>
                <label>Unit</label>
              </div>
              <select value={unit} onChange={updateUnit}>
                    <option key="unit1" value="Pair">Pair</option>
                    <option key="unit2" value="Single">Single</option>
              </select>
            </div>
            <div>
                <div className='label-container'>
                    <label>Transport Mode</label>
                </div>
                <select value={transport_mode_id} onChange={updateTransMode}>
                    {transport_modes.map((trans) => (
                        <option key={trans.id} value={trans.id}>{trans.name}</option>
                    ))}
                </select>
            </div>
            <div>
                <div className='label-container'>
                    <label>Consumer Uses</label>
                </div>
                {consumer_uses.map((use) => (
                    <>
                        <div className='label-container' key={use.id}>
                            <label htmlFor={use.id}>{use.name}</label>
                        </div>
                        <input type="checkbox" onChange={updateUse} id={use.id} name={use.id} value={use} ></input>
                    </>
                ))}
            </div>
            <div>
                <div className='label-container'>
                    <label>Number of Use Cycles</label>
                </div>
                <select value={number_of_cycles} onChange={updateCycles}>
                        <option key="cycle1" value={5}>5</option>
                        <option key="cycle2" value={25}>25</option>
                        <option key="cycle3" value={50}>50</option>
                        <option key="cycle4" value={100}>100</option>
                        <option key="cycle5" value={200}>200</option>
                        <option key="cycle6" value={500}>500</option>
                </select>
            </div>
            <div>
                <div className='label-container'>
                    <label>Returnable at End of Life?</label>
                </div>
                <input type="radio" name="returnable" value={true} onChange={updateReturn}></input>
                <label>Yes</label>
                <input type="radio" name="returnable" value={false} onChange={updateReturn}></input>
                <label>Not Yet</label>
            </div>
            { returnElements }

            <p className='full-width'>
              <button className='create-button' type="submit">SUBMIT PRODUCT</button>
            </p>

        </form>

      </div>
    </>
    )
}

export default ProductForm;
