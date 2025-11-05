export const joinData = (type: "category" | "product", data: any): string => {
    let result = "";
   
    if (type === "category") {
        result = `${data.name} ${data._id} ${data.subcategories} ${data.primary} `;
    }

    if (type === "product") {
        result = `${data.name} ${data._id} ${data.category} ${data.price} ${data.description}`;
    }

    return result.toLowerCase().trim();
}