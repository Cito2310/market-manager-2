import React, { useState } from "react";
import { LoginScreen } from "./screen/login/LoginScreen";
import { Topbar } from "./components/Topbar";
import { useAppSelector } from "../store/store";
import { CategoryScreen } from "./screen/category/CategoryScreen";
import { ProductScreen } from "./screen/product/ProductScreen";
import { useCategoryScreen } from "./screen/category/hooks/useCategoryScreen";
import { ModalImages } from "./features/modalImages/components/ModalImages";
import { ModalAddImage } from "./features/modalImages/components/ModalAddImage";
import { useInitApp } from "./hooks/useInitApp";

export default function App() {
    const { auth, modal } = useAppSelector( state => state );
    const { token } = auth;
    
    useInitApp();

    return (
        <div>
            <Topbar />
            {
                token && <>
                    { modal.currentModal === "addImage" && <ModalAddImage /> }
                    { ( modal.currentModal === "viewImages" || modal.currentModal === "addImage" ) && <ModalImages />}
                </>
            }

            {
                token === null 
                ? <LoginScreen />
                // : <CategoryScreen />
                : <ProductScreen />
            }
        </div>
    )
}