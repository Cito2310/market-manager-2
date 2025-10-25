interface props {
    productName: string;
    unit: number;
    priceUnit: string;
    priceTotal: string;
}

export const ListItemPOS = ({ priceTotal, priceUnit, productName, unit }: props) => {
    return (
        <tr className="border-b border-[#7e9292]">
            <td className="py-2 px-4">{productName}</td>
            <td className="py-2 text-center">{unit}</td>
            <td className="py-2 text-center">{priceUnit}</td>
            <td className="py-2 text-center">{priceTotal}</td>
            <td className="py-2 text-center"><i className="fa-solid fa-xmark"></i></td>
        </tr>
    )
}
