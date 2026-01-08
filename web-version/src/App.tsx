import React, { useState } from "react";
import { LoginScreen } from "./screen/login/LoginScreen";
import { Topbar } from "./components/Topbar";
import { useAppSelector } from "../store/store";
import { CategoryScreen } from "./screen/category/CategoryScreen";
import { ProductScreen } from "./screen/product/ProductScreen";
import { useCategoryScreen } from "./screen/category/hooks/useCategoryScreen";
import { ModalImages } from "./features/modalImages/components/ModalImages";

export default function App() {
    const { auth } = useAppSelector( state => state );
    const { token } = auth;
    useCategoryScreen();

    return (
        <div>
            <Topbar />
            <ModalImages />

            {
                token === null 
                ? <LoginScreen />
                // : <CategoryScreen />
                : <ProductScreen />
            }
        </div>
    )
}