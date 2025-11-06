import { Product } from "../../../../types/product/Product"
import { IconButton } from "../../../components/IconButton";
import { StockBar } from "./StockBar";

interface props {
    product: Product;
    height: number
}

export const ItemProduct = ({ product, height }: props) => {
    return <>
        <tr className={`${ height ? null : "border-b" } border-slate-400/50 even:bg-slate-50/40 hover:bg-slate-50 transition-colors`}>
                <td className="px-4 py-4 font-medium text-[#023b3b]">
                    {product.info.brand} {product.info.name} 
                    <span className="text-[#537e7e]"> {product.info.size}{product.info.sizeType}</span>
                </td>

                <td className="px-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#e4f0f0] text-[#023b3b]">
                        {product.info.category}
                    </span>
                </td>

                <td className="px-2 text-[#537e7e] capitalize">{product.info.primary}</td>
                <td className="px-2 text-[#537e7e] capitalize">{product.info.location}</td>
                
                <td className="px-2 tabular-nums font-semibold text-[#023b3b]">${product.info.price.toLocaleString("es-AR")}</td>
                
                
                { product.stock ? <StockBar currentStock={product.stock.currentStock} lowStock={product.stock.lowStockAlert} /> : null }
                
                <td className="px-2">
                    <div className="flex gap-2 justify-end pr-4">
                        <IconButton icon="print" variant="D"  />
                        <IconButton icon="ellipsis" variant="D"  />
                    </div>
                </td>
        </tr>
    </>
}