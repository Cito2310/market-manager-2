import { createSlice } from '@reduxjs/toolkit';
import { Product } from "../../types/Product";

interface POSProduct {
    product: Product;
    quantity: number;
}

interface pointOfSaleState {
    tabs: [
        { POSProducts: POSProduct[] }
    ];
}

const initialState: pointOfSaleState = {
    tabs: [
        { POSProducts: [] }
    ],
}

export const pointOfSaleSlice = createSlice({
    name: 'pointOfSale',
    initialState,
    reducers: {
        addProduct: ( state, action: { payload: { product: Product; quantity: number, tab: number } } ) => {
            const { product, quantity, tab } = action.payload;
            const currentTab = state.tabs[tab];

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

        changeQuantity: ( state, action: { payload: { productId: string; quantity: number; tab: number } } ) => {
            const { productId, quantity, tab } = action.payload;
            const currentTab = state.tabs[tab];
        
            const productIndex = currentTab.POSProducts.findIndex( posProduct => posProduct.product._id === productId );
        
            if ( productIndex !== -1 ) {
                currentTab.POSProducts[productIndex].quantity = quantity;
            }
        },

        removeProduct: ( state, action: { payload: { productId: string; tab: number } } ) => {
            const { productId, tab } = action.payload;
            const currentTab = state.tabs[tab];

            currentTab.POSProducts = currentTab.POSProducts.filter( posProduct => posProduct.product._id !== productId );
        },
    }
})

export const {
    addProduct,
    removeProduct,
    changeQuantity,
} = pointOfSaleSlice.actions;