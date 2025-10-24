import { CustomValidator } from "express-validator";

export const basicValidationsString = (
    property: string,
    options?: {
        minLength?: number,
        maxLength?: number,
    },
): CustomValidator => {
    return async ( value: any, { req }: any ) => {
        // Validate type string and not empty
        if ( typeof value !== "string" || value.trim() === "" ) throw new Error("invalid string");

        // Clean string
        const cleaned = value
            .replace(/[\x00-\x1F\x7F]/g, "")
            .replace(/\s+/g, " ")
            .trim()
            .normalize("NFC");

        // Validate length
        if (cleaned.length < (options?.minLength || 2) || cleaned.length > (options?.maxLength || 100)) {
            throw new Error(`${property} length must be between ${options?.minLength || 2} and ${options?.maxLength || 100}`);
        }

        // Validate allowed characters
        const validCharacters = /^[A-Za-z0-9ÁÉÍÓÚáéíóúÑñÜü .,'\-()\/]+$/;
        if (!validCharacters.test(cleaned)) {
            throw new Error(`${property} contains invalid characters`);
        }

        // Replace original value with cleaned value
        if (!req.body) req.body = {};
        if (!req.body.info) req.body.info = {};
        req.body[property] = cleaned;

        return true;
    }
}