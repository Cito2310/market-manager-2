import { Topbar } from "./components/Topbar";
import { useAppSelector } from "../store/store";
import { ModalImages } from "./features/modalImages/components/ModalImages";
import { ModalAddImage } from "./features/modalImages/components/ModalAddImage";
import { useInitApp } from "./hooks/useInitApp";
import { LoginScreen } from "./features/login/LoginScreen";
import { CategoryScreen } from "./features/category/CategoryScreen";
import { ProductScreen } from "./features/product/ProductScreen";

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