import { ModalContainer } from "../../../components/ModalContainer"
import { Layout } from "../../../screen/product/components/Layout"
import { ItemImages } from "./ItemImages"
import { ItemImagesAdd } from "./ItemImagesAdd"
import { InputSearch } from "../../../components/InputSeach"
import { useModalImages } from "../hooks/useModalImages"
import { Pagination } from "../../../components/Pagination"

export const ModalImages = () => {
    const { functions, data, pagination } = useModalImages();

    return (
        <ModalContainer
            header={{
                title: "Galería de Imágenes"
            }}
            config={{
                closeModal: () => {}
            }}
            footerButtons={[
                { label: "Cancelar", onClick:()=>{}, variant: "secondary" },
                { label: "Seleccionar", onClick:()=>{}, variant: "primary", disabled: data.selectedImage === "" },
            ]}
        >
            <Layout.Column className="w-full">
                {/* HIDDEN INPUT FILE FOR BUTTON ADD */}
                <input
                    ref={functions.inputRef}
                    type="file"
                    className="hidden"
                    onChange={functions.handleSelectFileImage}
                    accept="image/*"
                />

                {/* BODY */}
                <div className="flex flex-col gap-4">
                    <div className="flex items- justify-between gap-2">
                        <InputSearch placeholder="Buscar Imagen" searchFunction={(value) => { console.log("Searching for:", value) }} />
                        <Pagination pagination={pagination} />
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 max-h-[50vh] overflow-y-auto">
                        <ItemImagesAdd onClick={functions.handleButtonClick} />

                        {
                            data.images.map( img => <ItemImages 
                                key={img._id} 
                                image={img} 
                                handleImageDelete={functions.handleImageDelete} 
                                handleSelectImage={functions.handleSelectImage}
                                selected={img._id === data.selectedImage }
                            />)
                        }
                    </div>
                </div>
            </Layout.Column>
        </ModalContainer>
    )
}