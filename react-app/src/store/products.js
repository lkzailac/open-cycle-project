const LOAD_PRODUCTS = "products/LOAD_PRODUCTS";
const ADD_PRODUCT = "products/ADD_PRODUCT";
const DELETE_PRODUCT = "products/DELETE_PRODUCT";

const loadProducts = (products) => ({
    type: LOAD_PRODUCTS,
    products
})

const addProduct = (product) => ({
    type: ADD_PRODUCT,
    product
})

const removeProduct = (product) => ({
    type: DELETE_PRODUCT,
    product
})


// thunks
export const getProducts = (companyId) => async (dispatch) => {
    const res = await fetch(`/api/company/${companyId}`)

    if(res.ok) {
        let data = await res.json()
        dispatch(loadProducts(data))
    }
}

export const createProduct = (newProduct) => async (dispatch) => {
        const res = await fetch("/api/company/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                newProduct
            })
        })

        if(res.ok) {
            const addedProduct = await res.json()
            dispatch(addProduct(addedProduct))
            return addProduct;
        }
}

// Delete a product
export const deleteProduct = (id) => async (dispatch) => {

    console.log("delete thunk ----------- id:", id)

    const res = await fetch(`/api/company/products/${id}`, {
        method: "DELETE"
    });

    if(res.ok) {
        let product = await res.json();
        dispatch(removeProduct(product))
    }
}


// reducer
let initialState = {}
export default function reducer(state=initialState, action) {
    let newState = {}
    switch (action.type) {
        case LOAD_PRODUCTS:
            return {...state, ...action.products}
        case ADD_PRODUCT:
            newState = { ...state };
            newState.products.push(action.product)
            return newState;
        case DELETE_PRODUCT:
            newState = { ...state }
            let prodArr = newState.products.filter((prod) => prod["id"] !== action.product.id)
            newState.products = prodArr
            return newState;
        default:
            return state
    }

}


// name, image_url, company_id, product_category,
// components, manufacturing_process_id,
//     product_weight_g, package_weight_g,
// factory_id, unit, transport_mode_id, consumer_uses,
// number_of_cycles,
//     returnable, product_returned_percent,
// product_recycled_percent
