import React, {useContext} from 'react';
import {useParams} from "react-router-dom";
import {ProductContext} from "../contexts/ProductContextProvider";

const Product = () => {

    const params = useParams()

    const product = useContext(ProductContext)

    const filtered = product.filter(items => items.id === Number(params.id))


    return (
        <div>
            {
                filtered.length ?  filtered.map(item => <img key={item.id} src={item.image} alt="product"/> ) : ''

            }

        </div>
    );
};

export default Product;