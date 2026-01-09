import { createSlice } from '@reduxjs/toolkit';
import { Image } from "../../types/Image";

interface imageState {
    data: Image[];
    messageError: string | null;
    wasCalledOnce: boolean;
    status: {
        hasError: boolean;
        isLoading: boolean;
    }
}

const initialState: imageState = {
    data: [],
    messageError: null,
    wasCalledOnce: false,
    status: {
        hasError: false,
        isLoading: false,
    }
}

export const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {

        setImages: ( state, action: { payload: { images: Image[]} } ) => {
            state.wasCalledOnce = true;
            clearError()

            state.data = action.payload.images
        },

        createImage: ( state, action: { payload: Image } ) => {
            clearError()

            state.data.unshift( action.payload );
        },

        deleteImageById: ( state, action: { payload: string } ) => {
            clearError()

            state.data = state.data.filter( image => image._id !== action.payload );
        },

        updateImage: ( state, action: { payload: Image } ) => {
            clearError()

            const idxImage = state.data.findIndex( image => image._id === action.payload._id );
            if ( idxImage >= 0 ) state.data[idxImage] = action.payload;
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
    createImage,
    deleteImageById,
    updateImage,
    setImages,

    initLoading,
    stopLoading,
    setError,
    clearError
} = imageSlice.actions