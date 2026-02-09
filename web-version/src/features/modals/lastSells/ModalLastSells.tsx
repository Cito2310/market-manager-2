import { setNoneModal } from "../../../../store/modal/modalSlice"
import { useAppDispatch } from "../../../../store/store"
import { ModalContainer } from "../../../components/ModalContainer"

const mockSells = [
    
]

export const ModalLastSells = () => {
    const dispatch = useAppDispatch()

    return (
        <ModalContainer
            config={{ closeModal: () => dispatch( setNoneModal() ) }}
            header={{ title: "Ultimas Ventas" }}
        >
            Last Sells Modal
        </ModalContainer>
    )
}