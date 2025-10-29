import React, { useState } from 'react'

export const useLoginScreen = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<{ user?: string; password?: string }>(
        {}
    );
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const nextErrors: typeof errors = {};
        if (!user.trim()) nextErrors.user = "El usuario es requerido";
        if (!password) nextErrors.password = "La contraseña es requerida";

        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;

        setLoading(true);
        try {
        // TODO: llamar API de login
        await new Promise((r) => setTimeout(r, 700));
        // ejemplo: redirect o actualizar contexto/auth
        console.log("login ok", { user, password });
        } catch (err) {
        console.error(err);
        } finally {
        setLoading(false);
        }
    };

    return {
        user, password,
        setUser, setPassword,
        errors, loading,
        handleSubmit
    }
}
