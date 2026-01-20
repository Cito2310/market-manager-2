import { ItemFooter } from "./ItemCategory/ItemFooter";
import { SelectSection } from "./ItemCategory/SelectSection";
import { InputNameCategory } from "./ItemCategory/InputNameCategory";
import { IconButton } from "../../../components/IconButton";
import { useItemAddCategory } from "../hooks/useItemAddCategory";
import { ContainerSubcategory } from "./ContainerSubcategory";
import { OptionsPrimary } from "../../../utils/OptionsPrimary";


interface props {
    onToggleCreatingMode: () => void;
}

export const ItemCategoryAdd = ({ onToggleCreatingMode }: props) => {
    const { data, field, form } = useItemAddCategory({onToggleCreatingMode});

    return <>
        <tr className={`border-[#7e9292]`}>
            { data.name ? <td className="px-4 py-4 font-medium">{data.name}</td> : <td className="px-4 py-4 font- text-[#7e9292] italic">Nueva Categoria</td> }
            <td className="font-medium mx-2 text-[#7e9292] capitalize">{data.primary}</td>
        </tr>

        <tr className="">
            <td colSpan={10}>
                <form onSubmit={form.onCreateCategory} style={{height:"auto"}} className={`
                    px-6 py-5 bg-white transition-base overflow-hidden flex flex-col shadow-md shadow-[#8f8f8f] rounded-b-md gap-4`}>

                        <div className="flex gap-4 items-center justify-between">
                            <div className="flex gap-4">
                                <InputNameCategory forHtml="name" autofocus register={ form.registerName } placeholder="Nombre de la categoria" />

                                <SelectSection 
                                    forHtml="primary"
                                    label="Sección"
                                    register={ form.registerPrimary }
                                    defaultValue={ form.getValues("primary")}
                                    options={ OptionsPrimary }
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
                            field.fields.map((fieldChild, index) => (
                                <ContainerSubcategory control={field.control} key={fieldChild.id} index={index} register={form.register} removeSubcategory={field.removeSubcategory} />
                            ))
                        }


                        <ItemFooter loading={data.status.isLoading} submitLabel="Guardar" cancelFunction={onToggleCreatingMode} hiddenButtonDelete={true} />

                </form>
            </td>
        </tr>
    </>
}