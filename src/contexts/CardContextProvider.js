import React, {createContext, useState} from 'react';

export const CardContext = createContext();


const Sum = (basket) => {
    let SQuantity = basket.items.reduce((acc , neww) => acc + neww.quantity , 0)
    let SPrice = basket.items.reduce((acc , neww) => acc + (neww.quantity * neww.price) , 0)
    return {SQuantity , SPrice}
    // console.log(SPrice);
}

const CardContextProvider = ({children}) => {

    const [bas , setBas] = useState({
        items: [],
        SQuantity: 0,
        SPrice: 0,
        status: false,
    })

    const changeBasket = (basket , product , action) => {

        const add = (basket , product) => {
            return {
                ...basket ,
                ...basket.items.push({...product , quantity:1}),
                ...Sum(basket),
            }
        }

        const plusItem = (basket , product) => {
            let findIndex = basket.items.findIndex(items => items.id === product.id);
            basket.items[findIndex].quantity++;
            return {
                ...basket,
                ...Sum(basket),
            };
        }

        const minusItem = (basket , product) => {
            let findIndex = basket.items.findIndex(items => items.id === product.id);
            basket.items[findIndex].quantity--;
            return {
                ...basket,
                ...Sum(basket),
            };
        }

        const removeItem = (basket , product) => {
            let remove = basket.items.filter(item => item.id !== product.id)

            let newBasket = {
                ...basket,
                items : remove
            }
            return{
                ...newBasket,
                ...Sum(newBasket),
            }
        }

        switch (action){
            case "ADD" :
                setBas(add(basket , product));
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


    return (
        <CardContext.Provider value={{bas, setBas , changeBasket}}>
            {children}
        </CardContext.Provider>
    );
};

export default CardContextProvider;