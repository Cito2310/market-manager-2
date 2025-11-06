import { useForm } from "react-hook-form"
import { ButtonTab } from "../category/components/ButtonTab"
import { InputSearch } from "../category/components/InputSearch"
import { InputSelect } from "../category/components/InputSelect"
import { useCallback, useState } from "react"
import { ButtonHeadTable } from "../../components/ButtonHeadTable"
import fakeProducts from "./FakeProducts"
import { ItemProduct } from "./components/ItemProduct"

export const ProductScreen = () => {
    const { register } = useForm();
    const [select, setSelect] = useState<{primary: string}>({primary: ""});

    const [isOpen, setOpen] = useState<null | "create" | string>(null);

    const toggleCreating = useCallback(() => { setOpen( m => m === "create" ? null : "create" ) }, []);

    const [sortSelected, setSortSelected] = useState<[string, "asc" | "desc"] | null >(null);
    const toggleSortSelected = useCallback( ( field: string ) => {
        setSortSelected( current => {
            if (current === null) return [field, "asc"];
            if (current[0] !== field) return [field, "asc"];
            if (current[1] === "asc") return [field, "desc"];
            if (current[1] === "desc") return null;
            return null;
        })}, []);


    return (
        <div className="mt-8 p-2 px-10 font-[Montserrat]">

            <div className="flex w-full border-b-2 border-[#c4c4c4]">
                <ButtonTab label="Productos" active />
                <span className="border-l h-3.5 my-auto border-[#c4c4c4] mx-3"></span>
                <ButtonTab label="Categorias" />
            </div>


            <div className="flex items-center my-3 justify-between">
                <div className="flex gap-3">
                    <InputSearch register={register("search")} placeholder="Buscar" />
                    <InputSelect name="category" select={select} setSelect={setSelect} label="Categoria" options={["Alimentos", "Bebidas", "Producto de Limpieza"]} />
                    <InputSelect name="primary" select={select} setSelect={setSelect} label="Seccion" options={["Alimentos", "Bebidas", "Producto de Limpieza"]} />
                </div>

                <button onClick={toggleCreating} disabled={isOpen === "create"} className="font-medium text-[#008080] disabled:pointer-events-none disabled:opacity-60 transition-base hover:brightness-90 active:brightness-[.50] cursor-pointer mr-2">
                    <i className="fa-solid fa-plus text-[0.8em]"/> Añadir Categoria
                </button>
            </div>


            <table className="w-full rounded-lg">
                <thead>
                    <tr>
                        <ButtonHeadTable label="Nombre de la Categoria" name="name" sortSelected={sortSelected} toggleSortSelected={toggleSortSelected} start />
                        <ButtonHeadTable label="Categoría" name="category" sortSelected={sortSelected} toggleSortSelected={toggleSortSelected} />
                        <ButtonHeadTable label="Sección" name="primary" sortSelected={sortSelected} toggleSortSelected={toggleSortSelected} />
                        <ButtonHeadTable label="Ubicación" name="location" sortSelected={sortSelected} toggleSortSelected={toggleSortSelected} />
                        <ButtonHeadTable label="Precio" name="price" sortSelected={sortSelected} toggleSortSelected={toggleSortSelected} />
                        <ButtonHeadTable label="Stock" name="stock" sortSelected={sortSelected} toggleSortSelected={toggleSortSelected} />

                        <ButtonHeadTable label="empty" name="empty" sortSelected={sortSelected} toggleSortSelected={toggleSortSelected} empty end />
                    </tr>
                </thead>

                <tbody>
                    {
                        fakeProducts.map( product => (
                            <ItemProduct key={product._id} product={product} height={0} />
                        ))
                    }
                </tbody>
            </table>

        </div>
    )
}