import { FooterButtonProps } from "../../types/TypeUtils";
import { ItemFooterButton } from "../screen/category/components/ItemCategory/ItemFooterButton";
import { Layout } from "../screen/product/components/Layout";
import { ErrorContainer } from "./ErrorContainer";

interface ConfigFormCard {
    hasLoading?: boolean;
    errorMessage?: string | null;
    onSubmit: () => void;
    height: string | number;
}

interface props {
    footerButtons: FooterButtonProps[];
    config: ConfigFormCard;

    children: React.ReactNode
}

export const FormCardContainer = ({ children, config, footerButtons }: props) => {
    console.log(config)
    return (
        <tr>
            <td colSpan={10}>
                <form onSubmit={config.onSubmit} style={{height: config.height}} className={`
                    ${ config.height !== 0 ? "px-6 py-5" : "" }
                    bg-white flex flex-col gap-8
                    transition-base overflow-hidden shadow-md shadow-[#8f8f8f] rounded-b-md
                `}>
                    {/* START BODY */}
                    <div className="flex gap-8">
                        { children }
                    </div>
                    {/* END BODY */}

                    {/* START FOOTER */}
                    <div>
                        { config.errorMessage && <ErrorContainer messageError={config.errorMessage} /> }

                        <Layout.Row className="justify-end">
                            { footerButtons.map( (button, index) => (
                                <ItemFooterButton
                                    key={index+"footer-button"}
                                    label={button.label}
                                    variant={button.variant}
                                    onClick={button.onClick}
                                    className={button.className}
                                    disabled={button.disabled}
                                    type={button.isSubmit ? "submit" : "button"}
                                    loading={config.hasLoading}
                            />)) }
                        </Layout.Row>
                    </div>
                    {/* END FOOTER */}
                </form>
            </td>
        </tr>
    )
}