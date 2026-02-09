import { useFieldArray, useForm } from "react-hook-form"
import { setCurrentModal, setPayData } from "../../../store/modal/modalSlice"
import { removeProduct } from "../../../store/pointOfSale/pointOfSaleSlice"
import { useAppDispatch, useAppSelector } from "../../../store/store"
import { Topbar } from "../../components/Topbar"
import { SectionSidebar } from "./components/SectionSidebar"
import { SectionSumProduct } from "./components/SectionSumProduct"
import { POSProduct } from "../../../types/POSProduct"
import { useMemo } from "react"
import { v4 as uuidv4 } from 'uuid';

export const POSScreen = () => {
    const dispatch = useAppDispatch();
    const { register, watch } = useForm({ defaultValues: { barcode: "", clientMoney: "" } })
    const { tabs, currentTabIndex } = useAppSelector( state => state.pointOfSale );
    const currentTab = tabs[currentTabIndex];

    const totalSum = currentTab.POSProducts.reduce( ( total, POSProduct ) => total + ( POSProduct.product.info.price * POSProduct.quantity ), 0 );
    const cashChange = useMemo( () => Number(watch("clientMoney"))-totalSum, [ totalSum, watch("clientMoney") ] )

    const onModalAddPOSProduct = () => {
        dispatch( setCurrentModal( "addPOSProduct" ) )
    }

    const deletePOSProduct = ( id: string ) => {
        dispatch( removeProduct( { productId: id } ) )
    }

    const onModalCancelSells = () => {
        dispatch( setCurrentModal( "cancelSells" ) )
    }

    const onPayModal = () => {
        const newDate = new Date();
        const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
        const day = newDate.getDate().toString().padStart(2, '0');

        const hours = newDate.getHours().toString().padStart(2, '0');
        const minutes = newDate.getMinutes().toString().padStart(2, '0');

        const dateString = `${day}/${month}/${newDate.getFullYear()} ${hours}:${minutes}`;
        const productsForTicket = currentTab.POSProducts.map( posProduct => ({
            productId: posProduct.product._id,
            productPrice: posProduct.product.info.price,
            productName: `${posProduct.product.info.brand} ${posProduct.product.info.name} ${posProduct.product.info.size}${posProduct.product.info.sizeType}`,
            quantity: posProduct.quantity,
        }))

        dispatch( setPayData({ payMethod: "cash", totalPrice: totalSum, products: productsForTicket }) )


        console.log({
            idTicket: uuidv4(),
            date: dateString,
            totalSum: totalSum,
            products: productsForTicket,
        })
    }

    return (
        <div className="font-[Montserrat] flex">
            <Topbar />

            <div className="flex w-full">
                <SectionSidebar disabled={currentTab.POSProducts.length === 0} cashChange={cashChange} register={ register } buttons={{ addPOSProduct: onModalAddPOSProduct, onPayModal: onPayModal, onCancelSell: onModalCancelSells }} widthPercentaje={40} />

                <SectionSumProduct posProducts={currentTab.POSProducts} widthPercentaje={60} totalSum={totalSum} deletePOSProduct={deletePOSProduct} />
            </div>

        
        </div>
    )
}