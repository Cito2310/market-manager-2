import { Product } from '../../types/Product';
import { createSlice } from '@reduxjs/toolkit';

interface productState {
    data: Product[];
    messageError: string | null;
    wasCalledOnce: boolean;
    status: {
        hasError: boolean;
        isLoading: boolean;
    }
}

const initialState: productState = {
    data: [],
    messageError: null,
    wasCalledOnce: false,
    status: {
        hasError: false,
        isLoading: false,
    }
}


export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

        setProducts: ( state, action: { payload: { products: Product[]} } ) => {
            state.wasCalledOnce = true;
            clearError()

            state.data = action.payload.products.filter( product => product.options.isActive );
        },

        createProduct: ( state, action: { payload: Product } ) => {
            clearError()

            state.data.push( action.payload );
        },

        deleteProductById: ( state, action: { payload: string } ) => {
            clearError()

            state.data = state.data.filter( product => product._id !== action.payload );
        },

        updateProduct: ( state, action: { payload: Product } ) => {
            clearError()

            const idxProduct = state.data.findIndex( product => product._id === action.payload._id );
            if ( idxProduct >= 0 ) state.data[idxProduct] = action.payload;
        },

        initLoading: ( state ) => { state.status.isLoading = true },
        stopLoading: ( state ) => { state.status.isLoading = false },
        setError: ( state, action: { payload: string } ) => {
            console.log(action.payload);
            state.status.hasError = true,
            state.messageError = action.payload
        },
        clearError: ( state ) => {
            state.status.hasError = false,
            state.messageError = null
        }
    }
});

export const { 
    createProduct,
    deleteProductById,
    updateProduct,
    setProducts,

    initLoading,
    setError,
    stopLoading,
    clearError,

} = productSlice.actions;