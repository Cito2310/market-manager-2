import { Topbar } from "./components/Topbar";
import { useAppSelector } from "../store/store";
import { ModalImages } from "./features/modalImages/components/ModalImages";
import { ModalAddImage } from "./features/modalImages/components/ModalAddImage";
import { useInitApp } from "./hooks/useInitApp";
import { LoginScreen } from "./features/login/LoginScreen";
import { CategoryScreen } from "./features/category/CategoryScreen";
import { ProductScreen } from "./features/product/ProductScreen";
import { POSScreen } from "./features/pointOfSale/POSScreen";
import { ModalAddProduct } from "./features/modals/addProduct/ModalAddProduct";

import { ModalPay } from "./features/modals/pay/ModalPay";
import { ModalCancelSells } from "./features/modals/cancelSells/ModalCancelSells";
import { ModalLastSells } from "./features/modals/lastSells/ModalLastSells";

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
                    { modal.currentModal === "addPOSProduct" && <ModalAddProduct /> }
                    { modal.currentModal === "pay" && <ModalPay /> }
                    { modal.currentModal === "lastSells" && <ModalLastSells /> }
                    { modal.currentModal === "cancelSells" && <ModalCancelSells /> }
                </>
            }

            {
                token === null 
                ? <LoginScreen />
                : <POSScreen />
                // : <CategoryScreen />
                // : <ProductScreen />
            }
        </div>
    )
}