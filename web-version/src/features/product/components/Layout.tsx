const Row = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`flex flex-row gap-4 w-full ${className}`}>
            {children}
        </div>
    )
}

const Column = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={`flex flex-col gap-4 ${className}`}>{children}</div>
    )
}

export const Layout = { Row, Column };