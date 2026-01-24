import { POSProduct } from './../../types/POSProduct';
import { createSlice } from '@reduxjs/toolkit';
import { Product } from "../../types/Product";


interface pointOfSaleState {
    tabs: [
        { POSProducts: POSProduct[] }
    ];
    currentTabIndex: number;
}

const initialState: pointOfSaleState = {
    tabs: [
        { POSProducts: [] }
    ],
    currentTabIndex: 0,
}

export const pointOfSaleSlice = createSlice({
    name: 'pointOfSale',
    initialState,
    reducers: {
        addProduct: ( state, action: { payload: { product: Product; quantity: number } } ) => {
            const { product, quantity } = action.payload;
            const currentTab = state.tabs[state.currentTabIndex];

            const existProductInTabIndex = currentTab.POSProducts.findIndex( posProduct => posProduct.product._id === product._id );

            // Update quantity if product already exists in the tab
            if ( existProductInTabIndex !== -1 ) {
                currentTab.POSProducts[existProductInTabIndex].quantity += quantity;
            }

            // Add product if it does not exist in the tab
            if ( existProductInTabIndex === -1 ) {
                currentTab.POSProducts.push({ product, quantity });
            }
        },

        changeQuantity: ( state, action: { payload: { productId: string; quantity: number } } ) => {
            const { productId, quantity } = action.payload;
            const currentTab = state.tabs[state.currentTabIndex];
        
            const productIndex = currentTab.POSProducts.findIndex( posProduct => posProduct.product._id === productId );
        
            if ( productIndex !== -1 ) {
                currentTab.POSProducts[productIndex].quantity = quantity;
            }
        },

        removeProduct: ( state, action: { payload: { productId: string } } ) => {
            const { productId } = action.payload;
            const currentTab = state.tabs[state.currentTabIndex];

            currentTab.POSProducts = currentTab.POSProducts.filter( posProduct => posProduct.product._id !== productId );
        },
    }
})

export const {
    addProduct,
    removeProduct,
    changeQuantity,
} = pointOfSaleSlice.actions;