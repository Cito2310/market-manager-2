import { createSlice } from '@reduxjs/toolkit';

interface modalState {
    currentModal: "none" | "addImage" | "viewImages";
    addImageData?: {
        base64: string;
        nameImage: string;
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

        setAddImageData: ( state, action: { payload: { base64: string; nameImage: string } } ) => {
            state.addImageData = action.payload

            state.currentModal = "addImage"
        },

        setNoneModal: ( state ) => {
            state.currentModal = "none"
        }
    }
});


export const {
    setCurrentModal,
    setAddImageData,
    setNoneModal
} = modalSlice.actions