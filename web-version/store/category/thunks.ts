import { FormCategory } from './../../types/category/FormCategory';
import { deleteCategoryById, initLoading, setCategories, stopLoading, updateCategory, createCategory } from "./categorySlice";
import { AppDispatch, RootState } from "../store";
import { fetchApi } from "../../src/helpers/fecthApi";

export const startGetCategories = () => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {
        
        const { token } = getState().auth;

        const data = await fetchApi({
            method: "get",
            path: "api/category",
            token: token!
        })

        dispatch( setCategories( data ) );

    };
};

export const startUpdateCategoryById = ( id: string, dataForm: FormCategory ) => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {
        
        dispatch( initLoading() );

        const { token } = getState().auth;

        try {
            const data = await fetchApi({
                method: "put",
                path: `api/category/${ id }`,
                token: token!,
                body: dataForm,
            })
            
            dispatch( updateCategory( data ) );
        } catch (error) { console.log(error) }

        dispatch( stopLoading() );
    };
};

export const startDeleteCategoryById = ( id:string ) => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {
        
        dispatch( initLoading() );

        const { token } = getState().auth;

        try {
            await fetchApi({
                method: "delete",
                path: `api/category/${ id }`,
                token: token!,
            });
            
            dispatch( deleteCategoryById( id ) );
        } catch (error) { console.log(error) }

        dispatch( stopLoading() );

    };
};

export const startCreateCategory = (dataForm: { name: string }) => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {
        
        dispatch( initLoading() );

        try {
            const { token } = getState().auth;
    
            const data = await fetchApi({
                method: "post",
                path: `api/category`,
                token: token!,
                body: dataForm
            })

            dispatch( createCategory( data ) );
            // @ts-ignore
        } catch (error) { console.log(error?.response.data || error) }

        dispatch( stopLoading() );

    };
};
