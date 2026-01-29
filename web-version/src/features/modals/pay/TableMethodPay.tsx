import { UseFormRegister } from "react-hook-form";
import { ItemMethodPay } from "./ItemMethodPay";

interface props {
    removeField: (index: number) => void;
    appendField: any;
    fields: any[];
    register: UseFormRegister<any>;
}

export const TableMethodPay = ({ removeField, appendField, fields, register }: props) => {
    return (
        <div className="flex flex-col gap-3">
            {
                fields.map((field, index) => (
                    <ItemMethodPay register={ register } key={field.id} fieldIndex={ fields.length } index={index} removeField={removeField} />
                ))
            }

            <button onClick={() => { appendField({ method: "transference-raul", quantity: "0" }) }} className="
                p-2 bg-white rounded-md shadow-sm border-b-2 border-[#d5e0e0]
                hover:brightness-[.97] active:brightness-[.94] transition-base cursor-pointer
            ">
                <i className="fa-solid fa-plus mr-2"/>
                Agregar Metodo de Pago
            </button>
        </div>
    )
}