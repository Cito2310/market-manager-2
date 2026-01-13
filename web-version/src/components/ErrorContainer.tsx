interface props {
    messageError: string;
}

export const ErrorContainer = ({ messageError }: props) => {
    return (
        // <div className="text-right w-full bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded relative" role="alert">
        <div className="text-right w-full text-red-700 pr-1 py-1 rounded" role="alert">
            <strong className="font-bold">Error!</strong> {messageError}
        </div>
    )
}