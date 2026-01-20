import { useEffect, useRef } from "react"

interface propsStockBar {
    lowStock: number
    currentStock: number
}

const dataStock = {
    goodStock: ["#79B26A", "#E3FCDD", "Alto"],
    lowStock: ["#d3d679", "#edf5be", "Bajo"],
    veryLowStock: ["#e49359", "#FFD9D6", "Muy bajo"],
    outStock: ["#FFD9D6", "#dd656f", "Sin Stock"],
}

export const StockBar = ({ currentStock, lowStock }: propsStockBar) => {
    const getStatusStock = () => {
        const resultStock = currentStock / lowStock
        const statusStock = resultStock === 0 ? "outStock"
                            : resultStock <= 0.5 ? "veryLowStock"
                            : resultStock <= 1 ? "lowStock" 
                            : "goodStock"
                            
        return {
            bgColor: dataStock[statusStock][1],
            barColor: dataStock[statusStock][0],
            text: dataStock[statusStock][2],
            percentage: resultStock/2*100 > 100 ? 100 : resultStock/2*100
        }
    }


    const refBar = useRef<null | HTMLDivElement >(null);
    useEffect(() => {
        if ( refBar.current ) refBar.current.style.width = `${getStatusStock().percentage}%`
    }, [])

    return <td className="">
        
        <p className="text-sm font-medium mx-6">{currentStock} - {getStatusStock().text}</p>
        <div className="mx-5">
        <div style={{backgroundColor: getStatusStock().bgColor}} className={`w-full h-2 rounded-lg`}>
            <div ref={refBar} style={{backgroundColor: getStatusStock().barColor}} className={`transition-all h-full rounded-lg`}/>
        </div>
        </div>
    </td> 

}