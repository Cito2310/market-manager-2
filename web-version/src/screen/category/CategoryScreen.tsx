import { useForm } from "react-hook-form"
import { ButtonFilter } from "./components/ButtonFilter"
import { ButtonTab } from "./components/ButtonTab"
import { InputSearch } from "./components/InputSearch"
import { ListItemCategory } from "./components/ListItemCategory"
import { ItemCategoryAdd } from "./components/ItemCategoryAdd"
import { useCategoryScreen } from "./hooks/useCategoryScreen"

export const CategoryScreen = () => {
    const { register } = useForm();
    const { data, messageError, status, wasCalledOnce } = useCategoryScreen();


    return (
        <div className="mt-8 p-2 px-10 font-[Montserrat]">
                <div className="flex w-full border-b-2 border-[#c4c4c4]">
                    <ButtonTab label="Productos" />
                    <ButtonTab label="Categorias" active />
                </div>



                <div className="flex items-center my-3 justify-between">

                    <div className="flex gap-3">
                        <InputSearch register={register} placeholder="Buscar" />
                        <ButtonFilter label="Seccion" options={["Alimentos", "Bebidas", "Producto de Limpieza"]} />
                    </div>

                    <p className="font-medium text-[#008080] transition-base hover:brightness-90 active:brightness-[.80] cursor-pointer mr-2"><i className="fa-solid fa-plus text-[0.8em]"/> Añadir Categoria</p>
                </div>


                <table className="w-full rounded-lg">
                    <tr className="">

                        <th className="p-4 text-left font-medium py-1.5 text-[#004C4C] bg-[#CDECEC] rounded-l-lg">
                            Nombre de la Categoria <i className="fa-solid fa-sort text-xs p-1"/>
                        </th>

                        <th className="text-left font-medium py-1.5 text-[#004C4C] bg-[#CDECEC] ">
                            Seccion <i className="fa-solid fa-sort text-xs p-1"/>
                        </th>

                        <th className="text-left font-medium py-1.5 text-[#004C4C] bg-[#CDECEC] rounded-r-lg"></th>
                    </tr>

                    <ItemCategoryAdd />
                    {
                        data.map( category => (
                            <ListItemCategory key={category._id} category={category} />
                        ))
                    }
                    {/* <ListItemCategory name="Aceite" section="Alimentos" subcategories={[{name: "Aceite de Girasol", brands: ["Marolio", "Cañuelas", "Natura", "Legitimo"]}, {name: "Aceite de Oliva", brands: ["Natura", "Cañuelas"]}]} /> */}
                    {/* <ListItemCategory name="Alcohol" section="Bebidas" subcategories={[{name: "Vino Tinto", brands: ["Termidor", "Toro", "Viñas de Balbo"]}, { name: "Fernet", brands:["Vittone", "Branca"] }]} /> */}
                </table>
            </div>
    )
}