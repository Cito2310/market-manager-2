import { TypeJoinData } from "../../types/TypeUtils";

export const joinArrayData = (type: TypeJoinData, data: any[]): string[] => {
    let result: string[] = [];
    if ( type === "category" ) {
        result = data.map( item => `${item.name} ${item._id} ${JSON.stringify(item.subcategories)} ${item.primary} ` );
    }
    if ( type === "product" ) {
        result = data.map( item => JSON.stringify(item) );
    }
    if ( type === "image" ) {
        result = data.map( item => `${item.nameImage} ${item._id}` );
    }

    return result.map( str => str.toLowerCase().trim() );
}