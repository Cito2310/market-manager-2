import { ButtonTab } from "../category/components/ButtonTab"
import { InputSearch } from "../category/components/InputSearch"
import { InputSelect } from "../category/components/InputSelect"
import { ButtonHeadTable } from "../../components/ButtonHeadTable"
import { ItemProduct } from "./components/ItemProduct"
import { ItemAddProduct } from "./components/ItemAddProduct"
import { useProductScreen } from "./hooks/useProductScreen"
import { TableHeadProduct } from "./components/TableHeadProduct"

export const ProductScreen = () => {
    const { form, open, product, sort } = useProductScreen();

    return (
        <div className="mt-8 p-2 px-10 font-[Montserrat]">

            <div className="flex w-full border-b-2 border-[#c4c4c4]">
                <ButtonTab label="Productos" active />
                <span className="border-l h-3.5 my-auto border-[#c4c4c4] mx-3"></span>
                <ButtonTab label="Categorias" />
            </div>


            <div className="flex items-center my-3 justify-between">
                <div className="flex gap-3">
                    <InputSearch register={form.register("search")} placeholder="Buscar" />
                    <InputSelect name="category" select={form.select} setSelect={form.setSelect} label="Categoria" options={["Alimentos", "Bebidas", "Producto de Limpieza"]} />
                    <InputSelect name="primary" select={form.select} setSelect={form.setSelect} label="Seccion" options={["Alimentos", "Bebidas", "Producto de Limpieza"]} />
                </div>

                <button onClick={open.onToggleCreatingMode} disabled={open.isOpen === "create"} className="font-medium text-[#008080] disabled:pointer-events-none disabled:opacity-60 transition-base hover:brightness-90 active:brightness-[.50] cursor-pointer mr-2">
                    <i className="fa-solid fa-plus text-[0.8em]"/> Añadir Categoria
                </button>
            </div>


            <table className="w-full rounded-lg">
                <TableHeadProduct sort={sort} />

                <tbody>
                    {
                        open.isOpen === "create" ? <ItemAddProduct onClose={open.onCloseCategory} /> : null
                    }

                    {
                        product.data.map( product => (
                            <ItemProduct setOpen={open.setOpen} isOpen={open.isOpen === product._id} key={product._id} product={product} />
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}