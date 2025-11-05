import { ItemFooterButton } from "./ItemFooterButton"

interface props {
    loading?: boolean

    hiddenCancelButton?: boolean 
    hiddenButtonDelete?: boolean


    cancelFunction: () => void
    removeFunction?: () => void

    submitLabel: string
    submitDisabled?: boolean
}

export const ItemFooter = ({ 
    loading,

    hiddenCancelButton, 
    hiddenButtonDelete, 

    cancelFunction, 
    removeFunction,

    submitLabel, 
    submitDisabled, 
}: props) => {
    return (
        <div className="flex gap-4 flex-wrap justify-end">

            { !hiddenCancelButton && <ItemFooterButton label="Cancelar" variant="secondary" onClick={cancelFunction} loading={loading} /> }

            { !hiddenButtonDelete && <ItemFooterButton label="Eliminar Categoria" variant="danger" loading={loading} onClick={removeFunction} /> }

            <ItemFooterButton label={submitLabel} variant="primary" type="submit" disabled={submitDisabled} loading={loading} />

        </div>
    )
}