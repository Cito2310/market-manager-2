import { createSlice } from '@reduxjs/toolkit';

interface authState {
    token: string | null;
    errorMsg: string;
    status: {
        isLoading: boolean;
        hasError: boolean;
    }
}

const initialState: authState = {
    token: null,
    errorMsg: "",
    status: {
        isLoading: false,
        hasError: false,
    }
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        setToken: ( state, action: { payload: string } ) => {
            state.token = action.payload
        },

        initLoading: ( state ) => { state.status.isLoading = true },
        stopLoading: ( state ) => { state.status.isLoading = false },
        setError: ( state, action: { payload: string } ) => { state.status.hasError = true; state.errorMsg = action.payload },
        removeError: ( state ) => { state.status.hasError = false; state.errorMsg = ""; },

    }
});

export const {
    initLoading,
    setError,
    removeError,
    setToken,
    stopLoading
    
} = authSlice.actions;