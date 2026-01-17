import { useEffect, useMemo } from "react"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { setCurrentModal, setSelectedImageData } from "../../store/modal/modalSlice"

export const useImageSelect = ( imgUrl: string | undefined, setValue: any ) => {
    const dispatch = useAppDispatch();
    const { selectedImageData } = useAppSelector( state => state.modal )
    const { data } = useAppSelector( state => state.image )

    // Active viewImages modal
    const onModalImage = () => {
        dispatch( setCurrentModal("viewImages") );
    }

    // When select image in viewImages, change selectedImageData and set imgUrl in form
    useEffect(() => {
        if ( selectedImageData ) { setValue("info.imgUrl", selectedImageData.id) }
        
        return () => { dispatch( setSelectedImageData({ id: "", reset: true }) )}
    }, [selectedImageData])

    // Get base64 and name of selected image
    const imageData = useMemo(() => data.find(image => image._id === imgUrl), [ imgUrl, data ])

    return {
        imgBase64: imageData?.base64 || null,
        imgName: imageData?.nameImage || null,
        onModalImage
    }
}