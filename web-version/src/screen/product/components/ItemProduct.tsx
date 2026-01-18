import { Dispatch, SetStateAction, useState } from "react";
import { Product } from "../../../../types/Product"
import { IconButton } from "../../../components/IconButton";
import { ItemFooter } from "../../category/components/ItemCategory/ItemFooter";
import { ContainerData } from "./ContainerData";
import { InputCheckbox } from "./ItemProduct/InputCheckbox";
import { InputProduct } from "./InputProduct";
import { Layout } from "./Layout";
import { StockBar } from "./StockBar";
import { useItemProduct } from "../hooks/useItemProduct";
import { TableExpiration } from "./ItemProduct/TableExpiration";
import { ItemProductCard } from "./ItemProductCard";
import { FormCardContainer } from "../../../components/FormCardContainer";

interface props {
    product: Product;
    setOpen: Dispatch<SetStateAction<string | null>>;
    isOpen?: boolean;
}

export const ItemProduct = ({ product, setOpen, isOpen }: props) => {
    const { data, field, form, option, detailsMenu } = useItemProduct({ product, setOpen, isOpen });

    return <>
        <ItemProductCard 
            data={data}
            type="product"
            openDetailsMenu={detailsMenu.toggleDetailsMenu}
            product={product}
        />


        <FormCardContainer
            footerButtons={[
                { label: "Cancelar", variant: "secondary", onClick: detailsMenu.toggleDetailsMenu },
                { label: "Eliminar", variant: "danger", onClick: () => { console.log("TODO") } },
                { label: "Guardar Cambios", variant: "primary", isSubmit: true }
            ]}
            config={{
                onSubmit: form.onSaveData,
                errorMessage: data.messageError,
                hasLoading: data.status.isLoading,
                height: detailsMenu.height
            }}
        >
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
        </FormCardContainer>
    </>
}