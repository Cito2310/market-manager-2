export const POSTableHeadItem = ({ label, width, className }: {label: string, width?: string, className?: string}) => <th
    className={`py-1.5 text-[#004C4C] bg-[#CDECEC] font-normal ${className}`}
    style={{ width }}
>
    { label }
</th>