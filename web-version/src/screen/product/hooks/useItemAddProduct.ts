import { startCreateProduct } from './../../../../store/productSlice.ts/thunks';
import { useCallback, useEffect, useMemo, useState } from "react";
import { useFieldArray, useForm, useFormState } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { initialFormProduct } from "../utils/initialFormProduct";
import { productAddValidations } from '../utils/productAddValidations';

export const useItemAddProduct = () => {
    const dispatch = useAppDispatch();
    const { status, messageError } = useAppSelector( state => state.product );
    const [lastErrorForm, setLastErrorForm] = useState<any | null>(null)


    // Form and field array
    const { register, handleSubmit, formState, watch, control, getValues } = useForm({ defaultValues: initialFormProduct });
    console.log(getValues())

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
    const onAddProduct = handleSubmit( async data => {
            try {
                await dispatch( startCreateProduct(data) );
            } catch (error) {}
        }, (error) => { setLastErrorForm(error); }
    );


    // Validations
    productAddValidations({ register });


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


    // Message error form
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

    const messageErrorForm = useMemo(() => getObjectsWithMsg(lastErrorForm)[0]?.message, [lastErrorForm] );


    
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
            hasError: Object.keys(formState.errors).length > 0 || status.hasError,
            // @ts-ignore
            messageError: messageErrorForm || messageError,
            status,
            name, brand, size, sizeType, category, subcategory, price, hasExpirationControl, hasStockControl, primaryData
        }
    }
}