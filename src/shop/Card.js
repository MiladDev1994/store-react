import React, {useContext, useEffect, useState} from 'react';
// import {Link} from "react-router-dom";
import {basket} from "../contexts/CardContextProvider";
// import {addNew} from "../contexts/CardContextProvider";

const Card = ({productData}) => {

    const {image , title , id} = productData;
    const [bas , setBas] = useState(basket) ;

    const isIn = (is , id) => {
        const result = !!is.items.find(item => item.id === id)
        return result;
    }

    const quantity = (value , id) => {
        let index = value.items.findIndex(item => item.id === id);
        if (index !== -1){
            return value.items[index].quantity;
        }
    }

    const plusItem = (basket , product) => {
        let findIndex = basket.items.findIndex(items => items.id === product.id);
        basket.items[findIndex].quantity++;
        return {
            ...basket
        };
    }

    const minusItem = (basket , product) => {
        let findIndex = basket.items.findIndex(items => items.id === product.id);
        basket.items[findIndex].quantity--;
        return {
            ...basket
        };
    }

    const removeItem = (basket , product) => {
        let remove = basket.items.filter(item => item.id !== product.id)
        return{
            ...basket,
            items : remove,
        }
    }


    const changeBasket = (basket , product , action) => {
        switch (action){
            case "ADD" :
                setBas({...bas , ...basket.items.push({...product , quantity:1})});
                break;

            case "PLUS" :
                setBas(plusItem(basket , product))
                break;

            case "MINUS" :
                setBas(minusItem(basket , product))
                break;

            case "REMOVE" :
                setBas(removeItem(basket , product))
                break;
        }
    }

    useEffect(() => {
        console.log(basket)
    } , [bas])


    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 overflow-hidden p-3" style={{transition:"0.3s" , height:"400px"}}>
            <div to={`/product/${id}`} className={"bg-secondary d-flex align-items-center justify-content-start flex-column h-100 rounded-3 shadow text-decoration-none link-info"}>
                <img width="100%" height="200px" src={image} alt="product"/>
                <p>{title}</p>

                <div className={"d-flex"}>
                    {quantity(bas, productData.id) === 1 && <button onClick={() => changeBasket(bas , productData , "REMOVE")}>*</button>}
                    {quantity(bas, productData.id) > 1 && <button onClick={() => changeBasket(bas , productData , "MINUS")}>-</button>}
                    {quantity(bas, productData.id) && <button>{quantity(bas, productData.id)}</button>}
                    {
                        !isIn(bas , productData.id) ?
                            <button onClick={() => changeBasket(bas , productData , "ADD")}>Add</button> :
                            <button onClick={() => changeBasket(bas , productData , "PLUS")}>+</button>
                    }

                </div>





            </div>

        </div>
    );
};

export default Card;