import { Ticket } from "../../types/ticket";

export const ticketsMock: Ticket[] = [
  {
    id: "1",
    products: [
      { productId: "p1", productPrice: 100, productName: "Manzana", quantity: 2 },
      { productId: "p2", productPrice: 50, productName: "Pan", quantity: 1 }
    ],
    totalPrice: 250,
    createdAt: "2026-02-09T10:00:00Z",
    numberDate: "09-02-2026",
    payMethods: [
      { method: "cash", quantity: 200 },
      { method: "debit", quantity: 50 }
    ],
    optionals: {
      discount: 0,
      print: true,
      report: "Venta diaria",
      debt: null
    }
  },
  {
    id: "2",
    products: [
      { productId: "p3", productPrice: 80, productName: "Leche", quantity: 1 }
    ],
    totalPrice: 80,
    createdAt: "2026-02-09T11:00:00Z",
    numberDate: "09-02-2026",
    payMethods: [
      { method: "credit", quantity: 80 }
    ],
    optionals: {
      discount: 5,
      print: false,
      report: "",
      debt: null
    }
  },
  {
    id: "3",
    products: [
      { productId: "p4", productPrice: 120, productName: "Queso", quantity: 1 },
      { productId: "p5", productPrice: 60, productName: "Jamon", quantity: 2 }
    ],
    totalPrice: 240,
    createdAt: "2026-02-09T12:00:00Z",
    numberDate: "09-02-2026",
    payMethods: [
      { method: "transfer-juan", quantity: 240 }
    ],
    optionals: {
      discount: 10,
      print: true,
      report: "Venta especial",
      debt: null
    }
  },
  {
    id: "4",
    products: [
      { productId: "p6", productPrice: 30, productName: "Galletas", quantity: 3 }
    ],
    totalPrice: 90,
    createdAt: "2026-02-09T13:00:00Z",
    numberDate: "09-02-2026",
    payMethods: [
      { method: "qr", quantity: 90 }
    ],
    optionals: {
      discount: 0,
      print: false,
      report: "",
      debt: null
    }
  },
  {
    id: "5",
    products: [
      { productId: "p7", productPrice: 200, productName: "Carne", quantity: 1 }
    ],
    totalPrice: 200,
    createdAt: "2026-02-09T14:00:00Z",
    numberDate: "09-02-2026",
    payMethods: [
      { method: "transfer-raul", quantity: 150 },
      { method: "cash", quantity: 50 }
    ],
    optionals: {
      discount: 20,
      print: true,
      report: "Venta con descuento",
      debt: {
        amount: 50,
        against: true,
        clientName: "Juan Perez"
      }
    }
  },
  {
    id: "6",
    products: [
      { productId: "p8", productPrice: 70, productName: "Yogurt", quantity: 2 }
    ],
    totalPrice: 140,
    createdAt: "2026-02-09T15:00:00Z",
    numberDate: "09-02-2026",
    payMethods: [
      { method: "transfer-ale", quantity: 140 }
    ],
    optionals: {
      discount: 0,
      print: false,
      report: "",
      debt: null
    }
  }
];