import { AppDispatch, RootState } from "../store";
import { fetchApi } from "../../src/helpers/fecthApi";
import { clearError, setError, setProducts, createProduct, deleteProductById, initLoading, stopLoading, updateProduct } from './productSlice';
import { FormProduct } from '../../types/Product';

export const startGetProducts = () => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {
        dispatch( clearError() );
        const { token } = getState().auth;

        try {
            const data = await fetchApi({
                method: "get",
                path: "api/product",
                token: token!
            });

            dispatch( setProducts({ products: data }) );

        } catch (error) { console.log(error); dispatch( setError("Hubo un error al obtener los productos") ); throw error; } 
        finally { dispatch( stopLoading() ); }
    };
};




export const startUpdateProductById = ( id: string, dataForm: FormProduct ) => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {
        dispatch( clearError() );
        dispatch( initLoading() );

        const { token } = getState().auth;

        try {
            const data = await fetchApi({
                method: "put",
                path: `api/product/${ id }`,
                token: token!,
                body: dataForm,
            })

            dispatch( updateProduct( data ) );
        } catch (error) { console.log(error); dispatch( setError("Hubo un error al actualizar el producto") ); throw error; }

        finally { dispatch( stopLoading() ); }
    };
};




export const startDeleteProductById = ( id:string ) => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {
        dispatch( clearError() );
        dispatch( initLoading() );

        const { token } = getState().auth;
        try {
            await fetchApi({
                method: "delete",
                path: `api/product/${ id }`,
                token: token!,
            });

            dispatch( deleteProductById( id ) );
        } catch (error) { console.log(error); dispatch( setError("Hubo un error al eliminar el producto") ); throw error; }

        finally { dispatch( stopLoading() ); }
    };
};




export const startCreateProduct = (dataForm: FormProduct) => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {
        dispatch( clearError() );
        dispatch( initLoading() );

        try {
            const { token } = getState().auth;
    
            const data = await fetchApi({
                method: "post",
                path: `api/product`,
                token: token!,
                body: dataForm
            })

            dispatch( createProduct( data ) );
            // @ts-ignore
        } catch (error) { console.log(error); dispatch( setError("Hubo un error al crear el producto") ); throw error; }

        finally { dispatch( stopLoading() ); }
    };
};
