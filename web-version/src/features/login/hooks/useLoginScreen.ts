import React, { useState } from 'react'
import { startLogin } from './../../../../store/auth/thunks';
import { useAppDispatch, useAppSelector } from '../../../../store/store';
import { useForm } from 'react-hook-form';
import { authSlice } from '../../../../store/auth';

export const useLoginScreen = () => {
    const dispatch = useAppDispatch();
    const { token, status, errorMsg } = useAppSelector( state => state.auth );
    const { register, handleSubmit, getValues, formState: { errors } } = useForm({ defaultValues: { user: "", password: "" } });
    const [loading, setLoading] = useState(false);

    const onSubmit = handleSubmit( ( { password, user } ) => {
        // Validaciones iniciales
        if ( !user.trim()) errors.user!.message = "El usuario es requerido";
        if ( !password ) errors.password!.message = "La contraseña es requerida";
        if ( Object.keys( errors ).length > 0 ) return;


        setLoading(true);

        try {
            dispatch( startLogin( user, password ) );

            console.log( "Login exitoso",  token  );
        } catch (error) {
            dispatch( authSlice.actions.setError("Error al iniciar sesión") );
            console.error( "Error en login", error );
        }

        setLoading(false);

        console.log( { user, password } );
    } );


    return {
        register, getValues,
        errors, loading,
        onSubmit
    }
}
