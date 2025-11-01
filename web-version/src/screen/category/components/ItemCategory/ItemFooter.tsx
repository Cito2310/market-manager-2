import { ItemFooterButton } from "./ItemFooterButton"

interface props {
    hiddenCancelButton?: boolean 
    hiddenButtonDelete?: boolean


    cancelFunction: () => void
    removeFunction?: () => void

    submitLabel: string
    submitDisabled?: boolean
    submitLoading?: boolean
}

export const ItemFooter = ({ 
    hiddenCancelButton, 
    hiddenButtonDelete, 

    cancelFunction, 
    removeFunction,

    submitLabel, 
    submitDisabled, 
    submitLoading
}: props) => {
    return (
        <div className="flex gap-4 flex-wrap justify-end">

            { !hiddenCancelButton && <ItemFooterButton label="Cancelar" variant="secondary" onClick={cancelFunction} /> }

            { !hiddenButtonDelete && <ItemFooterButton label="Eliminar Categoria" variant="danger" onClick={removeFunction} /> }

            <ItemFooterButton label={submitLabel} variant="primary" type="submit" disabled={submitDisabled} loading={submitLoading} />

        </div>
    )
}