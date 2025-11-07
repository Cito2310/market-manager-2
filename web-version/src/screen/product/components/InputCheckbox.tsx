interface props {
    label: string;
}

export const InputCheckbox = ({ label }: props) => {
    return (
        <label className="flex-1 cursor-pointer">
            <div className="flex items-center gap-3 bg-white rounded-md shadow px-4 py-3 hover:bg-[#eafbe7] transition border-2 border-transparent hover:border-[#008080]">
                <input
                    type="checkbox"
                    className="accent-[#008080] w-5 h-5"
                />
                <i className="fa-solid fa-boxes-stacked text-2xl text-[#008080]" />
                <span className="font-medium text-[#3d4646]">{label}</span>
            </div>
        </label>
    )
}