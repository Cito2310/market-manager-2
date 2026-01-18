import { FormProduct } from "../../../../types/Product";

export const clearExpiration = {
    batches: [{ 
        addedAt: new Date().toISOString().slice(0,10), 
        expirationDate: new Date().toISOString().slice(0,10),
        quantity: 0,
    }],
    alertExpiration: 0,
}

export const clearStock = {
    currentStock: 0,
    mediumStockAlert: 0,
    lowStockAlert: 0,
    veryLowStockAlert: 0,
}

export const initialFormProduct: FormProduct = {
    info: {
        name: "da",
        barcode: "777959424407",
        category: "gaseosas",
        subcategory: "gaseosas",
        brand: "sprite",
        size: 1,
        sizeType: "kg",
        price: 0,
        unitType: "unit",
    },

    options: {
        hasExpirationControl: false,
        hasStockControl: true,
    },

    expiration: clearExpiration,

    stock: clearStock,

    extrainfo: {
        associatedProduct: null,
    }

}