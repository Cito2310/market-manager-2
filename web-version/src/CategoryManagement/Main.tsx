import { Topbar } from "../POScreen/components/Topbar"
import { ButtonFilter } from "../ProductManagement/components/ButtonFilter"
import { ListItemCategory } from "./components/ListItemCategory"

export const CategoryManagement = () => {
    return (
        <div className="font-[Montserrat]">
            <Topbar/>

            <div className="mt-8 p-2 px-10">
                {/* <h1 className="font-extrabold text-3xl italic drop-shadow">Inventario</h1> */}
                <div className="flex w-full border-b-2">
                    <button className="font-medium px-2 py-2">Productos</button>
                    <span className="border-l h-3.5 my-auto border-[#c4c4c4] mx-3"></span>
                    <button className="font-medium px-2 py-2 relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#008080] after:transition-colors after:duration-300">Categorias</button>
                </div>
                <div className="flex items-center my-3 justify-between">
                    <div className="flex gap-3">
                        <input className="border rounded-md py-0.5 shadow shadow-[#747474]" />
                        <ButtonFilter label="Seccion" options={["Alimentos", "Bebidas", "Producto de Limpieza"]} />
                    </div>

                    <p className="font-medium text-[#008080] transition-base hover:brightness-90 active:brightness-[.80] cursor-pointer mr-2"><i className="fa-solid fa-plus text-[0.8em]"/> Añadir Categoria</p>
                </div>

                <table className="w-full rounded-lg">
                    <tr className="">

                        <th className="p-4 text-left font-medium py-1.5 text-[#93aaaa] bg-[#d5e0e0] rounded-l-lg">
                            Nombre de la Categoria <i className="fa-solid fa-sort text-xs p-1"/>
                        </th>

                        <th className="text-left font-medium py-1.5 text-[#93aaaa] bg-[#d5e0e0] ">
                            Seccion <i className="fa-solid fa-sort text-xs p-1"/>
                        </th>

                        <th className="text-left font-medium py-1.5 text-[#93aaaa] bg-[#d5e0e0] rounded-r-lg"></th>
                    </tr>

                    <ListItemCategory name="Aceite" section="Alimentos" subcategories={[{name: "Aceite de Girasol", brands: ["Marolio", "Cañuelas", "Natura", "Legitimo"]}, {name: "Aceite de Oliva", brands: ["Natura", "Cañuelas"]}]} />
                    <ListItemCategory name="Alcohol" section="Bebidas" subcategories={[{name: "Vino Tinto", brands: ["Termidor", "Toro", "Viñas de Balbo"]}, { name: "Fernet", brands:["Vittone", "Branca"] }]} />
                </table>
            </div>
        </div>
    )
}