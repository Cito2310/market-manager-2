import { AppDispatch, RootState } from "../store";
import { initLoading, removeError, setError, setToken, stopLoading } from "./authSlice";
import { fetchApi } from "../../src/helpers/fecthApi";

export const startLogin = ( username: string, password: string ) => {
    return async( dispatch: AppDispatch, getState: () => RootState ) => {
        
        dispatch( initLoading() );
        dispatch( removeError() );
        
        try {
            const { token } = await fetchApi({
                method: "post",
                path: "api/user/login",
                body: { username, password }
            })
            
            dispatch( setToken( token ) );

        } catch (error) { dispatch( setError("Error al iniciar sesión") ) }

        dispatch( stopLoading() );

    };
};