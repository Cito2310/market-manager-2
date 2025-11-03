import { FormCategory } from './../../types/category/FormCategory';
import { deleteCategoryById, initLoading, setCategories, stopLoading, updateCategory, createCategory, clearError, setError } from "./categorySlice";
import { AppDispatch, RootState } from "../store";
import { fetchApi } from "../../src/helpers/fecthApi";

export const startGetCategories = () => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {
        dispatch( clearError() );
        const { token } = getState().auth;

        try {
            const data = await fetchApi({
                method: "get",
                path: "api/category",
                token: token!
            });

            dispatch( setCategories({ categories: data }) );

        } catch (error) { dispatch( setError("Hubo un error al obtener las categorías") ); throw error; } 
        finally { dispatch( stopLoading() ); }
    };
};




export const startUpdateCategoryById = ( id: string, dataForm: FormCategory ) => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {
        dispatch( clearError() );
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
        } catch (error) { dispatch( setError("Hubo un error al actualizar la categoría") ); throw error; }

        finally { dispatch( stopLoading() ); }
    };
};




export const startDeleteCategoryById = ( id:string ) => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {
        dispatch( clearError() );
        dispatch( initLoading() );

        const { token } = getState().auth;
        console.log(id);
        try {
            await fetchApi({
                method: "delete",
                path: `api/category/${ id }`,
                token: token!,
            });
            
            dispatch( deleteCategoryById( id ) );
        } catch (error) { dispatch( setError("Hubo un error al eliminar la categoría") ); throw error; }

        finally { dispatch( stopLoading() ); }
    };
};




export const startCreateCategory = (dataForm: { name: string }) => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {
        dispatch( clearError() );
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
        } catch (error) { dispatch( setError("Hubo un error al crear la categoría") ); throw error; }
        
        finally { dispatch( stopLoading() ); }
    };
};
