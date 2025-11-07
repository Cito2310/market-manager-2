import { RotationType, SizeType, UnitType } from "./ProductUtils"

export interface FormProduct {
    info: {
        name: string,
        barcode: string,
        category: string,
        subcategory: string,
        brand: string,
        size: number,
        sizeType: SizeType,
        price: number,
        unitType: UnitType,
        imgUrl?: string,
        location: string,
        primary: string
        type: "units" | "granel"
    },

    extraInfo: {
        costPrice?: number,
    },

    options: {
        hasExpirationControl: boolean,
        hasStockControl: boolean,
    },

    expiration?: {
        batches: { 
            expirationDate: string, 
            initialQuantity: string, 
            quantity: number,
            addedAt: string
        }[],
        alertExpiration?: number,
    }

    stock?: {
        currentStock: number,
        rotationType: RotationType,
        mediumStockAlert: number,
        lowStockAlert: number,
        veryLowStockAlert: number,
    }
}