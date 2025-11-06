import React, { useState } from "react";
import { LoginScreen } from "./screen/login/LoginScreen";
import { Topbar } from "./components/Topbar";
import { useAppSelector } from "../store/store";
import { CategoryScreen } from "./screen/category/CategoryScreen";
import { ProductScreen } from "./screen/product/ProductScreen";

export default function App() {
    const { auth } = useAppSelector( state => state );
    const { token } = auth;
    return (
        <div>
            <Topbar />

            {
                token === null 
                ? <LoginScreen />
                // : <CategoryScreen />
                : <ProductScreen />
            }
        </div>
    )
}