import { useState } from "react";
import { useLoginScreen } from "./hooks/useLoginScreen";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";

export const LoginScreen = () => {
    const {
        user, password,
        setUser, setPassword,
        errors, loading,
        handleSubmit
    } = useLoginScreen();

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white font-[Montserrat] flex items-center justify-center p-4">
      <div
        className={`
            bg-white py-6 pb-8 px-10 rounded-md shadow-2xl w-[500px] font-[Montserrat] 
            fixed translate-x-[-50%] top-[10%] left-[50%]
            flex flex-col gap-4
            max-h-[80vh] overflow-hidden
        `}
      >
        <header className="flex flex-col items-start gap-1">
          <h1 className="text-2xl font-semibold text-slate-800">Iniciar sesión</h1>
        </header>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
            <InputLogin
                label="Usuario"
                name="user"
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                error={errors.user}
                placeholder="nombre@ejemplo.com"
            />

            <InputLogin
                label="Contraseña"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password}
                placeholder="••••••••"
            />

            <ButtonLogin loading={loading} variant="primary">
                Iniciar sesión
            </ButtonLogin>
        </form>
      </div>
    </div>
  );
}