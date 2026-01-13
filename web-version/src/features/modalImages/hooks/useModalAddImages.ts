import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { useControlError } from "../../../hooks/useControlError";
import { startCreateImage } from "../../../../store/image";
import { setCurrentModal } from "../../../../store/modal/modalSlice";
import { addImageValidations } from "../utils/addImageValidations";

export const useModalAddImages = () => {
    const dispatch = useAppDispatch();
    const { status, messageError } = useAppSelector( state => state.image );
    const { addImageData } = useAppSelector( state => state.modal );

    // Form name image
    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: addImageData ? addImageData.nameImage.split(".")[0] : "",
        }
    });

    // Error control
    const { msgError, setError } = useControlError( messageError );

    // Validations
    addImageValidations({ register });

    // Function onSubmit to upload image
    const onSubmit = handleSubmit(async data => {
            await dispatch(startCreateImage({
                base64: addImageData!.base64,
                nameImage: data.name,
                uploadedAt: new Date().getTime()+"",
            }));
            dispatch( setCurrentModal("viewImages") ); 
    }, (error) => { setError(error); });

    // Function onCloseModal
    const onCloseModal = () => {
        dispatch( setCurrentModal("viewImages") );
    };

    // RETURN VALUES
    return {
        form: {
            register,
            onSubmit,
        },
        data: {
            status,
            msgError,
        },
        modal: {
            onCloseModal,
        }
    }
}