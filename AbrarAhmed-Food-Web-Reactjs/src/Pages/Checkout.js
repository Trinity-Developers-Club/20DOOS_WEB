import React from "react";
import { useSelector } from "react-redux";
import Form from "../Components/CheckOut/Form";
import Item from "../Components/CheckOut/Item";
import OrderDetails from "../Components/CheckOut/OrderDetails";

const Checkout = () => {
    const items = useSelector((state) => state.ProductsSlice.added_products);
    return (
        <div className="w-10/12 mx-auto mt-20 ">
            <h1 className="text-gray-800 text-2xl"> </h1>
            <div className="flex justify-between flex-wrap">
        
                <Form/>
                <OrderDetails/>
            </div>
        </div>
    );
};

export default Checkout;
