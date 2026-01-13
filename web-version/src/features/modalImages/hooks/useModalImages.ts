import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { startCreateImage, startDeleteImageById, startGetImages } from "../../../../store/image";
import { avifBlobToDataUrl, blobToAvifBlob, compressionImage } from "../../../helpers/imageManager";
import { setAddImageData } from "../../../../store/modal/modalSlice";
import { usePaginate } from "../../../hooks/usePaginate";

export const useModalImages = () => {
    // Manage load images and show data
    const { data } = useAppSelector( state => state.image );
    const dispatch = useAppDispatch();
    const [selectedImage, setSelectedImage] = useState("")
    const { nextPage, prevPage, paginatedData, page, totalPages, isPrevDisabled, isNextDisabled } = usePaginate(data, 14);

    useEffect(() => {
        dispatch( startGetImages() )
    }, [])
    
    
    // Ref
    const inputRef = useRef<HTMLInputElement>(null);


    // Control images
    const handleImageDelete = ( id: string ) => { dispatch( startDeleteImageById( id ) )};
    
    const handleSelectFileImage = async( e: React.ChangeEvent<HTMLInputElement> ) => {
        const imageFile = e.target.files?.[0];
        if (!imageFile) return;

        try {
            const compressedFile = await compressionImage(imageFile);
            const avifBlob = await blobToAvifBlob(compressedFile);
            const base64 = await avifBlobToDataUrl(avifBlob);
            
            dispatch( setAddImageData({ base64: base64, nameImage: imageFile.name }) );
        } catch (error) { console.log(error) }
    };

    const handleButtonClick = () => { inputRef.current?.click() }; // Trigger click on hidden input file

    const handleSelectImage = ( id: string ) => { setSelectedImage(id) }; 

    // RETURN VALUES AND FUNCTIONS
    return {
        pagination: {
            nextPage,
            prevPage,
            page,
            totalPages,
            isPrevDisabled,
            isNextDisabled,
        },
        data: {
            images: paginatedData,
            selectedImage,
        },
        functions: {
            handleSelectFileImage,
            handleImageDelete,
            handleButtonClick,
            handleSelectImage,
            inputRef
        }
    }
}