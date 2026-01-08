import { Dispatch, SetStateAction, useState } from "react";
import { Product } from "../../../../types/Product"
import { IconButton } from "../../../components/IconButton";
import { ItemFooter } from "../../category/components/ItemCategory/ItemFooter";
import { ContainerData } from "./ContainerData";
import { InputCheckbox } from "./InputCheckbox";
import { InputProduct } from "./InputProduct";
import { Layout } from "./Layout";
import { StockBar } from "./StockBar";
import { useItemProduct } from "../hooks/useItemProduct";
import { TableExpiration } from "./ItemProduct/TableExpiration";

interface props {
    product: Product;
    setOpen: Dispatch<SetStateAction<string | null>>;
    isOpen?: boolean;
}

export const ItemProduct = ({ product, setOpen, isOpen }: props) => {
    const { data, field, form, option, detailsMenu } = useItemProduct({ product, setOpen, isOpen });

    return <>
        <tr className={`${ detailsMenu.height ? null : "border-b" } border-slate-400/50 even:bg-slate-50/40 hover:bg-slate-50 transition-colors`}>
                <td className="px-4 py-4 font-medium text-[#023b3b]">
                    {data.brand} {data.name} 
                    <span className="text-[#537e7e]"> {data.size}{data.sizeType}</span>
                </td>

                <td className="px-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#e4f0f0] text-[#023b3b]">
                        {data.category}
                    </span>
                </td>

                {/* <td className="px-2 text-[#537e7e] capitalize">{product.info.primary}</td> */}
                {/* <td className="px-2 text-[#537e7e] capitalize">{product.info.location}</td> */}
                
                <td className="px-2 tabular-nums font-semibold text-[#023b3b]">${product.info.price.toLocaleString("es-AR")}</td>
                
                
                { product.options.hasStockControl ? <StockBar currentStock={product.stock!.currentStock} lowStock={product.stock!.lowStockAlert} /> : <td className="text-center">-</td> }
                
                <td className="px-2">
                    <div className="flex gap-2 justify-end pr-4">
                        <IconButton icon="print" variant="D"  />
                        <IconButton onClick={detailsMenu.toggleDetailsMenu} icon="ellipsis" variant="D"  />
                    </div>
                </td>
        </tr>

        <tr className="">
            <td colSpan={10}>
                <form onSubmit={form.onSaveData} style={{height: detailsMenu.height}} className={`
                    ${detailsMenu.height !== 0 ? "px-6 py-5" : ""}
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
                                    <InputCheckbox register={form.register("options.hasExpirationControl")} icon="calendar-days" label="Op. Vencimiento" />
                                    <InputCheckbox register={form.register("options.hasStockControl")} icon="boxes-stacked" label="Op. Stock" />
                                </ContainerData>
                            </Layout.Column>

                            {/* COLUMNA 2 - INFORMACION PRINCIPAL - NOMBRE, MARCA, TAMAÑO, CATEGORIA, SUBCATEGORIA */}
                            {/* COLUMNA 2 - FORMULACION EXTRAS */}
                            <Layout.Column className="w-[76%]">
                                <ContainerData label="Datos Principales">
                                    <Layout.Row>
                                        <InputProduct register={form.register("info.name")} type="text" label="Nombre" />
                                        <InputProduct register={form.register("info.barcode")} type="text" label="Codigo de Barra" />
                                    </Layout.Row>
                                    <Layout.Row>
                                        <InputProduct register={form.register("info.category")} options={option.categoriesOptions} type="select" label="Categoria" />
                                        <InputProduct register={form.register("info.subcategory")} options={option.subcategoriesOptions} type="select" label="Subcategoria" />
                                        <InputProduct register={form.register("info.brand")} options={option.brandsOptions} type="select" label="Marca" />
                                    </Layout.Row>
                                    <Layout.Row>
                                        <InputProduct register={form.register("info.unitType")} options={option.unitTypeOptions} type="select" label="Tipo" />
                                        <InputProduct sizeConfig={{ registerNumber: form.register("info.size"), registerSizeType: form.register("info.sizeType"), options: option.typeSizeOptions }} type="size" label="Tamaño" />
                                        <InputProduct register={form.register("info.price")} type="number" label="Precio" prefix="$" padding={2} />
                                    </Layout.Row>
                                </ContainerData>

                                {/* SECCION 2 - VENCIMIENTO */}
                                {
                                    data.hasExpirationControl && 
                                    <ContainerData label="Vencimiento">
                                        <Layout.Column>
                                            <TableExpiration 
                                                register={form.register}
                                                mode="edit" 
                                                controls={{ append: field.appendExpiration, remove: field.removeExpiration, fields: field.fields }} 
                                            />
                                            <InputProduct register={form.register("expiration.alertExpiration")} type="number" label="Alerta de Vencimiento" subfix="Dias" padding={5} />
                                        </Layout.Column>
                                    </ContainerData>
                                }

                                {/* SECCION 3 - STOCK */}
                                {
                                    data.hasStockControl && 
                                    <ContainerData label="Stock">
                                        <Layout.Row>
                                            <InputProduct register={form.register("stock.currentStock")} type="number" label="Stock Actual" />
                                        </Layout.Row>
                                        <Layout.Row>
                                            <InputProduct register={form.register("stock.mediumStockAlert")} type="number" subfix="Unidades" label="Alerta - Solo Lo Expuesto" />
                                            <InputProduct register={form.register("stock.lowStockAlert")} type="number" subfix="Unidades" label="Alerta - Poca Reserva" />
                                            <InputProduct register={form.register("stock.veryLowStockAlert")} type="number" subfix="Unidades" label="Alerta - Muy Poco" />
                                        </Layout.Row>
                                    </ContainerData>
                                }
                            </Layout.Column>
                        </div>

                        <ItemFooter 
                            cancelFunction={()=>{}}
                            submitLabel="Guardar Cambios"
                        />
                </form>
            </td>
        </tr>
    </>
}