interface props {
    productName: string;
    unit: number;
    priceUnit: string;
    priceTotal: string;
}

export const ItemProductPos = ({ priceTotal, priceUnit, productName, unit }: props) => {
    return (
        <tr className="border-b border-[#7e9292] [&>td]:py-2">
            <td className="px-4">{productName}</td>
            <td className="text-center">{unit}</td>
            <td className="text-center">{priceUnit}</td>
            <td className="text-center">{priceTotal}</td>
            <td className="text-center"><i className="fa-solid fa-xmark"></i></td>
        </tr>
    )
}
