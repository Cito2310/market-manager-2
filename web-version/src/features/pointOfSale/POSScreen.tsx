import { useFieldArray, useForm } from "react-hook-form"
import { setCurrentModal } from "../../../store/modal/modalSlice"
import { removeProduct } from "../../../store/pointOfSale/pointOfSaleSlice"
import { useAppDispatch, useAppSelector } from "../../../store/store"
import { Topbar } from "../../components/Topbar"
import { SectionSidebar } from "./components/SectionSidebar"
import { SectionSumProduct } from "./components/SectionSumProduct"
import { POSProduct } from "../../../types/POSProduct"

export const POSScreen = () => {
    const dispatch = useAppDispatch();
    const { tabs, currentTabIndex } = useAppSelector( state => state.pointOfSale );
    const currentTab = tabs[currentTabIndex];

    const totalSum = currentTab.POSProducts.reduce( ( total, POSProduct ) => total + ( POSProduct.product.info.price * POSProduct.quantity ), 0 );

    const onModalAddPOSProduct = () => {
        dispatch( setCurrentModal( "addPOSProduct" ) )
    }

    const deletePOSProduct = ( id: string ) => {
        dispatch( removeProduct( { productId: id } ) )
    }

    return (
        <div className="font-[Montserrat] flex">
            <Topbar />

            <div className="flex w-full">
                <SectionSidebar buttons={{ addPOSProduct: onModalAddPOSProduct }} widthPercentaje={40} />

                <SectionSumProduct posProducts={currentTab.POSProducts} widthPercentaje={60} totalSum={totalSum} deletePOSProduct={deletePOSProduct} />
            </div>

        
        </div>
    )
}