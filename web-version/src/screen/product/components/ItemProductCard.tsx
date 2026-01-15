import { Product } from "../../../../types/Product";
import { IconButton } from "../../../components/IconButton";
import { StockBar } from "./StockBar";

interface props {
    data: {
        name: string;
        brand: string;
        size: number;
        sizeType: string;
        category: string;
        primary: string;
        price: number;
    }
    type: "product" | "addProduct";
    product?: Product;
    openDetailsMenu?: () => void;
}

export const ItemProductCard = ({ data, product, type, openDetailsMenu }: props) => {
    if (type === "product" && !product) throw new Error("ItemProductCard: 'product' prop is required when type is 'product'");
    if (type === "product" && !openDetailsMenu) throw new Error("ItemProductCard: 'openDetailsMenu' prop is required when type is 'product'");

    return (
        <tr className={`border-slate-400/50 even:bg-slate-50/40 hover:bg-slate-50 transition-colors`}>
            <td className="px-4 py-4 font-medium text-[#023b3b]"> {
                data.name || data.brand ? <>
                    {data.brand} {data.name} 
                    <span className="text-[#537e7e]"> {data.size}{data.sizeType}</span>
                </> : <span className="text-[#7e9292] italic font-normal">Nuevo Producto</span>
            } </td>

            <td className="px-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#e4f0f0] text-[#023b3b]">{
                    data.category ? data.category : <span className="text-[#7e9292] italic font-normal">Categoria</span>
                }</span>
            </td>

            <td className="px-2 text-[#537e7e] capitalize">{
                data.primary ? data.primary : <span className="text-[#7e9292] italic font-normal">Seccion</span>
            }</td>

            <td className="px-2 tabular-nums font-semibold text-[#023b3b]">${data.price.toLocaleString("es-AR")}</td>

            {
                product?.options.hasStockControl && type === "product"
                ? <StockBar currentStock={product!.stock!.currentStock} lowStock={product!.stock!.lowStockAlert} /> 
                : <td className="text-center">-</td>
            }

            {
                type === "product" ?
                    <td className="px-2">
                        <div className="flex gap-2 justify-end pr-4">
                            <IconButton icon="print" variant="D"  />
                            <IconButton onClick={openDetailsMenu} icon="ellipsis" variant="D"  />
                        </div>
                    </td>
                : <td className="px-2"></td>
            }
        </tr>
    )
}