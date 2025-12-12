import { ItemFooter } from "../../category/components/ItemCategory/ItemFooter";
import { ContainerData } from "./ContainerData";
import { InputCheckbox } from "./InputCheckbox";
import { InputProduct } from "./InputProduct";
import { Layout } from "./Layout";
import { TableExpiration } from "./ItemProduct/TableExpiration";
import { useItemAddProduct } from "../hooks/useItemAddProduct";

export const ItemAddProduct = () => {
    const { data, field, form, option } = useItemAddProduct();

    return <>
        <tr className={`border-slate-400/50 even:bg-slate-50/40 hover:bg-slate-50 transition-colors`}>
                <td className="px-4 py-4 font-medium text-[#023b3b]">
                    { 
                        data.name || data.brand ?
                        <>
                            {data.brand} {data.name} 
                            <span className="text-[#537e7e]"> {data.size}{data.sizeType}</span>
                        </>
                        :
                        <span className="text-[#7e9292] italic font-normal">Nuevo Producto</span>
                    }
                </td>

                <td className="px-2">
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#e4f0f0] text-[#023b3b]">
                        {
                            data.category ? data.category : <span className="text-[#7e9292] italic font-normal">Categoria</span>
                        }
                    </span>
                </td>

                <td className="px-2 text-[#537e7e] capitalize">
                    {
                        data.primaryData ? data.primaryData : <span className="text-[#7e9292] italic font-normal">Seccion</span>
                    }
                </td>

                <td className="px-2 tabular-nums font-semibold text-[#023b3b]">${data.price.toLocaleString("es-AR")}</td>

                <td className="text-center">-</td>
                
                <td className="px-2"></td>
        </tr>

        <tr className="">
            <td colSpan={10}>
                <form onSubmit={form.onAddProduct} style={{height: "auto"}} className={`
                    px-6 py-5 bg-white transition-base overflow-hidden flex flex-col shadow-md shadow-[#8f8f8f] rounded-b-md gap-8`}>

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
                                    {/* <InputCheckbox label="Op. Avanzadas" /> */}
                                </ContainerData>
                            </Layout.Column>

                            {/* COLUMNA 2 - INFORMACION PRINCIPAL - NOMBRE, MARCA, TAMAÑO, CATEGORIA, SUBCATEGORIA */}
                            {/* COLUMNA 2 - FORMULACION EXTRAS */}
                            <Layout.Column className="w-[76%]">
                                <ContainerData label="Datos Principales">
                                    <Layout.Row>
                                        <InputProduct register={form.register("info.name")} placeholder="Nombre del Producto" type="text" label="Nombre" />
                                        <InputProduct register={form.register("info.barcode")} placeholder="Codigo de Barra" type="text" label="Codigo de Barra" />
                                    </Layout.Row>
                                    <Layout.Row>
                                        <InputProduct register={form.register("info.category")} options={option.categoriesOptions} type="select" label="Categoria" />
                                        <InputProduct register={form.register("info.subcategory")} options={option.subcategoriesOptions} type="select" label="Subcategoria" />
                                        <InputProduct register={form.register("info.brand")} options={option.brandsOptions} type="select" label="Marca" />
                                    </Layout.Row>
                                    <Layout.Row>
                                        <InputProduct register={form.register("info.unitType")} options={option.unitTypeOptions} type="select" label="Tipo" />
                                        <InputProduct sizeConfig={{ options: option.typeSizeOptions, registerNumber: form.register("info.size"), registerSizeType: form.register("info.sizeType") }} type="size" label="Tamaño" />
                                        <InputProduct register={form.register("info.price")} type="number" label="Precio" prefix="$" padding={2} />
                                    </Layout.Row>
                                </ContainerData>

                                {/* SECCION 2 - VENCIMIENTO */}
                                {
                                    data.hasExpirationControl && (
                                        <ContainerData label="Vencimiento">
                                            <Layout.Column>
                                                <TableExpiration 
                                                    register={ form.register } 
                                                    mode="add" 
                                                    controls={{ append: field.appendExpiration, fields: field.fields, remove: field.removeExpiration }}
                                                />

                                                <InputProduct register={form.register("expiration.alertExpiration")} type="number" label="Alerta de Vencimiento" subfix="Dias" padding={5} />
                                            </Layout.Column>
                                        </ContainerData>
                                    )
                                }

                                {/* SECCION 3 - STOCK */}
                                {
                                    data.hasStockControl && (
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
                                    )
                                }
                            </Layout.Column>
                        </div>

                        <ItemFooter 
                            messageError={ data.messageError }
                            loading={ data.status.isLoading }
                            cancelFunction={()=>{}}
                            hiddenButtonDelete
                            submitLabel="Guardar Producto"
                            otherButtons={[ { label: "Guardar e imprimir", onClick: () => {} } ]}
                        />
                </form>
            </td>
        </tr>
    </>
}