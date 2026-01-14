export const joinData = (type: "category" | "product" | "image", data: any): string => {
    let result = "";
   
    if (type === "category") {
        result = `${data.name} ${data._id} ${JSON.stringify(data.subcategories)} ${data.primary} `;
    }

    if (type === "product") {
        result = `${data.name} ${data._id} ${data.category} ${data.price} ${data.description}`;
    }

    if (type === "image") {
        result = `${data.nameImage} ${data._id}`;
    }

    return result.toLowerCase().trim();
}