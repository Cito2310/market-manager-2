import { Topbar } from "../POScreen/components/Topbar"
import { ButtonFilter } from "./components/ButtonFilter"
import { ListItemProduct } from "./components/ListItemProduct"

export const ProductManagement = () => {
    return (
        <div className="font-[Montserrat]">
            <Topbar />

            <div className="mt-8 p-2 px-10">
                {/* <h1 className="font-extrabold text-3xl italic drop-shadow">Inventario</h1> */}
                <div className="flex w-full border-b-2">
                    <button className="font-medium px-2 py-2 relative after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#008080] after:transition-colors after:duration-300">Productos</button>
                    <span className="border-l h-3.5 my-auto border-[#c4c4c4] mx-3"></span>
                    <button className="font-medium px-2 py-2 ">Categorias</button>
                </div>
                <div className="flex gap-3 my-5">
                    <input className="border rounded-md py-1 shadow shadow-[#747474]" />
                    <ButtonFilter label="Seccion" options={["Alimentos", "Bebidas", "Producto de Limpieza"]} />

                    <button className="border rounded-md py-1 px-4 shadow shadow-[#747474] flex gap-1 items-center">Ubicación <i className="fa-solid fa-angle-down text-sm"></i></button>
                    <button className="border rounded-md py-1 px-4 shadow shadow-[#747474] flex gap-1 items-center">Nivel de Stock <i className="fa-solid fa-angle-down text-sm"></i></button>
                    <button className="border rounded-md py-1 px-4 shadow shadow-[#747474] flex gap-1 items-center">Vencimiento <i className="fa-solid fa-angle-down text-sm"></i></button>
                </div>

                <table className="w-full rounded-lg">
                    <thead>
                        <tr className="">

                            <th className="p-4 text-left font-medium py-1.5 text-[#93aaaa] bg-[#d5e0e0] rounded-l-lg">
                                Nombre del Producto <i className="fa-solid fa-sort text-xs p-1"/>
                            </th>

                            <th className="text-left font-medium py-1.5 text-[#93aaaa] bg-[#d5e0e0] ">
                                Categoria <i className="fa-solid fa-sort text-xs p-1"/>
                            </th>

                            <th className="text-left font-medium py-1.5 text-[#93aaaa] bg-[#d5e0e0] ">
                                Seccion <i className="fa-solid fa-sort text-xs p-1"/>
                            </th>

                            <th className="text-left font-medium py-1.5 text-[#93aaaa] bg-[#d5e0e0] ">
                                Localización <i className="fa-solid fa-sort text-xs p-1"/>
                            </th>

                            <th className="text-left font-medium py-1.5 text-[#93aaaa] bg-[#d5e0e0] ">
                                Precio <i className="fa-solid fa-sort text-xs p-1"/>
                            </th>

                            <th className="text-left font-medium py-1.5 text-[#93aaaa] bg-[#d5e0e0] ">
                                Stock <i className="fa-solid fa-sort text-xs p-1"/>
                            </th>

                            <th className="text-left font-medium py-1.5 text-[#93aaaa] bg-[#d5e0e0] rounded-r-lg"></th>
                        </tr>
                    </thead>

                    <tbody>
                        <ListItemProduct location="Estante 1" name="Cañuelas Aceite de girasol" section="Alimento"  category="Aceite" price={2300} stock={[35, 10]}  />
                        <ListItemProduct location="Estante 1" name="Marolio Aceite de girasol" section="Alimento"  category="Aceite" price={2200} stock={[2, 10]}  />
                        <ListItemProduct location="Estante 1" name="Natura Aceite de girasol" section="Alimento"  category="Aceite" price={2800} stock={[0, 10]}  />
                        <ListItemProduct location="Heladera 1" name="Cabalgata Gaseosa Cola" section="Bebidas"  category="Gaseosa" price={1700} stock={[10, 6]}  />
                        <ListItemProduct location="Heladera 1" name="Cabalgata Gaseosa Naranja" section="Bebidas"  category="Gaseosa" price={1700} stock={[12, 6]}  />
                        <ListItemProduct location="Heladera 1" name="Cabalgata Gaseosa Lima" section="Bebidas"  category="Gaseosa" price={1700} stock={[5, 6]}  />
                        <ListItemProduct location="Heladera 2" name="Coca Cola Gaseosa Cola" section="Bebidas"  category="Gaseosa" price={3300} stock={[12, 6]}  />
                    </tbody>
                </table>
            </div>
        </div>
    )
}