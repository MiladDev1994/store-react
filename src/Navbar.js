import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {CardContext} from "./contexts/CardContextProvider";

const Navbar = () => {
    const {bas} = useContext(CardContext)
    // console.log(bas)
    return (
        <div className={"position-fixed w-100"}>
            <Link to={"/shop"} className={"btn btn-light link-info m-2"}>Shop</Link>
            <Link to={"/basket"} className={"btn btn-light link-info m-2"}>{bas.SQuantity}</Link>
        </div>
    );
};

export default Navbar;