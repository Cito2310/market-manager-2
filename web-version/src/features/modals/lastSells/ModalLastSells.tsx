import { setNoneModal } from "../../../../store/modal/modalSlice"
import { useAppDispatch } from "../../../../store/store"
import { ModalContainer } from "../../../components/ModalContainer"
import { ticketsMock } from "../../../utils/TicketMock"


export const ModalLastSells = () => {
    const dispatch = useAppDispatch()

    return (
        <ModalContainer
            config={{ closeModal: () => dispatch( setNoneModal() ) }}
            header={{ title: "Ultimas Ventas" }}
        >
            <ul className="overflow-y-auto max-h-[300px]">
                {
                    ticketsMock.slice(0, 20).map( ticket => <li
                        key={ticket.id} className="
                        flex justify-between items-center gap-4
                        px-4 py-1.5 text-[#023b3b] cursor-pointer wrap-break-word capitalize
                        even:bg-slate-50 hover:bg-slate-100 active:brightness-[.94] transition-base
                        ">
                            <p>{ ticket.createdAt }</p>
                            <p>{ ticket.products.length }</p>
                            <p>{ ticket.totalPrice.toLocaleString("es-AR") }</p>
                    </li>)
                }
            </ul>
        </ModalContainer>
    )
}