import { useForm } from "react-hook-form"
import { InputSelect } from "./components/InputSelect"
import { ButtonTab } from "./components/ButtonTab"
import { InputSearch } from "./components/InputSearch"
import { ItemCategory } from "./components/ItemCategory"
import { ItemCategoryAdd } from "./components/ItemCategoryAdd"
import { useCategoryScreen } from "./hooks/useCategoryScreen"

export const CategoryScreen = () => {
    const { category, form, open } = useCategoryScreen();


    return (
        <div className="mt-8 p-2 px-10 font-[Montserrat]">
            
                <div className="flex w-full border-b-2 border-[#c4c4c4]">
                    <ButtonTab label="Productos" />
                    <ButtonTab label="Categorias" active />
                </div>



                <div className="flex items-center my-3 justify-between">

                    <div className="flex gap-3">
                        <InputSearch register={form.register("search")} placeholder="Buscar" />
                        <InputSelect name="primary" select={form.select} setSelect={form.setSelect} label="Seccion" options={["Alimentos", "Bebidas", "Producto de Limpieza"]} />
                    </div>

                    <button onClick={open.onToggleCreatingMode} disabled={open.isOpen === "create"} className="font-medium text-[#008080] disabled:pointer-events-none disabled:opacity-60 transition-base hover:brightness-90 active:brightness-[.50] cursor-pointer mr-2">
                        <i className="fa-solid fa-plus text-[0.8em]"/> Añadir Categoria
                    </button>
                </div>


                <table className="w-full rounded-lg">
                    <thead>
                        <tr>
                            <th className="p-4 text-left font-medium py-1.5 text-[#004C4C] bg-[#CDECEC] rounded-l-lg">
                                Nombre de la Categoria <i className="fa-solid fa-sort text-xs p-1"/>
                            </th>

                            <th className="text-left font-medium py-1.5 text-[#004C4C] bg-[#CDECEC] ">
                                Seccion <i className="fa-solid fa-sort text-xs p-1"/>
                            </th>

                            <th className="text-left font-medium py-1.5 text-[#004C4C] bg-[#CDECEC] rounded-r-lg"></th>
                        </tr>
                    </thead>

                    <tbody>
                        { open.isOpen === "create" && <ItemCategoryAdd onToggleCreatingMode={open.onToggleCreatingMode} /> }
                        {
                            category.data.map( category => (
                                <ItemCategory key={category._id} category={category} isOpen={open.isOpen === category._id} setOpen={open.setOpen} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
    )
}