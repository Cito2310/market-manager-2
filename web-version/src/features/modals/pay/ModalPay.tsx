import { useFieldArray, useForm } from "react-hook-form";
import { setNoneModal } from "../../../../store/modal/modalSlice";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { ModalContainer } from "../../../components/ModalContainer"
import { ContainerData } from "../../product/components/ContainerData";
import { Layout } from "../../product/components/Layout";
import { TableMethodPay } from "./TableMethodPay";
import { InputCheckbox } from "../../product/components/ItemProduct/InputCheckbox";

export const ModalPay = () => {
    const dispatch = useAppDispatch();
    const { payData } = useAppSelector( state => state.modal );
    const { control, register, watch } = useForm({ defaultValues: { 
        payMethods: [{ method: payData?.payMethod, quantity: payData?.totalPrice }], 
        discount: false,
        print: false,
        report: false,
        debt: false,
        options: {
            discount: 0,
            reportTxt: "",
            debt: { amount: 0, client: "", against: false }
        }
    } });
    const { append, remove, fields } = useFieldArray({ control, name: "payMethods" });


    return (
        <ModalContainer
            header={{ title: "Cobrar" }}
            config={{ closeModal: () => dispatch(setNoneModal()), width: 1000  }}
            footerButtons={[
                {label: "Cancelar", variant: "secondary", onClick: () => dispatch(setNoneModal()), className: "w-full"},
                {label: "Cobrar", variant: "primary", onClick: () => console.log("TODO"), className: "w-full"}
            ]}
        >
            <Layout.Row>
                <Layout.Column className="w-[65%] overflow-y-auto max-h-[380px]">
                    <ContainerData label="Metodo de Pago">
                        <TableMethodPay appendField={append} removeField={remove} fields={fields} register={register} />
                    </ContainerData>

                    <ContainerData label="Opciones">
                        <Layout.Row className="gap-4">
                            <InputCheckbox icon="percent" label="Descuento" register={register("discount")} />
                            <InputCheckbox icon="receipt" label="Imprimir" register={register("print")} />
                        </Layout.Row>
                        <Layout.Row className="gap-4">
                            <InputCheckbox icon="file-lines" label="Reporte" register={register("report")} />
                            <InputCheckbox icon="sack-dollar" label="Deuda" register={register("debt")} />
                        </Layout.Row>
                        <Layout.Column className="mt-2">
                            {
                                watch("discount") && (
                                    <label className="w-full flex gap-4 ml-2">
                                        Descuento: 
                                        <div className="relative h-full flex items-center grow">
                                            <span className="absolute left-3 text-[#7e9292] text-lg select-none">%</span>
                                            <input
                                                className="pl-8 h-full grow border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base text-left"
                                                type="number"
                                                min={0}
                                                placeholder="Descuento"
                                                {...register(`options.discount`)}
                                            />
                                        </div>
                                    </label>
                                )
                            }

                            {
                                watch("report") && (
                                    <label className="w-full flex gap-4 ml-2">
                                        Reporte:
                                        <input
                                            className="h-full grow border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base text-left"
                                            type="text"
                                            placeholder="Reporte"
                                            {...register(`options.reportTxt`)}
                                        />
                                    </label>
                                )
                            }

                            {
                                watch("debt") && <>
                                    <label className="w-full flex gap-4 ml-2">
                                        Cliente:
                                        <input
                                            className="h-full grow border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base text-left"
                                            type="text"
                                            placeholder="Cliente"
                                            {...register(`options.debt.client`)}
                                        />
                                    </label>

                                    <label className="w-full items-center flex gap-4 ml-2">
                                        Deuda:
                                        <input
                                            className="h-full border-b-2 border-[#d5e0e0] px-1 py-1 outline-none focus:border-[#7e9292] transition-base text-left"
                                            type="number"
                                            width={10}
                                            min={0}
                                            placeholder="Deuda"
                                            {...register(`options.debt.amount`)}
                                        />
                                        <InputCheckbox icon="sack-dollar" label="En contra" register={register("options.debt.against")}></InputCheckbox>
                                    </label>
                                </>
                            }
                        </Layout.Column>
                    </ContainerData>
                </Layout.Column>

                <Layout.Column className="w-[35%]">
                    <ContainerData label="Cargos" className="h-full">
                        <table>
                            <thead>
                                <tr>
                                    <th></th><th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{ payData?.products.length } Producto</td><td className="text-center">${ Number(payData?.totalPrice).toLocaleString("es-AR") }</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="grow"></div>

                        <div className="flex flex-col justify-between py-2 border-t border-[#00000012]">
                            <div className="flex justify-between w-full">
                                <p className="font-medium text-[#008080]">TOTAL</p>
                                <p className="font-semibold text-[#008080]">$ { Number(payData?.totalPrice).toLocaleString("es-AR") }</p>
                            </div>

                            <ul className="ml-4 flex flex-col gap-0.5 text-sm">
                                {
                                    fields.map( ( field, index ) => (
                                        <li key={field.id} className="flex justify-between gap-2">
                                            <span className="text-[#008080]">• { field.method === "cash" ? "Efectivo" : field.method === "debit" ? "Debito" : field.method === "credit" ? "Credito" : "Transferencia" }</span>
                                            <span className="text-[#536464]">${ Number(watch(`payMethods.${index}.quantity`)).toLocaleString("es-AR") }</span>
                                        </li>
                                    ) )
                                }
                            </ul>
                        </div>
                    </ContainerData>

                </Layout.Column>
            </Layout.Row>
        
        </ModalContainer>
    )
}