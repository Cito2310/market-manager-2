import { ButtonTab } from "../category/components/ButtonTab"
import { InputSelect } from "../category/components/InputSelect"
import { ButtonHeadTable } from "../../components/ButtonHeadTable"
import { ItemProduct } from "./components/ItemProduct"
import { ItemAddProduct } from "./components/ItemAddProduct"
import { useProductScreen } from "./hooks/useProductScreen"
import { TableHeadProduct } from "./components/TableHeadProduct"
import { InputSearch } from "../../components/InputSeach"
import { OptionsPrimary } from "../../utils/OptionsPrimary"

export const ProductScreen = () => {
    const { search, select, open, product, sort } = useProductScreen();

    return (
        <div className="mt-8 p-2 px-10 font-[Montserrat]">

            <div className="flex w-full border-b-2 border-[#c4c4c4]">
                <ButtonTab label="Productos" active />
                <span className="border-l h-3.5 my-auto border-[#c4c4c4] mx-3"></span>
                <ButtonTab label="Categorias" />
            </div>


            <div className="flex items-center my-3 justify-between">
                <div className="flex gap-3">
                    <InputSearch onSearch={search.onSearchSubmit} register={search.registerSearch("search")} placeholder="Buscar" />
                    <InputSelect 
                        registerReturn={select.registerSelect("primary")} optionSelected={!!select.watchPrimary} 
                        label="Seccion" options={ OptionsPrimary }
                    />
                    <InputSelect 
                        registerReturn={select.registerSelect("category")} optionSelected={!!select.watchCategory} 
                        label="Categoria" options={ OptionsPrimary }
                    />
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