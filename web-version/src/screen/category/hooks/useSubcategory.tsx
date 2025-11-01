import { useFieldArray } from "react-hook-form";

export const useSubcategory = (index: number, control: any) => {
    const { fields, append, remove } = useFieldArray({ name: `subcategories.${index}.brands`, control });

    return { fieldsBrand: fields, appendBrand: () => {append("")}, removeBrand: remove };
}