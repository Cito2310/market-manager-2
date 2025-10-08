import { RotationType, SizeType, UnitType } from "./ProductTypes"

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
        imgUrl: string,
    },

    extraInfo: {
        historialPrice?: { date: string, price: number }[],
        costPrice?: number,
    },

    options: {
        hasExpirationControl: boolean,
        hasStockControl: boolean,
    },

    expiration?: {
        expirationDate: string,
        alertExpiration: number,
    }

    stock?: {
        currentStock: number,
        rotationType: RotationType,
        mediumStockAlert: number,
        lowStockAlert: number,
        veryLowStockAlert: number,
    }
}