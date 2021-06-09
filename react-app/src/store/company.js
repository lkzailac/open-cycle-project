const LOAD_PRODUCTS = "products/LOAD_PRODUCTS";


const loadProducts = (products) => ({
    type: LOAD_PRODUCTS,
    products
})



// thunks
export const getProducts = (companyId) => async (dispatch) => {
    const res = await fetch(`/api/company/${companyId}`)

    if(res.ok) {
        let data = await res.json()
        dispatch(loadProducts(data))
    }
}


// reducer
let initialState = {}
export default function reducer(state=initialState, action) {
    switch (action.type) {
        case LOAD_PRODUCTS: {
            return {...state, ...action.products}
        }
    }

}
