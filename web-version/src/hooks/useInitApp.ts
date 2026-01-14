import { useAppSelector } from './../../store/store';
import { useEffect } from "react"
import { useAppDispatch } from "../../store/store";
import { startGetImages } from "../../store/image";
import { startGetCategories } from '../../store/category';
import { startGetProducts } from '../../store/product';

export const useInitApp = () => {
    const dispatch = useAppDispatch();
    const { auth } = useAppSelector( state => state );
    const { category, image, product } = useAppSelector( state => state );

    useEffect(() => {
        if ( auth.token ) {
            if ( !image.wasCalledOnce ) dispatch( startGetImages() );
            if ( !category.wasCalledOnce ) dispatch( startGetCategories() );
            if ( !product.wasCalledOnce ) dispatch( startGetProducts() );
        }
    }, [auth.token, category.wasCalledOnce, image.wasCalledOnce, product.wasCalledOnce])
}