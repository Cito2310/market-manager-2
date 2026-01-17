import { createSlice } from '@reduxjs/toolkit';
import { set } from 'react-hook-form';

interface modalState {
    currentModal: "none" | "addImage" | "viewImages";
    addImageData?: {
        base64: string;
        nameImage: string;
    }
    selectedImageData?: {
        id: string;
    }
}

const initialState: modalState = {
    currentModal: "none",
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {

        setCurrentModal: ( state, action: { payload: "none" | "addImage" | "viewImages" } ) => {
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
        }
    }
});


export const {
    setCurrentModal,
    setAddImageData,
    setNoneModal,
    setSelectedImageData,
} = modalSlice.actions