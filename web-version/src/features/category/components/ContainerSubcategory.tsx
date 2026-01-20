import { useSubcategory } from "../hooks/useSubcategory";
import { InputHeaderSubcategory } from "./ItemCategory/InputHeaderSubcategory";
import { InputItemBrand } from "./ItemCategory/InputItemBrand";

interface props {
    index: number;
    register: any;
    removeSubcategory: (index: number) => void;
    control: any;
}

export const ContainerSubcategory = ({ index, register, removeSubcategory, control }: props) => {
    const { field, registers } = useSubcategory(index, control, register);

    return (
        <div className="flex gap-4 w-full flex-wrap">
            <div className="flex flex-col flex-1 min-w-[500px] gap-4 border border-[#d5e0e0] rounded-md p-4">
                <InputHeaderSubcategory 
                    appendBrand={field.appendBrand} 
                    removeSubcategory={() => removeSubcategory(index)} 
                    register={registers.getRegisterName()} 
                    placeholder="Nombre de la Subcategoria"
                />

                <div className="h-auto flex flex-wrap gap-x-4 gap-y-2">
                    { field.fieldsBrand.map((brandField, brandIndex) => (
                        <InputItemBrand 
                            removeBrand={() => field.removeBrand(brandIndex)} 
                            key={brandField.id} 
                            register={registers.getRegisterBrand(brandIndex)} 
                            placeholder="Marca" 
                        />
                    )) }
                </div>
            </div>
        </div>
        
    )
}
