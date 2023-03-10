import React , {useContext} from 'react';
import {CardContext} from "./contexts/CardContextProvider";

const Basket = () => {
    const {bas, setBas , changeBasket} = useContext(CardContext) ;
    console.log(bas.items.image)

    // const {image , item , quantity , price , id} = bas.items
    // console.log(id)

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

    return (
        <div>
            {
                bas.items.map(item =>
                    <div key={item.id}>
                        <div className={"col-10 p-2 bg-warning m-3"} style={{height:"100px"}}>
                            <img height={"100%"} src={item.image} />
                            {quantity(bas, item.id) === 1 && <button onClick={() => changeBasket(bas , item , "REMOVE")}>*</button>}
                            {quantity(bas, item.id) > 1 && <button onClick={() => changeBasket(bas , item , "MINUS")}>-</button>}
                            {quantity(bas, item.id) && <button>{quantity(bas, item.id)}</button>}
                            {
                                !isIn(bas , item.id) ?
                                    <button onClick={() => changeBasket(bas , item , "ADD")}>Add</button> :
                                    <button onClick={() => changeBasket(bas , item , "PLUS")}>+</button>
                            }

                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Basket;