import { useMemo, useState } from "react";

export const useControlError = ( messageError: string | null ) => {
    const [lastErrorForm, setLastErrorForm] = useState<any | null>(null)

    // FUNCTION - Get all objects with 'message' property from a nested object
    const getObjectsWithMsg = (obj: Record<string, any>): Record<string, any>[] => {
        const objectsWithMsg: Record<string, any>[] = [];

        const recursiveGetObjectWithMsg = (current: Record<string, any>) => {
            if (current && typeof current === 'object') {
                if (Object.prototype.hasOwnProperty.call(current, 'message')) {
                    objectsWithMsg.push(current);
                    return;
                }

                Object.values(current).forEach(value => {
                    if (typeof value === 'object' && value !== null) {
                    recursiveGetObjectWithMsg(value);
                }
                });
            }
        };

        recursiveGetObjectWithMsg(obj);

        return objectsWithMsg;
    };
    
    const messageErrorForm: string = useMemo(() => getObjectsWithMsg(lastErrorForm)[0]?.message, [lastErrorForm] );


    return {
        msgError: messageErrorForm || messageError,
        setError: (a: any) => {setLastErrorForm(a); console.log(a)},
    }
}