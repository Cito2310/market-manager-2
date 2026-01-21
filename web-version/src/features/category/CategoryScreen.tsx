import { InputSelect } from "./components/InputSelect"
import { ButtonTab } from "./components/ButtonTab"
import { ItemCategory } from "./components/ItemCategory"
import { ItemCategoryAdd } from "./components/ItemCategoryAdd"
import { useCategoryScreen } from "./hooks/useCategoryScreen"
import { InputSearch } from "../../components/InputSeach"
import { OptionsPrimary } from "../../utils/OptionsPrimary"
import { Pagination } from "../../components/Pagination"


export const CategoryScreen = () => {
    const { category, open, sort, search, select, paginate } = useCategoryScreen();

    return (
        <div className="mt-8 p-2 px-10 font-[Montserrat]">
            
                <div className="flex w-full border-b-2 border-[#c4c4c4]">
                    <ButtonTab label="Productos" />
                    <ButtonTab label="Categorias" active />
                </div>



                <div className="flex my-3 justify-between">

                    <div className="flex gap-3">
                        <InputSearch onSearch={search.onSearchSubmit} register={search.registerSearch("search")}  placeholder="Buscar" />
                        <InputSelect 
                            registerReturn={select.registerSelect("primary")} optionSelected={!!select.selectedPrimary} 
                            label="Seccion" options={ OptionsPrimary }
                        />
                    </div>

                    <div className="flex gap-3">
                        <Pagination pagination={paginate} />
                        <button onClick={open.onToggleCreatingMode} disabled={open.isOpen === "create"} className="font-medium text-[#008080] disabled:pointer-events-none disabled:opacity-60 transition-base hover:brightness-90 active:brightness-[.50] cursor-pointer mr-2">
                            <i className="fa-solid fa-plus text-[0.8em]"/> Añadir Categoria
                        </button>
                    </div>

                </div>


                <table className="w-full rounded-lg">
                    <thead>
                        <tr>
                            <th className="p-4 text-left font-medium py-1.5 text-[#004C4C] bg-[#CDECEC] rounded-l-lg">
                                <button className={`hover:brightness-50 cursor-pointer transition-base ${sort.sortSelected?.[0] === "name" ? "font-medium" : "font-normal"}`} onClick={()=>sort.toggleSortSelected("name")}>
                                    Nombre de la Categoria
                                    {
                                    sort.sortSelected?.[0] === "name" ? 
                                        (sort.sortSelected[1] === "asc" 
                                            ? <i className="pl-3 fa-solid fa-sort-up text-xs p-1"/> : // Se activa al estar seleccionado y es ascendente
                                            <i className="pl-3 fa-solid fa-sort-down text-xs p-1"/> // Se activa al estar seleccionado y es descendente
                                        ) : <i className="pl-3 fa-solid fa-sort text-xs p-1"/> // Se activa al no estar seleccionado
                                    }
                                </button>
                            </th>

                            <th className="text-left font-medium py-1.5 text-[#004C4C] bg-[#CDECEC] ">
                                <button className={`hover:brightness-50 cursor-pointer transition-base ${sort.sortSelected?.[0] === "primary" ? "font-medium" : "font-normal"}`} onClick={()=>sort.toggleSortSelected("primary")}>
                                    Sección
                                    {
                                    sort.sortSelected?.[0] === "primary" ? 
                                        (sort.sortSelected[1] === "asc" 
                                            ? <i className="pl-3 fa-solid fa-sort-up text-xs p-1"/> : // Se activa al estar seleccionado y es ascendente
                                            <i className="pl-3 fa-solid fa-sort-down text-xs p-1"/> // Se activa al estar seleccionado y es descendente
                                        ) : <i className="pl-3 fa-solid fa-sort text-xs p-1"/> // Se activa al no estar seleccionado
                                    }
                                </button>
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