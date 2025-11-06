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
                            <InputNameCategory forHtml={category._id} register={ form.registerName } placeholder="Nombre de la categoria" />

                            <SelectSection 
                                forHtml={category._id + "-primary"}
                                label="Sección"
                                register={ form.registerPrimary }
                                defaultValue={ form.getValues("primary") }
                                options={[

                                    {value: "almacen", label: "Almacén"},
                                    {value: "limpieza", label: "Limpieza"},
                                    {value: "perfumeria", label: "Perfumería"},
                                    {value: "lacteos", label: "Lácteos"},
                                    {value: "bebidas", label: "Bebidas"},
                                    {value: "congelados", label: "Congelados"},
                                    {value: "bazar", label: "Bazar"},
                                    {value: "polleria", label: "Pollería"},
                                    {value: "fiambreria", label: "Fiambrería"},
                                    {value: "panaderia", label: "Panadería"},
                                    {value: "carniceria", label: "Carnicería"},
                                    {value: "verduleria", label: "Verdulería"},
                                    {value: "otros", label: "Otros"},
                                ]}
                            />
                        </div>

                        <IconButton onClick={ field.appendSubcategory } variant="A" icon="plus" />
                    </div>

                    {
                        data.messageError && (
                            <div className="text-right w-full bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
                                <strong className="font-bold">Error!</strong> {data.messageError}
                            </div>
                    )}

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