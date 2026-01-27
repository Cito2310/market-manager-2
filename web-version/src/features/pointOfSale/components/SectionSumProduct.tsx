import { POSProduct } from "../../../../types/POSProduct";
import { POSProductItem } from "./POSProductItem";
import { POSTableHeadItem } from "./POSTableHeadItem";


interface props {
    widthPercentaje: number;
    posProducts: POSProduct[];
    totalSum: number;
    deletePOSProduct: ( id: string ) => void;
}

export const SectionSumProduct = ({ widthPercentaje, posProducts, totalSum, deletePOSProduct }: props) => (
    <div style={{ width: widthPercentaje + "%" }} className={`
        mt-8 h-[calc(100vh-2rem)] overflow-y-auto
        flex flex-col justify-between
    `}>
        <div className="">
            <table className="w-full">
                <thead className="">
                    <tr>
                        <POSTableHeadItem label="Producto" className="text-left px-4" />
                        <POSTableHeadItem label="Cantidad" width="16%" />
                        <POSTableHeadItem label="P. Unidad" width="16%" />
                        <POSTableHeadItem label="P. Total" width="16%" />
                        <POSTableHeadItem label="" width="4%" />
                    </tr>
                </thead>


                <tbody>
                    { posProducts.map( ( posProduct ) => (
                        <POSProductItem POSProduct={posProduct} deletePOSProduct={deletePOSProduct} />
                    ))}
                </tbody>
            </table>
        </div>

        <h2 className="sticky bottom-0 w-full font-medium text-right text-3xl py-2 px-4 bg-slate-100 border-t border-slate-200 text-[#023b3b]">
            $ {totalSum.toLocaleString("es-AR")}
        </h2>
    </div>
)
