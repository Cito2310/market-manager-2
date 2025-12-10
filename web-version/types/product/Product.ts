import { SizeType, UnitType } from "./ProductUtils"

export interface Product {
    _id: string,
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
    },

    options: {
        hasExpirationControl: boolean,
        hasStockControl: boolean,
        isActive: boolean,
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
        mediumStockAlert: number,
        lowStockAlert: number,
        veryLowStockAlert: number,
    }
}