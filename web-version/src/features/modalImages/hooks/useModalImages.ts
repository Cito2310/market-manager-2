import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { startCreateImage, startDeleteImageById, startGetImages } from "../../../../store/image";
import { avifBlobToDataUrl, blobToAvifBlob, compressionImage } from "../../../helpers/imageManager";

export const useModalImages = () => {
    // Manage load images and show data
    const { data } = useAppSelector( state => state.image );
    const dispatch = useAppDispatch();
    const [selectedImage, setSelectedImage] = useState("")

    useEffect(() => {
        dispatch( startGetImages() )
    }, [])
    
    
    // Ref
    const inputRef = useRef<HTMLInputElement>(null);


    // Control images
    const handleImageDelete = ( id: string ) => { dispatch( startDeleteImageById( id ) )};
    
    const handleImageUpload = async(e: React.ChangeEvent<HTMLInputElement>) => {
        const imageFile = e.target.files?.[0];
        if (!imageFile) return;

        try {
            const compressedFile = await compressionImage(imageFile);
            const avifBlob = await blobToAvifBlob(compressedFile);
            const base64 = await avifBlobToDataUrl(avifBlob);
            
            dispatch(startCreateImage({
                base64: base64,
                nameImage: imageFile.name,
                uploadedAt: new Date().getTime()+"",
                
            }))
        } catch (error) { console.log(error) }
    };

    const handleButtonClick = () => { inputRef.current?.click() }; // Trigger click on hidden input file

    const handleSelectImage = ( id: string ) => { setSelectedImage(id) }; 

    // RETURN VALUES AND FUNCTIONS
    return {
        image: {
            data,
            selectedImage,
        },
        functions: {
            handleImageUpload,
            handleImageDelete,
            handleButtonClick,
            handleSelectImage,
            inputRef
        }
    }
}