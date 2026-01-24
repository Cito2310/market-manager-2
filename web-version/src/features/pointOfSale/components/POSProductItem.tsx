import { POSProduct } from "../../../../types/POSProduct"

interface props {
    POSProduct: POSProduct;
}

export const POSProductItem = ({ POSProduct }: props) => {
    const { product, quantity } = POSProduct;
    const productName = `${ product.info.brand } ${ product.info.name } ${ product.info.size }${ product.info.sizeType }`;

    return (
        <tr className=" [&>td]:py-2 text-[#023b3b] font-medium
        border-slate-400/50 even:bg-slate-50 hover:bg-slate-50 transition-colors">
            <td className="px-4 capitalize">{productName}</td>
            <td className="text-center">{quantity}</td>
            <td className="text-center">{product.info.price.toLocaleString("es-AR")}</td>
            <td className="text-center">{(product.info.price * quantity).toLocaleString("es-AR")}</td>
            <td className="text-center"><i className="fa-solid fa-xmark"></i></td>
        </tr>
    )
}