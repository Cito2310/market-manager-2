import { AppDispatch, RootState } from "../store";
import { fetchApi } from "../../src/helpers/fecthApi";
import { clearError, setImages, setError, stopLoading, initLoading, updateImage, deleteImageById, createImage } from "./";
import { FormImage } from "../../types/Image";

export const startGetImages = () => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {
        dispatch( clearError() );
        const { token } = getState().auth;

        try {
            const data = await fetchApi({
                method: "get",
                path: "api/image",
                token: token!
            });

            dispatch( setImages({ images: data }) );

        } catch (error) { dispatch( setError("Hubo un error al obtener las imágenes") ); throw error; } 
        finally { dispatch( stopLoading() ); }
    };
};




export const startUpdateImageById = ( id: string, dataForm: FormImage ) => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {
        dispatch( clearError() );
        dispatch( initLoading() );

        const { token } = getState().auth;

        try {
            const data = await fetchApi({
                method: "put",
                path: `api/image/${ id }`,
                token: token!,
                body: dataForm,
            })

            dispatch( updateImage( data ) );
        } catch (error) { dispatch( setError("Hubo un error al actualizar la imagen") ); throw error; }

        finally { dispatch( stopLoading() ); }
    };
};




export const startDeleteImageById = ( id:string ) => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {
        dispatch( clearError() );
        dispatch( initLoading() );

        const { token } = getState().auth;
        try {
            await fetchApi({
                method: "delete",
                path: `api/image/${ id }`,
                token: token!,
            });

            dispatch( deleteImageById( id ) );
        } catch (error) { dispatch( setError("Hubo un error al eliminar la imagen") ); throw error; }

        finally { dispatch( stopLoading() ); }
    };
};




export const startCreateImage = (dataForm: FormImage) => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {
        dispatch( clearError() );
        dispatch( initLoading() );

        try {
            const { token } = getState().auth;
    
            const data = await fetchApi({
                method: "post",
                path: `api/image`,
                token: token!,
                body: dataForm
            })

            dispatch( createImage( data ) );
            // @ts-ignore
        } catch (error) { dispatch( setError("Hubo un error al crear la imagen") ); throw error; }

        finally { dispatch( stopLoading() ); }
    };
};
