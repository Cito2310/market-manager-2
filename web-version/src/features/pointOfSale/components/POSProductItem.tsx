import { useForm } from "react-hook-form";
import { POSProduct } from "../../../../types/POSProduct"
import { useEffect } from "react";
import { useAppDispatch } from "../../../../store/store";
import { changeQuantity } from "../../../../store/pointOfSale/pointOfSaleSlice";

interface props {
    POSProduct: POSProduct;
    deletePOSProduct: ( id: string ) => void;
}

export const POSProductItem = ({ POSProduct, deletePOSProduct }: props) => {
    const { product, quantity } = POSProduct;
    const productName = `${ product.info.brand } ${ product.info.name } ${ product.info.size }${ product.info.sizeType }`;

    const dispatch = useAppDispatch();
    const { watch, reset, register, getValues } = useForm({ defaultValues: { quantity: quantity } });
    useEffect(() => { reset({ quantity }) }, [quantity]);
    useEffect(() => { dispatch( changeQuantity({ productId: product._id, quantity: getValues("quantity") }) ) }, [watch("quantity")]);

    return (
        <tr className=" [&>td]:py-2 text-[#023b3b] font-medium
        border-slate-400/50 even:bg-slate-50 hover:bg-slate-50 transition-colors">
            <td className="px-4 capitalize">{productName}</td>
            <td><input className="outline-none text-center" {...register("quantity")}></input></td>
            <td className="text-center">{product.info.price.toLocaleString("es-AR")}</td>
            <td className="text-center">{(product.info.price * quantity).toLocaleString("es-AR")}</td>
            <td 
                onClick={() => deletePOSProduct(POSProduct.product._id)}
                className="
                    text-center cursor-pointer 
                    hover:bg-slate-100 active:brightness-[.94] transition-base
                ">
                <i className="fa-solid fa-xmark"/>
            </td>
        </tr>
    )
}