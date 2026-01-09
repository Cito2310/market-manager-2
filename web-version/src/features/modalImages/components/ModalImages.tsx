import { ModalContainer } from "../../../components/ModalContainer"
import { Layout } from "../../../screen/product/components/Layout"
import { ItemImages } from "./ItemImages"
import { ItemImagesAdd } from "./ItemImagesAdd"
import { InputSearch } from "../../../components/InputSeach"
import { useModalImages } from "../hooks/useModalImages"

export const ModalImages = () => {
    const { functions, image } = useModalImages();

    return (
        <ModalContainer
            title="Galería de Imágenes"
            closeModal={()=>{}}
            footerButtons={[
                { label: "Cancelar", onClick:()=>{}, variant: "secondary" },
                { label: "Seleccionar", onClick:()=>{}, variant: "primary", disabled: image.selectedImage === "" },
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
                    <div className="flex items-center justify-between gap-2">
                        <InputSearch placeholder="Buscar Imagen" searchFunction={(value) => { console.log("Searching for:", value) }} />
                        <div className="flex items-center gap-2">
                            <button className="w-9 h-9 flex items-center justify-center rounded-md bg-white border border-[#d5e0e0] shadow-sm hover:bg-[#eafbe7] hover:border-[#008080] active:brightness-95 transition disabled:opacity-50">
                                <i className="fa-solid fa-chevron-left text-[#008080] text-base"></i>
                            </button>
                            <span className="mx-2 font-semibold text-[#008080] text-base select-none">1 <span className="text-[#7e9292]">/ 5</span></span>
                            <button className="w-9 h-9 flex items-center justify-center rounded-md bg-white border border-[#d5e0e0] shadow-sm hover:bg-[#eafbe7] hover:border-[#008080] active:brightness-95 transition disabled:opacity-50">
                                <i className="fa-solid fa-chevron-right text-[#008080] text-base"></i>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 max-h-[50vh] overflow-y-auto">
                        <ItemImagesAdd onClick={functions.handleButtonClick} />

                        {
                            image.data.map( img => <ItemImages 
                                key={img._id} 
                                image={img} 
                                handleImageDelete={functions.handleImageDelete} 
                                handleSelectImage={functions.handleSelectImage}
                                selected={img._id === image.selectedImage }
                            />)
                        }
                    </div>
                </div>
            </Layout.Column>
        </ModalContainer>
    )
}