interface props {
    removeField: (index: number) => void;
    register: any;
    fieldIndex: number;
    index: number;
    options: { value: string; label: string }[]
}

export const ItemMethodPay = ({ removeField, fieldIndex, index, register, options }: props) => {
    return (
        <div className="flex gap-2">
            <button disabled={ fieldIndex === 1 } onClick={() => removeField(index)} className="
                p-1.5 bg-white aspect-square rounded-md shadow-sm border-b-2 border-[#d5e0e0] text-xl
                hover:brightness-[.97] active:brightness-[.94] transition-base cursor-pointer
                disabled:cursor-default disabled:opacity-50 disabled:pointer-events-none
            ">
                <i className="fa-solid fa-xmark" />
            </button>

            <select {...register(`payMethods.${index}.method`)} className="
                p-1.5 bg-white rounded-md shadow-sm border-b-2 border-[#d5e0e0] outline-none
                hover:brightness-[.97] active:brightness-[.94] transition-base cursor-pointer
            ">
                { options.map( option => <option value={option.value} key={option.value} >{option.label}</option> ) }
            </select>

            <div className="relative h-full flex items-center grow">
                <span className="absolute left-3 text-[#7e9292] text-lg select-none">$</span>
                <input
                    className="pl-7 h-full grow border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base text-left"
                    type="number"
                    min={0}
                    placeholder="0"
                    {...register(`payMethods.${index}.quantity`)}
                />
            </div>
        </div>
    )
}