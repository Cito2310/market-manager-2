import { useCallback, useMemo } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useAppSelector } from "../../../../store/store";
import { initialFormProduct } from "../utils/InitialFormProduct";

export const useItemAddProduct = () => {
    // Form and field array
    const { register, handleSubmit, formState: { errors }, watch, control } = useForm({ defaultValues: initialFormProduct });
    
    const { fields, append, remove } = useFieldArray({ control, name: "expiration.batches" });
    const appendExpiration = useCallback(() => { append({ addedAt: new Date().getTime()+"", expirationDate: new Date().getTime()+"", initialQuantity: "0", quantity: 0 }) }, [append]);
    const removeExpiration = useCallback((index: number) => { remove(index) }, [remove]);


    // Watched data
    const name = watch("info.name");
    const brand = watch("info.brand");
    const size = watch("info.size");
    const sizeType = watch("info.sizeType");
    const category = watch("info.category");
    const subcategory = watch("info.subcategory");
    const price = watch("info.price");

    const hasExpirationControl = watch("options.hasExpirationControl");
    const hasStockControl = watch("options.hasStockControl");


    // Function onAddProduct
    const onAddProduct = handleSubmit( data => {
        console.log(data);
    });


    // Options for selects
    const emptyOption = { label: "Seleccionar", value: "" };
    const toOption = (data : string) => ({ label: data, value: data });

    const categories = useAppSelector( state => state.category.data );
    const subcategories = useMemo(() => categories.find( c => c.name === category )?.subcategories || [], [categories, category]);
    const primaryData = useMemo(() => categories.find( c => c.name === category )?.primary, [categories, category]);

    const categoriesOptions = useMemo(() => [emptyOption, ...categories.map( c => toOption(c.name) )], [categories]);
    const subcategoriesOptions = useMemo(() => [emptyOption, ...subcategories.map(sc => toOption(sc.name))], [subcategories]);
    const brandsOptions = useMemo(() => [emptyOption, ...subcategories.find( sc => sc.name === subcategory)?.brands.map(toOption) || []], [subcategories, subcategory]);

    const unitTypeOptions = [ { label: "Unidad", value: "unit" }, { label: "Por Peso", value: "weight" } ];

    const typeSizeObj = ["kg", "g", "oz", "cm3", "l", "ml", "u", "cc"]
    const typeSizeOptions = typeSizeObj.map( t => ({ label: t, value: t }) );

    
    // RETURN VALUES AND FUNCTIONS
    return {
        form: {
            register, onAddProduct
        },
        field: {
            fields, appendExpiration, removeExpiration, control
        },
        option: {
            categoriesOptions, subcategoriesOptions, brandsOptions, unitTypeOptions, typeSizeOptions
        },
        data: {
            errors, name, brand, size, sizeType, category, subcategory, price, hasExpirationControl, hasStockControl, primaryData
        }
    }
}