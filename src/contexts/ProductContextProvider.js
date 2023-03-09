import React, {useEffect, useState} from 'react';
import {Api} from "../service/Api";

export const ProductContext = React.createContext();

const ProductContextProvider = ({children}) => {

    const [product , setProduct] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            setProduct(await Api())
        }
        fetchApi()
    } , [])


    return (
        <ProductContext.Provider value={product}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;