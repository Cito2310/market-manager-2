interface props {
    label: string;
    type: "text" | "select" | "number" | "size" | "date";
    prefix?: string;
    subfix?: string;
    padding?: number;
}

export const InputProduct = ({ label, type, prefix, subfix, padding }: props) => {
    const base = "bg-white text-[#023b3b] font-normal border-b-2 border-[#d5e0e0] px-3 py-2 rounded-md outline-none focus:border-[#008080] transition-base";

    const baseSize = "w-full bg-white text-[#023b3b] font-normal border-b-2 border-[#d5e0e0] rounded-l-md outline-none focus:border-[#008080] transition-base px py-2 text-right";
    const baseSizeSelect = "bg-white text-[#023b3b] font-normal h-full border-b-2 border-[#d5e0e0] py-[6px] outline-none rounded-r-md focus:border-[#7e9292] transition-base";

    if (type === "text") return (
        <label className="font-medium px-1 flex flex-col w-full text-[#537e7e]">&nbsp;&nbsp;{label}
            <input
                onChange={() => { }}
                value={"Aceite de Girasol"}
                className={base}
            />
        </label>
    )


    if (type === "select") return (
        <label className="font-medium px-1 flex flex-col w-full text-[#537e7e]">&nbsp;&nbsp;{label}
            <select
                id="select-ejemplo"
                className={base}
                defaultValue="debit"
            >
                <option value="" disabled>{label}</option>
                <option value="cash">Efectivo</option>
                <option value="credit">Credito</option>
                <option value="qr">QR</option>
                <option value="transference">Transferencia</option>
            </select>
        </label>
    )


    if (type === "number") return (
        <label className="font-medium px-1 flex flex-col w-full text-[#537e7e]">&nbsp;&nbsp;{label}
            <div className="relative h-full flex items-center grow">
                {prefix && <span className="absolute left-3 text-[#7e9292] text-lg select-none">{prefix}</span>}
                <input
                    style={{paddingLeft: prefix && `${padding}rem`, paddingRight: subfix && `${padding}rem`}}
                    className={base + " w-full"}
                    type="number"
                    min={0}
                    placeholder="0"
                    value={"20000"}
                />
                {subfix && <span className="font-normal absolute right-8 text-[#7e9292] text-lg select-none">{subfix}</span>}
            </div>
        </label>
    )


    if (type === "size") return (
        <label className="font-medium px-1 flex flex-col w-full text-[#537e7e]">&nbsp;&nbsp;{label}
            <div className="flex w-full">
                <input onChange={()=>{}} style={{borderLeftWidth: "none"}} className={baseSize} value={"100"}/>
                <select defaultValue={"g"} className={baseSizeSelect}>
                    <option value={"g"}>g</option>
                    <option value={"kg"}>kg</option>
                    <option value={"l"}>l</option>
                    <option value={"u"}>u</option>
                </select>
            </div>
        </label>
    )


    if (type === "date") return (
        <label className="font-medium px-1 flex flex-col w-full text-[#537e7e]">&nbsp;&nbsp;{label}
            <input
                onChange={() => { }}
                value={"2024-12-31"}
                className={base}
                type="date"
            />
        </label>
    )
}