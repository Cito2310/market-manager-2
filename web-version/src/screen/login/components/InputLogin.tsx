interface props {
    label: string;
    type: "password" | "text"; 
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    name: string;
    placeholder?: string;
}

export const InputLogin = ({ label, name, onChange, type, value, error, placeholder }: props) => {
    return (
        <div>
                <label className="ml-1 cursor-pointer" htmlFor={name}>
                    {label}
                </label>

                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    className="w-full rounded-md border border-slate-200 px-3 py-2 transition-base focus:outline-none focus:border-[#7e9292]"
                    placeholder={placeholder}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${name}-error` : undefined}
                />
                    {error && (
                        <p id={`${name}-error`} className="mt-1 text-xs text-red-600">
                            {error}
                        </p>
                    )}
            </div>
    )
}