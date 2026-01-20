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

    messageError?: string
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
    messageError,
}: props) => {
    return (
        <>

            {
                messageError && (
                    <div className="text-right w-full bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
                        <strong className="font-bold">Error!</strong> {messageError}
                    </div>
            )}

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
        </>
    )
}