PRODUCT MODEL DATA
    info: {
        name: Nombre del Producto y algunos detalles, como sabor, tipo, etc.
        category: Categoria del Producto
        subcategory: Subcategoria del Producto
        barcode: Codigo de barra del Producto
        brand: Marca del Producto
        size: Tamaño del Producto
        sizeType: Tipo del tamaño del producto mostrado
        price: Precio
        unitType: Tipo de venta del producto
        imgUrl: Url de la imagen del producto
        location: Ubicación del Producto en estanteria - NECESARIO PARA ORDENARLO -
        primary: Tipo de producto primario - ESTE SE INSERTA DE FORMA INTERNA DEPENDE DEL CATEGORY -
    }


    _id: Id interno del producto - ESTE SE INSERTA DE FORMA INTERNA -


    extraInfo: {
        priceHistory: Array que contiene los precios historicos del Producto - ESTE SE MANEJA DE FORMA INTERNA AL EDITAR - 
        costPrice: Precio de compra del producto
        createdAt: Fecha de la creacion del producto - SE MANEJA DE FORMA INTERNA -
        createdBy: Usuario que creo el producto - SE MANEJA DE FORMA INTERNA -
        updatedAt: Fecha de la ultima actualizacion del producto - SE MANEJA DE FORMA INTERNA -
    }


    options: {
        hasExpirationControl: Boolean que muestra si esta habilitado el control de la expiracion
        hasStockControl: Boolean que indica si esta habilitado la opcion de control de stock
        isActive: Boolean que indica si este producto se puede mostrar
        hasImg: Boolean que indica si este producto contiene imagen - SE MANEJA DE FORMA INTERNA DEPENDE DEL ImgUrl
    }


    stock: {
        currentStock: Stock actual
        veryLowStockAlert: alarma de muy bajo stock
        lowStockAlert: alarma de bajo stock
        mediumStockAlert: alarma de stock medio
    }


    expiration: {
        alertExpiration: indica a cuantos dias mostrar la alerta de vencimiento
        batches: [
            expirationDate: fecha de expiracon
            initialQuantity: cantidad inicial
            quantity: cantidad acutal
            addedAt: fecha de cuando se añadio esta expiracion: - SE MANEJA DE FORMA INTERNA -
        ]
    }