

export const simplifyDataForSort = (type: "category" | "product", data: any) => {
    if (type === "category") {
        if ( data.subcategories === undefined ) throw new Error("data not is a Category");

        return {
            name: data.name,
            primary: data.primary,
            subcategories: data.subcategories,
        }
    }

    if (type === "product") {
        if ( data.info.price === undefined ) throw new Error("data not is a Product");

        const { info, stock } = data;


        return {
            name: `${ info.brand } ${ info.name } ${ info.size }${ info.sizeType }`,
            primary: info.primary,
            category: info.category,
            price: info.price,
            stock: stock.currentStock,
        }
    }
}