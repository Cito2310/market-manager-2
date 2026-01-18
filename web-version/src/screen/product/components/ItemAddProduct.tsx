import { ContainerData } from "./ContainerData";
import { InputProduct } from "./InputProduct";
import { Layout } from "./Layout";
import { useItemAddProduct } from "../hooks/useItemAddProduct";
import { FormCardContainer } from "../../../components/FormCardContainer";
import { ItemProductCard } from "./ItemProductCard";
import { TableExpiration } from "./ItemProduct/TableExpiration";
import { InputCheckbox } from "./ItemProduct/InputCheckbox";
import { ImageSelect } from "./ItemProduct/ImageSelect";

interface props {
    onClose: () => void;
}

export const ItemAddProduct = ({ onClose }: props) => {
    const { data, field, form, option } = useItemAddProduct( onClose );

    return <>
        <ItemProductCard
            data={data}
            type="addProduct"
        />


        <FormCardContainer
            footerButtons={[
                { label: "Cancelar", variant: "secondary", onClick: form.onClose },
                { label: "Guardar e imprimir", variant: "secondary", onClick: () => { console.log("TODO") } },
                { label: "Guardar Producto", variant: "primary", isSubmit: true }
            ]}
            config={{
                onSubmit: form.onAddProduct,
                errorMessage: data.msgError,
                hasLoading: data.status.isLoading,
                height: "auto"
            }}
        >
            {/* COLUMNA 1 - IMAGEN */}
            <Layout.Column className="w-[24%]">
                <ContainerData label="Imagen">
                    <ImageSelect data={ data } onModalImage={ form.onModalImage } />
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
                                <InputProduct register={form.register("stock.mediumStockAlert")} type="number" subfix="Unidades" label="Alerta - Stock Medio" />
                                <InputProduct register={form.register("stock.lowStockAlert")} type="number" subfix="Unidades" label="Alerta - Poca Stock" />
                                <InputProduct register={form.register("stock.veryLowStockAlert")} type="number" subfix="Unidades" label="Alerta - Muy Poco Stock" />
                            </Layout.Row>
                        </ContainerData>
                    )
                }
            </Layout.Column>
        </FormCardContainer>
    </>
}