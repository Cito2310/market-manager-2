import { useEffect, useRef, useState } from "react";
import { useItemCategory } from "../hooks/useItemCategory";
import { InputNameCategory } from "./ItemCategory/InputNameCategory";
import { SelectSection } from "./ItemCategory/SelectSection";
import { Category } from "../../../../types/category/Category";
import { IconButton } from "./ItemCategory/IconButton";
import { ContainerSubcategory } from "./ContainerSubcategory";
import { ItemFooter } from "./ItemCategory/ItemFooter";

interface props {
    category: Category;
}


export const ListItemCategory = ({ category }: props) => {
    const { 
        height, toggleDetailsMenu, 
        subcategories, name, primary,
        getValues, register,
        onSubmit, 
        removeSubcategory, appendSubcategory, control, fields } = useItemCategory({ category });

    return <>
        <tr className={`${ height ? null : "border-b" } border-[#7e9292]`}>
            <td className="px-4 py-4 font-medium">{name}</td>
            <td className="font-medium mx-2 text-[#7e9292]">{primary}</td>
            <td>
                <button 
                onClick={toggleDetailsMenu}
                className="
                rounded-full bg-[#f7f7f7] flex aspect-square p-3 justify-center
                hover:shadow hover:brightness-90 transition-base
                "><i className="fa-solid fa-ellipsis"></i></button>
            </td>
        </tr>

        <tr className="">
            <td colSpan={10}>
                <div style={{height}} className={`
                    ${height !== 0 ? "px-6 py-5" : ""}
                    bg-white transition-base overflow-hidden flex flex-col shadow-md shadow-[#8f8f8f] rounded-b-md gap-4`}>


                    <div className="flex gap-4 items-center justify-between">
                        <div className="flex gap-4">
                            <InputNameCategory register={ register("name") } placeholder="Nombre de la categoria" />

                            <SelectSection 
                                label="Sección"
                                register={ register("primary") }
                                defaultValue={ getValues("primary")}
                                options={[
                                    {value: "alimentos", label: "Alimentos"},
                                    {value: "higiene personal", label: "Higiene Personal"},
                                    {value: "bebidas", label: "Bebidas"},
                                    {value: "verduleria", label: "Verduleria"},
                                ]}
                            />
                        </div>

                        <IconButton onClick={ appendSubcategory } variant="A" icon="plus" />
                    </div>



                    {/* CONTIENE LOS CONTAINES DE SUBCATEGORIAS */}
                    {
                        fields.map((field, index) => (
                            <ContainerSubcategory control={control} key={field.id} index={index} register={register} removeSubcategory={removeSubcategory} />
                        ))
                    }


                    <ItemFooter submitLabel="Guardar" cancelFunction={onSubmit} removeFunction={onSubmit} />
                </div>
            </td>
        </tr>
    </>
}