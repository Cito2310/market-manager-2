import { useModalAddImages } from "../hooks/useModalAddImages"
import { ModalContainer } from "../../../components/ModalContainer"
import { Layout } from "../../../screen/product/components/Layout"
import { InputModal } from "../../../components/InputModal"


export const ModalAddImage = () => {
    const { form, data, modal } = useModalAddImages();

    return (
        <form onSubmit={ form.onSubmit }>
            <ModalContainer
                header={ { title: "Subir Imagen" } }
                config={{
                    width:600, zIndex: 150, 
                    closeModal: modal.onCloseModal, 
                    hasLoading: data.status.isLoading,
                    errorMessage: data.msgError,
                }}
                footerButtons={[
                    { label: "Cancelar", onClick: modal.onCloseModal, variant: "secondary" },
                    { label: "Subir", variant: "primary", isSubmit: true},
                ]}
            >
                <Layout.Column className="w-full">
                    {/* BODY */}
                    <div>
                        <label className="ml-1.5 mb-1 block text-[#202020]" htmlFor="name">Nombre de la imagen</label>
                        <InputModal autofocus id="name" placeholder="Nombre de la imagen" register={form.register("name")} />
                    </div>
                </Layout.Column>
            </ModalContainer>
        </form>
    )
}