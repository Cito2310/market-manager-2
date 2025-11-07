import { useState } from "react";
import { Product } from "../../../../types/product/Product"
import { IconButton } from "../../../components/IconButton";
import { ItemFooter } from "../../category/components/ItemCategory/ItemFooter";
import { ContainerData } from "./ContainerData";
import { InputCheckbox } from "./InputCheckbox";
import { InputProduct } from "./InputProduct";
import { Layout } from "./Layout";
import { StockBar } from "./StockBar";

interface props {
    product: Product;
    height: number | string;
}

export const ItemProduct = ({ product }: props) => {
    const [height, setHeight] = useState<number | string>(0)
    const toggleDetailsMenu = () => {
        if ( height === 0 ) { setHeight("auto") }
        if ( height !== 0 ) { setHeight(0) }
        // if ( height === 0 ) { setHeight("auto") ; setOpen(category._id) }
        // if ( height !== 0 ) { setHeight(0)      ; setOpen(prev => prev === category._id ? null : prev); reset() }
    }

    return <>
        <tr className={`${ height ? null : "border-b" } border-slate-400/50 even:bg-slate-50/40 hover:bg-slate-50 transition-colors`}>
                <td className="px-4 py-4 font-medium text-[#023b3b]">
                    {product.info.brand} {product.info.name} 
                    <span className="text-[#537e7e]"> {product.info.size}{product.info.sizeType}</span>
                </td>

                <td className="px-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#e4f0f0] text-[#023b3b]">
                        {product.info.category}
                    </span>
                </td>

                <td className="px-2 text-[#537e7e] capitalize">{product.info.primary}</td>
                <td className="px-2 text-[#537e7e] capitalize">{product.info.location}</td>
                
                <td className="px-2 tabular-nums font-semibold text-[#023b3b]">${product.info.price.toLocaleString("es-AR")}</td>
                
                
                { product.stock ? <StockBar currentStock={product.stock.currentStock} lowStock={product.stock.lowStockAlert} /> : null }
                
                <td className="px-2">
                    <div className="flex gap-2 justify-end pr-4">
                        <IconButton icon="print" variant="D"  />
                        <IconButton onClick={toggleDetailsMenu} icon="ellipsis" variant="D"  />
                    </div>
                </td>
        </tr>

        <tr className="">
            <td colSpan={10}>
                <div style={{height}} className={`
                    ${height !== 0 ? "px-6 py-5" : ""}
                    bg-white transition-base overflow-hidden flex flex-col shadow-md shadow-[#8f8f8f] rounded-b-md gap-8`}>

                        <div className="flex gap-8">
                            {/* COLUMNA 1 - IMAGEN */}
                            <Layout.Column className="w-[24%]">
                                <ContainerData label="Imagen">
                                        <div className="flex flex-col rounded-md overflow-hidden shadow-sm">
                                            <img className="w-[full]" src="/img/cañuelas.jpg"></img>
                                            
                                            <button className="flex items-center justify-center gap-3 bg-white rounded-b-md shadow px-4 py-3 hover:bg-[#eafbe7] transition border-2 border-transparent hover:border-[#008080]">
                                                <i className="fa-solid fa-image text-2xl text-[#008080]" />
                                                cañuelas.jpg
                                            </button>
                                    </div>
                                </ContainerData>

                                <ContainerData label="Opciones">
                                    <InputCheckbox label="Op. Vencimiento" />
                                    <InputCheckbox label="Op. Stock" />
                                    <InputCheckbox label="Op. Avanzadas" />
                                </ContainerData>
                            </Layout.Column>

                            {/* COLUMNA 2 - INFORMACION PRINCIPAL - NOMBRE, MARCA, TAMAÑO, CATEGORIA, SUBCATEGORIA */}
                            {/* COLUMNA 2 - FORMULACION EXTRAS */}
                            <Layout.Column className="w-[76%]">
                                <ContainerData label="Datos Principales">
                                    <Layout.Row>
                                        <InputProduct type="text" label="Nombre" />
                                        <InputProduct type="text" label="Codigo de Barra" />
                                    </Layout.Row>
                                    <Layout.Row>
                                        <InputProduct type="select" label="Categoria" />
                                        <InputProduct type="select" label="Subcategoria" />
                                        <InputProduct type="select" label="Marca" />
                                    </Layout.Row>
                                    <Layout.Row>
                                        <InputProduct type="select" label="Tipo" />
                                        <InputProduct type="size" label="Tamaño" />
                                        <InputProduct type="number" label="Precio" prefix="$" padding={2} />
                                    </Layout.Row>
                                </ContainerData>

                                {/* SECCION 2 - VENCIMIENTO */}
                                <ContainerData label="Vencimiento">
                                    <Layout.Row>
                                        <InputProduct type="date" label="Fecha de Vencimiento" />
                                        <InputProduct type="number" label="Alerta de Vencimiento" subfix="Dias" padding={5} />
                                    </Layout.Row>
                                </ContainerData>

                                {/* SECCION 3 - STOCK */}
                                <ContainerData label="Stock">
                                    <Layout.Row>
                                        <InputProduct type="number" label="Stock Actual" />
                                        <InputProduct type="select" label="Tipo de Rotacion" />
                                    </Layout.Row>
                                    <Layout.Row>
                                        <InputProduct type="number" subfix="Unidades" label="Alerta - Solo Lo Expuesto" />
                                        <InputProduct type="number" subfix="Unidades" label="Alerta - Poca Reserva" />
                                        <InputProduct type="number" subfix="Unidades" label="Alerta - Muy Poco" />
                                    </Layout.Row>
                                </ContainerData>

                                {/* SECCION 4 - OPCIONES AVANZADAS */}
                                <ContainerData label="Opciones Avanzadas">
                                    <Layout.Row>
                                        <InputProduct type="number" label="Coste del Producto" prefix="$" padding={2} />
                                    </Layout.Row>
                                </ContainerData>
                            </Layout.Column>
                        </div>

                        <ItemFooter 
                            cancelFunction={()=>{}}
                            submitLabel="Guardar Cambios"
                        />
                </div>
            </td>
        </tr>
    </>
}