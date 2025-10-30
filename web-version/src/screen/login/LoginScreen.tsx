import { useState } from "react";
import { useLoginScreen } from "./hooks/useLoginScreen";
import { InputLogin } from "./components/InputLogin";
import { ButtonLogin } from "./components/ButtonLogin";

export const LoginScreen = () => {
    const {
        register, getValues,
        errors, loading,
        onSubmit
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

        <form className="flex flex-col gap-4" onSubmit={onSubmit} noValidate>
            <InputLogin
                register={register("user")}
                label="Usuario"
                type="text"
                error={errors.user?.message}
                placeholder="nombre@ejemplo.com"
            />

            <InputLogin
                register={register("password")}
                label="Contraseña"
                type="password"
                error={errors.password?.message}
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