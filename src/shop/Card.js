import React, {useContext, useEffect} from 'react';
// import {Link} from "react-router-dom";
import {addNew} from "../contexts/CardContextProvider";
import {basket} from "../contexts/CardContextProvider";

const Card = ({productData}) => {

    const {image , title , id} = productData;


    const isIn = (is , id) => {
        const result = !!is.items.find(item => item.id === id)
        // console.log(result)
        // return result;
    }
    //
    // useEffect(() => {
    //     console.log("ok")
    // } , [{basket}])


    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 overflow-hidden p-3" style={{transition:"0.3s" , height:"400px"}}>
            <div to={`/product/${id}`} className={"bg-secondary d-flex align-items-center justify-content-start flex-column h-100 rounded-3 shadow text-decoration-none link-info"}>
                <img width="100%" height="200px" src={image} alt="product"/>
                <p>{title}</p>

                {
                    !isIn(basket , productData.id) ?
                        <button onClick={() => addNew(basket , productData , "ADD")}>Add</button> :
                        <button>123</button>
                }
                <div>{console.log(basket)}</div>

            </div>

        </div>
    );
};

export default Card;