import { createSlice } from '@reduxjs/toolkit';
import { ProductTicket } from '../../types/ticket';

interface modalState {
    currentModal: "none" | "addImage" | "viewImages" | "addPOSProduct" | "pay" | "cancelSells" | "lastSells";
    addImageData?: {
        base64: string;
        nameImage: string;
    }
    selectedImageData?: {
        id: string;
    }
    payData?: {
        payMethod: "cash" | "transfer-juan" | "transfer-ale" | "transfer-raul" | "qr" | "credit" | "debit";
        totalPrice: number;
        products: ProductTicket[];
    }
}

const initialState: modalState = {
    currentModal: "none",
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {

        setCurrentModal: ( state, action: { payload: "none" | "addImage" | "viewImages" | "addPOSProduct" | "pay" | "cancelSells" | "lastSells" } ) => {
            state.currentModal = action.payload
        },

        setAddImageData: ( state, action: { payload: { base64: string; nameImage: string, reset?: boolean } } ) => {
            if ( action.payload.reset ) {
                state.addImageData = undefined;
                return;
            }

            state.addImageData = action.payload

            state.currentModal = "addImage"
        },

        setNoneModal: ( state ) => {
            state.currentModal = "none"
        },

        setSelectedImageData: ( state, action: { payload: { id: string, reset?: boolean } } ) => {
            if ( action.payload.reset ) {
                state.selectedImageData = undefined;
                return;
            }

            state.selectedImageData = action.payload
        },

        setPayData: ( state, action: { payload: { 
            payMethod: "cash" | "transfer-juan" | "transfer-ale" | "transfer-raul" | "qr" | "credit" | "debit"; 
            totalPrice: number; 
            products: ProductTicket[]; 
            reset?: boolean
        } } ) => {
            if ( action.payload.reset ) {
                state.payData = undefined;
                return;
            }

            state.payData = {
                payMethod: action.payload.payMethod,
                totalPrice: action.payload.totalPrice,
                products: action.payload.products,
            }

            state.currentModal = "pay"
        },
    }
});


export const {
    setCurrentModal,
    setAddImageData,
    setNoneModal,
    setSelectedImageData,
    setPayData,
} = modalSlice.actions