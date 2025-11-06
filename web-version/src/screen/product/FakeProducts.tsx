import { Product} from "../../../types/product/Product"


export const fakeProducts: Product[] = [
  {
    _id: "prod-001",
    info: {
      name: "Agua Mineral Sin Gas",
      barcode: "7790001000012",
      category: "Agua",
      subcategory: "Agua",
      brand: "EcoWater",
      size: 1500,
      sizeType: "ml",
      price: 2.49,
      unitType: "unit",
      imgUrl: "https://picsum.photos/seed/water/640/640",
      location: "Pasillo 1",
      primary: "Bebidas",
    },
    extraInfo: {
      costPrice: 1.6,
      priceHistory: [
        { date: new Date(Date.now() - 86400e3 * 30).getTime()+"", price: 2.29 },
        { date: new Date(Date.now() - 86400e3 * 7).getTime()+"", price: 2.39 },
      ],
    },
    options: {
      hasExpirationControl: false,
      hasStockControl: true,
      isActive: true,
      hasImg: true,
    },
    stock: {
      currentStock: 120,
      rotationType: "high",
      mediumStockAlert: 80,
      lowStockAlert: 40,
      veryLowStockAlert: 15,
    },
  },
  {
    _id: "prod-002",
    info: {
      name: "Arroz Largo Fino",
      barcode: "7791234567890",
      category: "Arroz",
      subcategory: "Arroz",
      brand: "CampoDorado",
      size: 1000,
      sizeType: "g",
      price: 2444,
      unitType: "unit",
      imgUrl: "https://picsum.photos/seed/rice/640/640",
      location: "Pasillo 3",
      primary: "Alimentos",
    },
    extraInfo: {
      costPrice: 1.35,
      priceHistory: [
        { date: new Date(Date.now() - 86400e3 * 60).getTime()+"", price: 1.79 },
        { date: new Date(Date.now() - 86400e3 * 15).getTime()+"", price: 1.89 },
      ],
    },
    options: {
      hasExpirationControl: false,
      hasStockControl: true,
      isActive: true,
      hasImg: true,
    },
    stock: {
      currentStock: 75,
      rotationType: "low",
      mediumStockAlert: 60,
      lowStockAlert: 30,
      veryLowStockAlert: 10,
    },
  },
  {
    _id: "prod-003",
    info: {
      name: "Yogur Natural",
      barcode: "7790987654321",
      category: "Lácteos",
      subcategory: "Yogur",
      brand: "LactoPlus",
      size: 200,
      sizeType: "g",
      price: 0.99,
      unitType: "unit",
      imgUrl: "https://picsum.photos/seed/yogurt/640/640",
      location: "Refrigerados",
      primary: "Lácteos",
    },
    extraInfo: {
      costPrice: 0.6,
      priceHistory: [
        { date: new Date(Date.now() - 86400e3 * 20).getTime()+"", price: 0.89 },
        { date: new Date(Date.now() - 86400e3 * 5).getTime()+"", price: 0.95 },
      ],
    },
    options: {
      hasExpirationControl: true,
      hasStockControl: true,
      isActive: true,
      hasImg: true,
    },
    expiration: {
      batches: [
        {
          expirationDate: new Date(Date.now() + 86400e3 * 20).toISOString(),
          initialQuantity: "24u",
          quantity: 24,
          addedAt: new Date().toISOString(),
        },
        {
          expirationDate: new Date(Date.now() + 86400e3 * 35).toISOString(),
          initialQuantity: "30u",
          quantity: 30,
          addedAt: new Date().toISOString(),
        },
      ],
      alertExpiration: 7,
    },
    stock: {
      currentStock: 54,
      rotationType: "high",
      mediumStockAlert: 40,
      lowStockAlert: 20,
      veryLowStockAlert: 8,
    },
  },
];

export default fakeProducts;