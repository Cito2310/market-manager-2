import { ItemFooter } from "./ItemCategory/ItemFooter";
import { SelectSection } from "./ItemCategory/SelectSection";
import { InputNameCategory } from "./ItemCategory/InputNameCategory";
import { IconButton } from "../../../components/IconButton";
import { useItemAddCategory } from "../hooks/useItemAddCategory";
import { ContainerSubcategory } from "./ContainerSubcategory";


interface props {
    onToggleCreatingMode: () => void;
}

export const ItemCategoryAdd = ({ onToggleCreatingMode }: props) => {
    const { register, getValues, name, primary, onSubmit, fields, appendSubcategory, removeSubcategory, control, messageError, status } = useItemAddCategory({onToggleCreatingMode});

    return <>
        <tr className={`border-[#7e9292]`}>
            { name ? <td className="px-4 py-4 font-medium">{name}</td> : <td className="px-4 py-4 font- text-[#7e9292] italic">Nueva Categoria</td> }
            <td className="font-medium mx-2 text-[#7e9292] capitalize">{primary}</td>
        </tr>

        <tr className="">
            <td colSpan={10}>
                <form onSubmit={onSubmit} style={{height:"auto"}} className={`
                    px-6 py-5 bg-white transition-base overflow-hidden flex flex-col shadow-md shadow-[#8f8f8f] rounded-b-md gap-4`}>

                        <div className="flex gap-4 items-center justify-between">
                            <div className="flex gap-4">
                                <InputNameCategory forHtml="name" autofocus register={ register("name") } placeholder="Nombre de la categoria" />

                                <SelectSection 
                                    forHtml="primary"
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

                        {
                            messageError && (
                                <div className="text-right w-full bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
                                    <strong className="font-bold">Error!</strong> {messageError}
                                </div>
                        )}

                        {/* CONTIENE LOS CONTAINES DE SUBCATEGORIAS */}
                        {
                            fields.map((field, index) => (
                                <ContainerSubcategory control={control} key={field.id} index={index} register={register} removeSubcategory={removeSubcategory} />
                            ))
                        }


                        <ItemFooter submitLabel="Guardar" cancelFunction={onToggleCreatingMode} hiddenButtonDelete={true} />

                </form>
            </td>
        </tr>
    </>
}