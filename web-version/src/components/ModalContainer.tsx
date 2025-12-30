import { useEffect } from "react"
import { ItemFooterButton } from "../screen/category/components/ItemCategory/ItemFooterButton";
import { Layout } from "../screen/product/components/Layout";

interface props {
    children: React.ReactNode
    closeModal: () => void
    title?: string;
    header?: boolean;
    footerButtons?: {
        label: string;
        variant: "primary" | "secondary" | "danger";
        onClick: () => void;
        className?: string;
    }[]
}

export const ModalContainer = ({ children, closeModal, title, header = true, footerButtons }: props) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = 'auto' }
    }, [])
    

    return <>
        <div className="fixed top-0 left-0 w-screen h-screen bg-[#00000041] z-100" />

        <div
            className={`
                fixed translate-x-[-50%] top-[4%] left-[50%] z-120
                bg-white font-[Montserrat] py-6 px-10 pb-8 w-[1000px] rounded-md
                flex flex-col gap-4
                max-h-[90vh] overflow-hidden
                shadow-2xl
            `}
        >

            {/* HEADER */}
            { 
                header && <div className="flex justify-between items-center">
                    <h2 className="font-medium text-xl">{title}</h2>
                    <button className="text-[#686868]"><i className="fa-solid fa-xmark text-xl"/></button>
                </div>
            }

            {/* BODY */}
            {children}

            {/* FOOTER */}
            {
                footerButtons && <Layout.Row className="justify-end">
                    {
                        footerButtons.map((button, index) => (
                            <ItemFooterButton
                                key={index}
                                label={button.label}
                                variant={button.variant}
                                onClick={button.onClick}
                                className={button.className}
                            />
                        ))
                    }
                </Layout.Row>
            }
        </div>
    </>
}