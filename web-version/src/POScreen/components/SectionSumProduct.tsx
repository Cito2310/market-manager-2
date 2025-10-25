import { ListItemPOS } from "./ListItemPOS";

export const SectionSumProduct = () => (
    <div className={`
        mt-8 h-[calc(100vh-2rem)] overflow-y-auto bg-gray-100
        flex flex-col w-[60%] justify-between
    `}>
        <div className="">
            <table className="w-full">
                <thead className="bg-[#d5e0e0] text-[#7e9292]">
                    <tr>
                        <th className="text-left px-4 py-2">PRODUCTOS</th>
                        <th className="py-2 w-[16%]">CANTIDAD</th>
                        <th className="py-2 w-[16%]">P. UNIDAD</th>
                        <th className="py-2 w-[16%]">P. TOTAL</th>
                        <th className="py-2 w-[4%]"></th>
                    </tr>
                </thead>


                <tbody>
                    <ListItemPOS productName="Morixe Harina" unit={3} priceUnit="$ 800" priceTotal="$ 3.200" />
                    <ListItemPOS productName="Cañuelas Aceite de Girasol" unit={2} priceUnit="$ 2.400" priceTotal="$ 4.800" />
                    <ListItemPOS productName="Cabalgata Gaseosa Cola" unit={1} priceUnit="$ 1.700" priceTotal="$ 1.700" />
                    <ListItemPOS productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 3.400" />
                    <ListItemPOS productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 3.400" />
                    <ListItemPOS productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 3.400" />
                    <ListItemPOS productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 3.400" />
                    <ListItemPOS productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 3.400" />
                    <ListItemPOS productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 3.400" />
                    <ListItemPOS productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 3.400" />
                    <ListItemPOS productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 3.400" />
                    <ListItemPOS productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 3.400" />
                    <ListItemPOS productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 3.400" />
                    <ListItemPOS productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 3.400" />
                    <ListItemPOS productName="Cabalgata Gaseosa Lima" unit={2} priceUnit="$ 1.700" priceTotal="$ 5.400" />
                </tbody>
            </table>
        </div>

        <h2 className="sticky bottom-0 w-full font-medium text-right text-3xl py-2 px-4 border-t border-[#7e9292] bg-white">$ 12.400,00</h2>
    </div>
)
