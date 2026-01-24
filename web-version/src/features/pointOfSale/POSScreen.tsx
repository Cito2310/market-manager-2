import { useAppSelector } from "../../../store/store"
import { Topbar } from "../../components/Topbar"
import { SectionSidebar } from "./components/SectionSidebar"
import { SectionSumProduct } from "./components/SectionSumProduct"

export const POSScreen = () => {
    const { tabs, currentTabIndex } = useAppSelector( state => state.pointOfSale );
    const currentTab = tabs[currentTabIndex];

    const totalSum = currentTab.POSProducts.reduce( ( total, POSProduct ) => total + ( POSProduct.product.info.price * POSProduct.quantity ), 0 );


    return (
        <div className="font-[Montserrat] flex">
            <Topbar />

            <div className="flex w-full">
                <SectionSidebar widthPercentaje={40} />

                <SectionSumProduct posProducts={currentTab.POSProducts} widthPercentaje={60} totalSum={totalSum} />
            </div>

        
        </div>
    )
}