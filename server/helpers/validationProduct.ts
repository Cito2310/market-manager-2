import { CustomValidator } from "express-validator";
import { Product } from "../apis/product/productModels";

export type Operator = "<" | "<=" | ">" | ">=" | "==" | "!=";


// P R O D U C T
export const uniqueId: CustomValidator = async ( id: string ) => {
    const product = await Product.findOne({ _id: id });

    if ( product ) throw new Error;

    return true;
}

export const dateValid: CustomValidator = async ( dateStr: string ) => {
    const date = new Date(dateStr);

    if ( isNaN( date.getTime() ) ) throw new Error;

    return true;
}

export const compareWithValid = (
    operator: Operator,
    otherPath: string,
): CustomValidator => {
    return async ( value: number, { req }: any ) => {
        function getNestedProperty(obj: any, path: string) {
            return path.split('.').reduce((acc, part) => acc && acc[part], obj);
            }
        const otherValue = getNestedProperty(req.body, otherPath);

        if (otherValue === undefined || otherValue === null || otherValue === '') {
            throw new Error();
        }

        switch (operator) {
            case "<":
                if (value >= otherValue) throw new Error();
                break;
            case "<=":
                if (value > otherValue) throw new Error();
                break;
            case ">":
                if (value <= otherValue) throw new Error();
                break;
            case ">=":
                if (value < otherValue) throw new Error();
                break;
            case "==":
                if (value !== otherValue) throw new Error();
                break;
            case "!=":
                if (value === otherValue) throw new Error();
                break;
        }
    }
}