import { ItemFooterButton } from "./ItemFooterButton"

interface props {
    loading?: boolean

    hiddenCancelButton?: boolean 
    hiddenButtonDelete?: boolean


    cancelFunction: () => void
    removeFunction?: () => void

    submitLabel: string
    submitDisabled?: boolean

    otherButtons?: {
        label: string
        onClick: () => void
    }[]
}

export const ItemFooter = ({ 
    loading,

    hiddenCancelButton, 
    hiddenButtonDelete, 

    cancelFunction, 
    removeFunction,

    submitLabel, 
    submitDisabled, 

    otherButtons,
}: props) => {
    return (
        <div className="flex gap-4 flex-wrap justify-end">

            { !hiddenCancelButton && <ItemFooterButton label="Cancelar" variant="secondary" onClick={cancelFunction} loading={loading} /> }

            {
                otherButtons?.map((button, index) => (
                    <ItemFooterButton 
                        key={index}
                        label={button.label}
                        onClick={button.onClick}
                    />
                ))
            }

            { !hiddenButtonDelete && <ItemFooterButton label="Eliminar" variant="danger" loading={loading} onClick={removeFunction} /> }

            <ItemFooterButton label={submitLabel} variant="primary" type="submit" disabled={submitDisabled} loading={loading} />

        </div>
    )
}