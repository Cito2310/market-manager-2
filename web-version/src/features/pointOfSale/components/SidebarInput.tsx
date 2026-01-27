interface props {
    label: string;
    value: string;
    onChange: (value: string) => void;
    width?: string
}

export const SidebarInput = ({ label, value, onChange, width }: props) => {
    return (
        <div className={`flex flex-col ${width || "w-full"}`}>
            <label className="font-medium px-1">{label}</label>
            <input 
                onChange={(e) => onChange(e.target.value)} 
                className="border-b-2 w-full border-[#d5e0e0] px-1 pt-1 outline-none focus:border-[#7e9292] transition-base" 
                value={value}
            />
        </div>
    )
}