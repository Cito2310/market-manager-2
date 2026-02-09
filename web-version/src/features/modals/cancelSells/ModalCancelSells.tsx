import { useForm } from "react-hook-form";
import { setNoneModal } from "../../../../store/modal/modalSlice";
import { useAppDispatch } from "../../../../store/store";
import { ModalContainer } from "../../../components/ModalContainer"
import { resetCurrentTab } from "../../../../store/pointOfSale/pointOfSaleSlice";

export const ModalCancelSells = () => {
    const dispatch = useAppDispatch();
    const { handleSubmit } = useForm();

    const onResetSell = handleSubmit( data => {
        dispatch( setNoneModal() );
        dispatch( resetCurrentTab() );
    })
        
    return (
        <form onSubmit={onResetSell}>
            <ModalContainer
                config={{ closeModal: () => dispatch( setNoneModal() ),  width: 600 }}
                header={{ title: "Cancelar venta" }}
                footerButtons={[
                    { label: "Cerrar", variant: "secondary", onClick: () => dispatch( setNoneModal() ), autofocus: true },
                    { label: "Cancelar Venta", variant: "danger", isSubmit: true },
                ]}
            >
                <p>¿Estás seguro de que deseas cancelar la venta?</p>
            </ModalContainer>
        </form>
    )
}