import { RotationType, SizeType, UnitType } from "./ProductUtils"

export interface ProductMongo {
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

    extraInfo: {
        priceHistory?: { date: string, price: number }[],
        costPrice?: number,
    },

    options: {
        hasExpirationControl: boolean,
        hasStockControl: boolean,
        isActive: boolean,
        hasImg: boolean,
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