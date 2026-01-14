import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { startCreateImage, startDeleteImageById, startGetImages } from "../../../../store/image";
import { avifBlobToDataUrl, blobToAvifBlob, compressionImage } from "../../../helpers/imageManager";
import { setAddImageData, setCurrentModal } from "../../../../store/modal/modalSlice";
import { usePaginate } from "../../../hooks/usePaginate";
import { useSearch } from "../../../hooks/useSearch";
import { joinData } from "../../../helpers/joinData";
import { joinArrayData } from "../../../helpers/joinArrayData";

export const useModalImages = () => {
    // Manage load images and show data
    const { data } = useAppSelector( state => state.image );
    const dispatch = useAppDispatch();
    const [selectedImage, setSelectedImage] = useState("")

    useEffect(() => {
        dispatch( startGetImages() )
    }, [])
    

    // Search input
    const { filterSearch, onSearchSubmit, registerSearch } = useSearch();
    
    // Ref
    const inputRef = useRef<HTMLInputElement>(null);

    // Filter data and sort
    const sortedAndFilteredData = filterSearch( data, joinArrayData("image", data) )

    // Control images
    const handleImageDelete = ( id: string ) => { dispatch( startDeleteImageById( id ) )};
    
    const handleSelectFileImage = async( e: React.ChangeEvent<HTMLInputElement> ) => {
        const imageFile = e.target.files?.[0];
        if (!imageFile) { e.target.value = ""; return; } ;

        try {
            const compressedFile = await compressionImage(imageFile);
            const avifBlob = await blobToAvifBlob(compressedFile);
            const base64 = await avifBlobToDataUrl(avifBlob);
            
            dispatch( setAddImageData({ base64: base64, nameImage: imageFile.name }) );
        } catch (error) { console.log(error) }
    };

    const handleButtonClick = () => { inputRef.current?.click() }; // Trigger click on hidden input file

    const handleSelectImage = ( id: string ) => { setSelectedImage(id) }; 


    // Function onCloseModal
    const onCloseModal = () => {
        dispatch( setCurrentModal("none") );
    };
    

    // Paginate data
    const { nextPage, prevPage, paginatedData, page, totalPages, isPrevDisabled, isNextDisabled } = usePaginate(sortedAndFilteredData, 14);


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
            onCloseModal,
            inputRef
        },
        search: {
            filterSearch,
            onSearchSubmit,
            registerSearch,
        }
    }
}