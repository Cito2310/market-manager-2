import { useImageSelect } from './../../../hooks/useImageSelect';
import { startCreateProduct } from './../../../../store/product/thunks';
import { useCallback, useEffect, useMemo, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../../store/store";
import { initialFormProduct } from "../utils/initialFormProduct";
import { productAddValidations } from '../utils/productAddValidations';
import { setCurrentModal, setSelectedImageData } from '../../../../store/modal/modalSlice';
import { useControlError } from '../../../hooks/useControlError';

export const useItemAddProduct = ( onClose: () => void ) => {
    const dispatch = useAppDispatch();
    const { status, messageError } = useAppSelector( state => state.product );
    const { msgError, setError } = useControlError( messageError );
    const { register, handleSubmit, watch, control, getValues, setValue } = useForm({ defaultValues: initialFormProduct });
    const { imgBase64, imgName, onModalImage } = useImageSelect( watch("info.imgUrl"), setValue );


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
    const onAddProduct = handleSubmit( async data => {
            try {
                setError(null);
                await dispatch( startCreateProduct(data) );
                onClose();
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
        form: {
            register, onAddProduct, onClose, onModalImage
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