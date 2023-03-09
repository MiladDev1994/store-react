import React, {useContext} from 'react';
import {ProductContext} from "../contexts/ProductContextProvider";

import Card from "./Card";

const Shop = () => {

    const product = useContext(ProductContext);


    return (
        <div className="container">
            <div className="row">
                {
                    product.map(product=> <Card key={product.id} productData={product} />)
                }
            </div>

        </div>



    );
};

export default Shop;