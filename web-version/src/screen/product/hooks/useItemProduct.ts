import { startUpdateProductById } from './../../../../store/product/thunks';
import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from "react";
import { useFieldArray, useForm, useFormState } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { productAddValidations } from '../utils/productAddValidations';
import { Product } from '../../../../types/Product';
import { FormProduct } from '../../../../types/Product';
import { useControlError } from '../../../hooks/useControlError';
import { useImageSelect } from '../../../hooks/useImageSelect';
import { clearExpiration, clearStock } from '../utils/initialFormProduct';

interface props {
    product: Product,
    setOpen: Dispatch<SetStateAction<string | null>>;
    isOpen?: boolean;
}


export const useItemProduct = ({ product, setOpen, isOpen }: props) => {
    const dispatch = useAppDispatch();
    const { status, messageError } = useAppSelector( state => state.product );
    const { msgError, setError } = useControlError( messageError );
    const { register, handleSubmit, getValues, watch, control, reset, setValue } = useForm<FormProduct>({ defaultValues: product });
    const { imgBase64, imgName, onModalImage } = useImageSelect( watch("info.imgId"), setValue );


    // Reset form when product changes
    useEffect(() => { reset(product) }, [product]);

    // Manage height for details menu
    const [height, setHeight] = useState<number | string>(0)
    const toggleDetailsMenu = () => {
        if ( height === 0 ) { setHeight("auto") ; setOpen(product._id) }
        if ( height !== 0 ) { setHeight(0)      ; setOpen(prev => prev === product._id ? null : prev); reset() }
    }

    useEffect(() => {
    if (typeof isOpen === "boolean") {
        if (isOpen && height === 0) toggleDetailsMenu();
        if (!isOpen && height !== 0) toggleDetailsMenu();
    }
    }, [isOpen]);


    // Form and field array
    const { fields, append, remove } = useFieldArray({ control, name: "expiration.batches" });
    const appendExpiration = useCallback(() => { append({
        addedAt: new Date().toISOString().slice(0,10), 
        expirationDate: new Date().toISOString().slice(0,10), 
        quantity: 0 }) }
    ,[append]);
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
    const onSaveData = handleSubmit( async data => {
            try {
                setError(null);
                if ( getValues("options.hasExpirationControl") === false ) setValue("expiration", clearExpiration);
                if ( getValues("options.hasStockControl") === false ) setValue("stock", clearStock);
                await dispatch( startUpdateProductById(product._id, data) );
                toggleDetailsMenu();
            } catch (error) {}
        }, (error) => { setError(error); }
    );


    // Validations
    productAddValidations({ register, getValues });


    // Options for selects
    const emptyOption = { label: "Seleccionar", value: "" };
    const toOption = (data : string) => ({ label: data, value: data });

    const categories = useAppSelector( state => state.category.data );
    const subcategories = useMemo(() => categories.find( c => c.name === category )?.subcategories || [], [categories, category]);
    const primary = useMemo(() => categories.find( c => c.name === category )?.primary || "", [categories, category]);

    const categoriesOptions = useMemo(() => [emptyOption, ...categories.map( c => toOption(c.name) )], [categories]);
    const subcategoriesOptions = useMemo(() => [emptyOption, ...subcategories.map(sc => toOption(sc.name))], [subcategories]);
    const brandsOptions = useMemo(() => [emptyOption, ...subcategories.find( sc => sc.name === subcategory)?.brands.map(toOption) || []], [subcategories, subcategory]);

    const unitTypeOptions = [ { label: "Unidad", value: "unit" }, { label: "Por Peso", value: "weight" } ];

    const typeSizeObj = ["kg", "g", "oz", "cm3", "l", "ml", "u", "cc"]
    const typeSizeOptions = typeSizeObj.map( t => ({ label: t, value: t }) );


    
    // RETURN VALUES AND FUNCTIONS
    return {
        detailsMenu: {
            height, toggleDetailsMenu
        },
        form: {
            register, onSaveData, onModalImage
        },
        field: {
            fields, appendExpiration, removeExpiration, control
        },
        option: {
            categoriesOptions, subcategoriesOptions, brandsOptions, unitTypeOptions, typeSizeOptions
        },
        data: {
            msgError,
            status,
            name, brand, size, sizeType, category, subcategory, price, hasExpirationControl, hasStockControl, primary, imgBase64, imgName
        }
    }
}