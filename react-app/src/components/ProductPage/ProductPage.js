import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { updateProduct, getCurrentProd } from '../../store/products';
import { getFootprint } from "../../utils/carbonfootprintcalc"

import downArrow from "../../images/down-arrow.svg";
import editPencil from "../../images/edit-pencil.svg";
import "./productpage.css";

const ProductPage = () => {
    const company = useSelector(state => state.csession.company)
    // const products = useSelector(state => state.products.products)
    // const currentProd = products.filter((prod) => prod.id == id)
    const currentProd = useSelector(state => state.products.product)
    const components = useSelector(state => state.products.components)
    const manufacturing_processes = useSelector(state => state.products.manufacturing)
    const consumer_uses = useSelector(state => state.products.consumer_uses)
    const factories = useSelector(state => state.products.factories)
    const transport_modes = useSelector(state => state.products.transport_modes)
    const [name, setName] = useState(currentProd?.name)
    const [photo_url, setphoto_url] = useState(currentProd?.photo_url)
    const [product_category, setProductCategory] = useState(currentProd?.product_category)
    const [componentChecked, setComponentChecked] = useState(new Array(components.length).fill(false))
    const [compArray, setCompArray] = useState(null)
    const [useChecked, setUseChecked] = useState(new Array(consumer_uses.length).fill(false))
    const [useArray, setUseArray] = useState(null)
    const [manufacturing_process_id, setManufacturing_process_id] = useState(1)
    const [product_weight_g, setProduct_weight_g] = useState(0)
    const [package_weight_g, setPackage_weight_g] = useState(0)
    const [factory_id,  setFactory_id] = useState(currentProd?.factory_id)
    const [unit, setUnit] = useState("pair")
    const [transport_mode_id, setTransport_mode_id] = useState(1)
    const [number_of_cycles, setNumber_of_cycles] = useState(0)
    const [returnable, setReturnable] = useState("")
    const [product_returned_percent, setProduct_returned_percent] = useState(0)
    const [product_recycled_percent, setProduct_recycled_percent] = useState(0)

    const history = useHistory()
    const dispatch = useDispatch()

    let location = useLocation()
    let arr = location.pathname.split('')
    let num = arr.splice(9)
    let productId = Number(num.join(""))

    useEffect(() => {
        if (productId) {
            dispatch(getCurrentProd(productId))
        }
    }, [dispatch])

    const onSubmit = async (e) => {
        e.preventDefault();

        let returnBoolean;
        if (returnable === "yes") {
            returnBoolean = true
        } else {
            returnBoolean = false
        }

        let carbon_footprint_kg = getFootprint()

        const product = {
            name,
            photo_url,
            "company_id": company.id,
            product_category,
            compArray,
            "manufacturing_process_id": Number(manufacturing_process_id),
            "product_weight_g": Number(product_weight_g),
            "package_weight_g": Number(package_weight_g),
            "factory_id": Number(factory_id),
            unit,
            "transport_mode_id": Number(transport_mode_id),
            useArray,
            "number_of_cycles": Number(number_of_cycles),
            "returnable": returnBoolean,
            "product_returned_percent": Number(product_returned_percent),
            "product_recycled_percent": Number(product_recycled_percent),
            carbon_footprint_kg
        }
        const res= await dispatch(updateProduct(product))
        if(res) {
            history.push(`/company/${company.id}`)
        }
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


    let totalComponents = new Array();
    const updateComponents = (position) => {
        const updatedCheckedState = componentChecked.map((item, index) =>
            index === position ? !item : item
        );
        setComponentChecked(updatedCheckedState);

        let arr = new Array();
        for (const [index, element] of updatedCheckedState.entries()) {
            if (element === true) {
                arr.push(components[index].id)
            } else {
                arr.push(element)
            }
        }
        totalComponents = arr.filter((el) => el !== false)
        setCompArray(totalComponents)
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

    let totalUses = new Array();
    const updateUse = (position) => {
        const updatedCheckedState = useChecked.map((item, index) =>
            index === position ? !item : item
        );
        setUseChecked(updatedCheckedState);

        let arr = new Array();
        for (const [index, element] of updatedCheckedState.entries()) {
            if (element === true) {
                arr.push(consumer_uses[index].id)
            } else {
                arr.push(element)
            }
        }
        totalUses = arr.filter((el) => el !== false)
        setUseArray(totalUses)

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
    if (returnable === "yes") {
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
    } else if (returnable === "no") {
        returnElements = (
            <>
                <p>Consider accepting your products back at the end of their life <br></br>in order to decrease their carbon footprint. </p>
            </>
        )
    } else {
        returnElements = (
            <>
            </>
        )

    }

    return (
        <div className="pp-contain">
        <div className='product-page-container'>
            <div className="blurb-container">
                <div className='blurb-p'>
                    <p>Update your product <br></br>to recalculate the carbon footprint.</p>
                </div>
                <div className='arrow'>
                    <img className ='arrow-img bounce3' src={downArrow} alt='arrow'/>
                </div>
            </div>
            <div className='edit-prod-table-container'>
                <table className='edit-product-table'>
                    <tbody>
                        <tr>
                            <th className='prod-table-head'>Product Name</th>
                            <td>{currentProd?.name}</td>
                            <td><img className='edit-pencil' src={editPencil} alt="pencil"/></td>
                        </tr>
                        <tr>
                            <th>Photo</th>
                            <td><div className='product-image'><img src={currentProd?.photo_url} alt="prodimage"/></div></td>
                        </tr>
                        <tr>
                            <th>Product Category</th>
                            <td>{currentProd?.product_category}</td>
                        </tr>
                        <tr>
                            <th>Components</th>
                            <td>
                            {currentProd?.components.map((comp) => (
                               <p key={comp.id}>{comp.name}</p>
                            ))}
                            </td>
                        </tr>
                        <tr>
                            <th>Manufacturing Process</th>
                            <td>{manufacturing_processes?.filter((pro) => pro.id === currentProd?.manufacturing_process_id)[0]?.name }</td>
                        </tr>
                        <tr>
                            <th>Product Weight (g)</th>
                            <td>{currentProd?.product_weight_g}</td>
                        </tr>
                        <tr>
                            <th>Package Weight (g)</th>
                            <td>{currentProd?.package_weight_g}</td>
                        </tr>
                        <tr>
                            <th>Factory</th>
                            <td>{factories?.filter((factory) => factory.id === currentProd?.factory_id)[0]?.name}</td>
                        </tr>
                        <tr>
                            <th>Unit</th>
                            <td>{currentProd?.unit}</td>
                        </tr>
                        <tr>
                            <th>Transport Mode</th>
                            <td>{transport_modes?.filter((mode) => mode.id === currentProd?.transport_mode_id)[0]?.name}</td>
                        </tr>
                        <tr>
                            <th>Consumer Uses</th>
                            <td>
                                {currentProd?.uses ? currentProd?.uses.map((use) => (
                                    <p key={use.id}>{use.name}</p>
                                )) : <p>None</p>}
                            </td>
                        </tr>
                        <tr>
                            <th>Number of Use Cycles</th>
                            <td>{currentProd?.number_of_cycles}</td>
                        </tr>
                        <tr>
                            <th>Returnable?</th>
                            <td>{currentProd?.returnable ? "Yes" : "No"}</td>
                        </tr>
                        {currentProd?.returnable ?
                        <>
                        <tr>
                            <th>Percentage Returned</th>
                            <td>{currentProd?.product_returned_percent}</td>
                        </tr>
                        <tr>
                            <th>Percentage Recycled</th>
                            <td>{currentProd?.product_recycled_percent}</td>
                        </tr>
                        </> :
                        <></>
                        }
                        <tr>
                            <th>Carbon Footprint</th>
                            <td>{`${currentProd?.carbon_footprint_kg}`}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>   {/* end product-page-container */}



    </ div>
    )
}

export default ProductPage;
