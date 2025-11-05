import { Dispatch, SetStateAction } from "react";
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
    const { data, detailsMenu, field, form } = useItemCategory({ category, setOpen, isOpen });


    return <>
        <tr className={`${ detailsMenu.height ? null : "border-b" } border-[#7e9292]`}>
            <td className="px-4 py-4 font-medium capitalize">{data.name}</td>
            <td className="font-medium mx-2 text-[#7e9292] capitalize">{data.primary}</td>
            <td><IconButton onClick={detailsMenu.toggleDetailsMenu} variant="D" icon="ellipsis" /></td>
        </tr>

        <tr className="">
            <td colSpan={10}>
                <form onSubmit={form.onEditCategory} style={{height: detailsMenu.height}} className={`
                    ${detailsMenu.height !== 0 ? "px-6 py-5" : ""}
                    bg-white transition-base overflow-hidden flex flex-col shadow-md shadow-[#8f8f8f] rounded-b-md gap-4`}>


                    <div className="flex gap-4 items-center justify-between">
                        <div className="flex gap-4">
                            <InputNameCategory forHtml={category._id} register={ form.register("name") } placeholder="Nombre de la categoria" />

                            <SelectSection 
                                forHtml={category._id + "-primary"}
                                label="Sección"
                                register={ form.register("primary") }
                                defaultValue={ form.getValues("primary")}
                                options={[
                                    {value: "alimentos", label: "Alimentos"},
                                    {value: "higiene personal", label: "Higiene Personal"},
                                    {value: "bebidas", label: "Bebidas"},
                                    {value: "verduleria", label: "Verduleria"},
                                ]}
                            />
                        </div>

                        <IconButton onClick={ field.appendSubcategory } variant="A" icon="plus" />
                    </div>



                    {/* CONTIENE LOS CONTAINES DE SUBCATEGORIAS */}
                    {
                        field.fields.map((fieldChildren, index) => (
                            <ContainerSubcategory 
                                control={field.control} 
                                key={fieldChildren.id} 
                                index={index} 
                                register={form.register} 
                                removeSubcategory={field.removeSubcategory} />
                        ))
                    }


                    <ItemFooter 
                        loading={data.status.isLoading} 
                        submitLabel="Guardar" 
                        cancelFunction={() => setOpen(null)} 
                        removeFunction={form.onDeleteCategory} />
                </form>
            </td>
        </tr>
    </>
}