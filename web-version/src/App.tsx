import React, { useState } from "react";
import { LoginScreen } from "./screen/login/LoginScreen";
import { Topbar } from "./components/Topbar";
import { useAppSelector } from "../store/store";

export default function App() {
    const { auth } = useAppSelector( state => state );
    const { token } = auth;
    return (
        <div>
            <Topbar />

            {
                token === null 
                ? <LoginScreen />
                : <div>{/* Other authenticated screens go here */}</div>
            }
        </div>
    )
}