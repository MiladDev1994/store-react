import React, {createContext, useState} from 'react';

export const CardContext = createContext();

export const basket = {
    items: [],
    SQuantity: 1,
    SPrice: 0,
    status: false,
}

export const addNew = (state , product , action) => {
    if (action === "ADD"){
        state.items.push(product)
        // console.log(basket.items)
    }

}

// const CardContextProvider = ({children}) => {
//
//     const [basket , setBasket] = useState({
//         items: [],
//         SQuantity: 1,
//         SPrice: 0,
//         status: false,
//     })
//
//     return (
//
//         <CardContext.Provider value={basket}>
//             {children}
//         </CardContext.Provider>
//     );
// };

// export default CardContextProvider;