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
        imgUrl: string | null,
        primary: string,
    },

    options: {
        hasExpirationControl: boolean,
        hasStockControl: boolean,
        isActive: boolean,
    },

    expiration: {
        batches: { 
            expirationDate: string, 
            initialQuantity: string, 
            quantity: number,
            addedAt: string
        }[],
        alertExpiration?: number,
    }

    stock: {
        currentStock: number,
        mediumStockAlert: number,
        lowStockAlert: number,
        veryLowStockAlert: number,
    }

    extrainfo: {
        priceHistory: { date: string, price: number }[],
        associatedProduct: string | null,
    }
}


export type SizeType = "kg" | "g" | "oz" | "cm3" | "l" | "ml" | "u" | "cc";

export type UnitType = "unit" | "weight";



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
    },

    options: {
        hasExpirationControl: boolean,
        hasStockControl: boolean,
    },

    expiration: {
        batches: { 
            expirationDate: string, 
            initialQuantity: string, 
            quantity: number,
            addedAt: string
        }[],
        alertExpiration: number,
    }

    stock: {
        currentStock: number,
        mediumStockAlert: number,
        lowStockAlert: number,
        veryLowStockAlert: number,
    }

    extrainfo: {
        associatedProduct: string | null,
    }

}