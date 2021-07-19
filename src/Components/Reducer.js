//* defining initial states
const initialState = {
    allProducts: [],
    product: []
}

//* defining reducer function for each action
const reducer = (state, action) => {
    console.log('action', action);
    switch (action.type) {
        case "READ_ALL_PRODUCTS":
            return {
                ...state,
                allProducts: action.product
            }
        case "READ_SINGLE_PRODUCT":
            return {
                ...state,
                product: [action.product]
            }
        case "DELETE_A_PRODUCT":
            let deletedProduct = [...state.product]
            const index = deletedProduct.findIndex(item => item._id === action.recordId);
            if (index >= 0) {
                deletedProduct.splice(index, 1)
                console.log('deleted', deletedProduct);
            } else {
                console.log('Error deleting the product');
            }
            return {
                ...state,
                product: deletedProduct
            }
        case "CREATE_A_PRODUCT":
            return {
                ...state,
                allProducts: [...state.allProducts, action.product]
            }
        default:
            return state;
    }


}

//* exporting the modules to be used by StateProvider
export { initialState, reducer }