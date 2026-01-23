import { Topbar } from "../../components/Topbar"
import { SectionSidebar } from "./components/SectionSidebar"
import { SectionSumProduct } from "./components/SectionSumProduct"

export const POSScreen = () => {
    return (
        <div className="font-[Montserrat] flex">
            <Topbar />

            <div className="flex w-full">
                <SectionSidebar widthPercentaje={40} />

                <SectionSumProduct widthPercentaje={60} />
            </div>

        
        </div>
    )
}