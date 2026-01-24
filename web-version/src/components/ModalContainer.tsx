import { useEffect } from "react"
import { ErrorContainer } from "./ErrorContainer";
import { ItemFooterButton } from "../features/category/components/ItemCategory/ItemFooterButton";
import { Layout } from "../features/product/components/Layout";

interface HeaderModal {
    title: string;
    hiddenClose?: boolean;
}

interface FooterModalButton {
    label: string;
    variant: "primary" | "secondary" | "danger";
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    isSubmit?: boolean;
}

interface ConfigModal {
    zIndex?: number;
    width?: number;
    closeModal: () => void;
    hasLoading?: boolean;
    errorMessage?: string | null;
}

interface props {
    header: HeaderModal;
    footerButtons?: FooterModalButton[];
    config: ConfigModal;

    children: React.ReactNode
}

export const ModalContainer = ({ children, config, footerButtons, header  }: props) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = 'auto' }
    }, [])
    
    return <>
        <div style={{zIndex: ( config?.zIndex ?? 120 ) - 1 }} className="fixed top-0 left-0 w-screen h-screen bg-[#00000041]" />

        <div
            style={{ zIndex: ( config?.zIndex ?? 120 ), width: ( config?.width ?? 1000 ) }}
            className={`
                fixed translate-x-[-50%] top-[4%] left-[50%]
                bg-white font-[Montserrat] py-6 px-10 pb-8 rounded-md
                flex flex-col gap-4
                max-h-[90vh] overflow-hidden
                shadow-2xl
            `}
        >

            {/* HEADER */}
            { 
                header && <div className="flex justify-between items-center">
                    <h2 className="font-medium text-xl">{header.title}</h2>
                    <button onClick={config.closeModal} type="button" className="text-[#686868] transition-base hover:brightness-110 hover:scale-110 cursor-pointer active:brightness-150 text-xl"><i className="fa-solid fa-xmark "/></button>
                </div>
            }

            {/* BODY */}
            {children}

            {/* FOOTER */}
            {
                footerButtons && 
                <div>
                    { config.errorMessage && <ErrorContainer messageError={config.errorMessage} /> }
                    <Layout.Row className="justify-end">
                        {
                            footerButtons.map((button, index) => (
                                <ItemFooterButton
                                    key={index}
                                    label={button.label}
                                    variant={button.variant}
                                    onClick={button.onClick}
                                    className={button.className}
                                    disabled={button.disabled}
                                    type={button.isSubmit ? "submit" : "button"}
                                    loading={config.hasLoading}
                                />
                            ))
                        }
                    </Layout.Row>
                </div>

            }
        </div>
    </>
}