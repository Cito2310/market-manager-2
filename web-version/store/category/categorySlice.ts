import { createSlice } from '@reduxjs/toolkit';
import { Category } from '../../types/category/Category';

interface categoryState {
    data: Category[];
    messageError: string | null;
    wasCalledOnce: boolean;
    status: {
        hasError: boolean;
        isLoading: boolean;
    }
}

const initialState: categoryState = {
    data: [],
    messageError: null,
    wasCalledOnce: false,
    status: {
        hasError: false,
        isLoading: false,
    }
}


export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {

        setCategories: ( state, action: { payload: { categories: Category[]; hidden?: boolean } } ) => {
            if (!!action.payload.hidden === true) { state.data = action.payload.categories }
            if (!!action.payload.hidden === false) { console.log(state.data); state.data = action.payload.categories.filter(category => category.isActive === true) } 
        },

        createCategory: ( state, action: { payload: Category } ) => {
            state.data.push( action.payload );
        },

        deleteCategoryById: ( state, action: { payload: string } ) => {
            state.data = state.data.filter( category => category._id !== action.payload );
        },

        updateCategory: ( state, action: { payload: Category } ) => {
            state.data = state.data.map( category => {
                if ( category._id === action.payload._id ) return action.payload;
                return category;
            })
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
    setCategories,
    createCategory,
    deleteCategoryById,
    initLoading,
    setError,
    stopLoading,
    updateCategory,
    clearError,

} = categorySlice.actions;