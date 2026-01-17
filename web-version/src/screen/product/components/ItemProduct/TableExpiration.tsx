import { IconButton } from "../../../../components/IconButton"
import { v4 as uuidv4 } from 'uuid';

interface props {
    mode: "add" | "edit",
    register: any,
    controls: {
        append: () => void,
        remove: (index: number) => void,
        fields: { expirationDate: string, quantity: number, addedAt: string }[]
    }
}

export const TableExpiration = ({ mode, controls, register }: props) => {
    return (
        <table className="bg-white text-[#023b3b] border-b-2 border-[#d5e0e0] px-3 py-2 rounded-md ">
            <thead>
                <tr className="border-b border-b-[#00000012]">
                    <th className="px-2 py-2 font-medium text-[#023b3b]">Fecha de Vencimiento</th>
                    <th className="px-2 py-2 font-medium text-[#023b3b]">Cantidad</th>
                    <th className="w-10"><IconButton onClick={controls.append} icon="plus" variant="A" className="w-full rounded-l-none rounded-b-none"/></th>
                </tr>
            </thead>
            <tbody>
                    {
                        controls.fields.map((field, index) => (
                            <tr key={uuidv4()} className="border-b border-b-[#00000012]">
                                <td className="py-2">
                                    <input 
                                        type="date" 
                                        {...register(`expiration.batches.${index}.expirationDate`)}
                                        className={`
                                            mx-auto px-4 block rounded-md text-center no-spin py-1 
                                            border-b-2 border-white outline-none 
                                            transition-base focus:border-[#008080]`
                                    }/>
                                </td>

                                <td>
                                    <input 
                                        min={0}
                                        type="number"
                                        placeholder="Cantidad"
                                        {...register(`expiration.batches.${index}.quantity`)}
                                        className={`
                                            mx-auto px-4 block rounded-md text-center no-spin py-1
                                            border-b-2 border-white outline-none transition-base focus:border-[#008080]`
                                    }/>
                                </td>

                                <td>
                                    <IconButton onClick={()=>controls.remove(index)} disabled={controls.fields.length === 1} icon="trash" variant="C" className="shadow-none"/>
                                </td>
                            </tr>
                    ))}
            </tbody>
        </table>
    )
}