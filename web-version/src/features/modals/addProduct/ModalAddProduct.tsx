import { useForm } from "react-hook-form"
import { InputSearch } from "../../../components/InputSeach"
import { ModalContainer } from "../../../components/ModalContainer"
import { InputProduct } from "../../product/components/ItemProduct/InputProduct"
import { useAppSelector } from "../../../../store/store"
import { useSearch } from "../../../hooks/useSearch"
import { useMemo } from "react"

export const ModalAddProduct = () => {
    const { filterSearch, onSearchSubmit, registerSearch } = useSearch();

    const { data } = useAppSelector( state => state.product )
    const sortedAndFilteredData = useMemo(() => 
        filterSearch( data, data.map( product => JSON.stringify(product) ) )
        , [ data, filterSearch ]);

    const onSelectProduct = ( productId: string ) => {
        console.log("Selected product:", productId);
        console.log("TODO: Close modal and add product to POS");
    }

    return (
        <ModalContainer
            header={{ title: "Añadir Producto" }}
            config={{ closeModal: () => console.log("TODO CloseModal"), width: 600  }}
        >
            <InputSearch wFull register={registerSearch("search")} onSearch={onSearchSubmit} placeholder="Buscar Producto" autofocus />

            <ul className="overflow-y-auto max-h-[300px]">
                {
                    sortedAndFilteredData.slice(0, 20).map(( product, index ) => <li 
                        key={product._id} onClick={ () => onSelectProduct(product._id) }
                        className="
                        flex justify-between items-center gap-4
                        px-4 py-1.5 text-[#023b3b] cursor-pointer wrap-break-word capitalize
                        even:bg-slate-50 hover:bg-slate-100 active:brightness-[.94] transition-base
                        ">
                            <p>{product.info.brand} {product.info.name} {product.info.size}{product.info.sizeType}</p>
                            <p className="font-medium">${ product.info.price.toLocaleString("es-AR") }</p>
                    </li>)
                }
            </ul>
        </ModalContainer>
    )
}