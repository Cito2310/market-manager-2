import { FormProduct } from "../../../../types/product/FormProduct";

export const initialFormProduct: FormProduct = {
    info: {
        name: "",
        barcode: "",
        category: "",
        subcategory: "",
        brand: "",
        size: 0,
        sizeType: "kg",
        price: 0,
        unitType: "unit",
    },

    options: {
        hasExpirationControl: false,
        hasStockControl: false,
    },

    expiration: {
        batches: [{ addedAt: new Date().getTime()+"", expirationDate: new Date().getTime()+"", initialQuantity: "0", quantity: 0 }],
        alertExpiration: 0,
    },

    stock: {
        currentStock: 0,
        mediumStockAlert: 0,
        lowStockAlert: 0,
        veryLowStockAlert: 0,
    },
}