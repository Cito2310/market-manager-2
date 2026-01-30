import { Product } from './Product';

export interface POSProduct {
    product: Product;
    quantity: number;
}

export interface ProductTicket {
    productId: string;
    productPrice: number;
    productName: string;
    quantity: number;
}