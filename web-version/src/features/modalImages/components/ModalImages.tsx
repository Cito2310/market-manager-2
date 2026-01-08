import { useForm } from "react-hook-form"
import { ModalContainer } from "../../../components/ModalContainer"
import { Layout } from "../../../screen/product/components/Layout"
import { ItemImages } from "./ItemImages"
import { ItemImagesAdd } from "./ItemImagesAdd"
import { useRef } from "react"
import { avifBlobToDataUrl, blobToAvifBlob, compressionImage, downloadTxtFile } from "../../../helpers/imageManager"
import { InputSearch } from "../../../components/InputSeach"


export const ModalImages = () => {

    const inputRef = useRef<HTMLInputElement>(null);
    const handleImageUpload = async(e: React.ChangeEvent<HTMLInputElement>) => {
        const imageFile = e.target.files?.[0];
        if (!imageFile) return;

        try {
            const compressedFile = await compressionImage(imageFile);
            const avifBlob = await blobToAvifBlob(compressedFile);
            const base64 = await avifBlobToDataUrl(avifBlob);
            downloadTxtFile(base64, imageFile.name + "base64.txt");

            

        } catch (error) { console.log(error) }
    };

    const handleButtonClick = () => {
        inputRef.current?.click();
    };

    return (
        <ModalContainer
            title="Galería de Imágenes"
            closeModal={()=>{}}
            footerButtons={[
                { label: "Cancelar", onClick:()=>{}, variant: "secondary" },
                { label: "Seleccionar", onClick:()=>{}, variant: "primary" },
            ]}
        >
            <Layout.Column className="w-full">
                {/* HIDDEN INPUT FILE FOR BUTTON ADD */}
                <input
                    ref={inputRef}
                    type="file"
                    className="hidden"
                    onChange={handleImageUpload}
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
                    <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 max-h-[50vh]  overflow-y-auto">
                        <ItemImagesAdd onClick={handleButtonClick} />
                        <ItemImages exampleImg="cabalgata.png" />
                        <ItemImages exampleImg="mayo.webp" selected/>
                        <ItemImages exampleImg="mayo.webp"/>
                        <ItemImages exampleImg="cabalgata.png" />
                        <ItemImages exampleImg="cañuelas.jpg" />
                        <ItemImages exampleImg="cabalgata.png" />
                        <ItemImages exampleImg="mayo.webp"/>
                        <ItemImages exampleImg="cañuelas.jpg" />
                        <ItemImages exampleImg="cañuelas.jpg" />
                        <ItemImages exampleImg="cañuelas.jpg" />
                        <ItemImages exampleImg="cañuelas.jpg" />
                        <ItemImages exampleImg="cabalgata.png" />
                        <ItemImages exampleImg="cañuelas.jpg" />
                        <ItemImages exampleImg="cañuelas.jpg" />
                        <ItemImages exampleImg="cabalgata.png" />
                    </div>
                </div>
            </Layout.Column>
        </ModalContainer>
    )
}