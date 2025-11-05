import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { useItemCategory } from "../hooks/useItemCategory";
import { InputNameCategory } from "./ItemCategory/InputNameCategory";
import { SelectSection } from "./ItemCategory/SelectSection";
import { Category } from "../../../../types/category/Category";
import { IconButton } from "../../../components/IconButton";
import { ContainerSubcategory } from "./ContainerSubcategory";
import { ItemFooter } from "./ItemCategory/ItemFooter";

interface props {
    category: Category;
    isOpen: boolean;
    setOpen: Dispatch<SetStateAction<string | null>>;
}


export const ItemCategory = ({ category, isOpen, setOpen }: props) => {
    const { 
        loading,
        height, toggleDetailsMenu,  
        subcategories, name, primary,
        getValues, register,
        onDeleteCategory, onEditCategory, 
        removeSubcategory, appendSubcategory, control, fields } = useItemCategory({ category, setOpen });

        useEffect(() => {
            if (typeof isOpen === "boolean") {
                if (isOpen && height === 0) toggleDetailsMenu();
                if (!isOpen && height !== 0) toggleDetailsMenu();
            }
            }, [isOpen]);


    return <>
        <tr className={`${ height ? null : "border-b" } border-[#7e9292]`}>
            <td className="px-4 py-4 font-medium capitalize">{name}</td>
            <td className="font-medium mx-2 text-[#7e9292] capitalize">{primary}</td>
            <td><IconButton onClick={toggleDetailsMenu} variant="D" icon="ellipsis" /></td>
        </tr>

        <tr className="">
            <td colSpan={10}>
                <form onSubmit={onEditCategory} style={{height}} className={`
                    ${height !== 0 ? "px-6 py-5" : ""}
                    bg-white transition-base overflow-hidden flex flex-col shadow-md shadow-[#8f8f8f] rounded-b-md gap-4`}>


                    <div className="flex gap-4 items-center justify-between">
                        <div className="flex gap-4">
                            <InputNameCategory forHtml={category._id} register={ register("name") } placeholder="Nombre de la categoria" />

                            <SelectSection 
                                forHtml={category._id + "-primary"}
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


                    <ItemFooter loading={loading} submitLabel="Guardar" cancelFunction={() => setOpen(null)} removeFunction={onDeleteCategory} />
                </form>
            </td>
        </tr>
    </>
}