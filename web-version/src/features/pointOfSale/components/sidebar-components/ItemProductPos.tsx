interface props {
    productName: string;
    unit: number;
    priceUnit: string;
    priceTotal: string;
}

export const ItemProductPos = ({ priceTotal, priceUnit, productName, unit }: props) => {
    return (
        <tr className=" [&>td]:py-2 text-[#023b3b] font-medium
        border-slate-400/50 even:bg-slate-50 hover:bg-slate-50 transition-colors">
            <td className="px-4">{productName}</td>
            <td className="text-center">{unit}</td>
            <td className="text-center">{priceUnit}</td>
            <td className="text-center">{priceTotal}</td>
            <td className="text-center"><i className="fa-solid fa-xmark"></i></td>
        </tr>
    )
}
