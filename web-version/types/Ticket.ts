export interface ProductTicket {
    productId: string;
    productPrice: number;
    productName: string;
    quantity: number;
}

export interface Ticket {
    id: string;
    products: ProductTicket[];
    totalPrice: number;
    createdAt: string;
    numberDate: string;
    
    payMethods: {
        method: "cash" | "debit" | "credit" | "transfer-juan" | "transfer-raul" | "transfer-ale";
        quantity: number;
    }[]

    optionals: {
        discount: number;
        print: boolean;
        report: string;
        debt: {
            amount: number;
            against: boolean;
            clientName: string;
        }
    }
}