import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";


import { authSlice } from './auth';
import { categorySlice } from './category';
import { productSlice } from './product';
import { imageSlice } from './image';
import { pointOfSaleSlice } from './pointOfSale/pointOfSaleSlice';
import { modalSlice } from './modal/modalSlice';
// import { productSlice } from './product';
// import { categorySlice } from './category';
// import { modalSlice } from './modal';
// import { productSlice } from './product';
// import { cashRegisterSlice } from './cashRegister';
// import { printSlice } from './print';
// import { printPriceSlice } from './printPrice';

export const store = configureStore({
    reducer: {
        category: categorySlice.reducer,
        auth: authSlice.reducer,
        product: productSlice.reducer,
        image: imageSlice.reducer,
        modal: modalSlice.reducer,
        pointOfSale: pointOfSaleSlice.reducer,
        // modal: modalSlice.reducer,
        // product: productSlice.reducer,
        // cashRegister: cashRegisterSlice.reducer,
        // print: printSlice.reducer,
        // printPrice: printPriceSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;