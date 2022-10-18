import React from "react";
import { MinusSmIcon } from "@heroicons/react/solid";
import { PlusSmIcon } from "@heroicons/react/outline";
import { deleteToCart, increaseQty } from "../../features/ProductsSlice";
import { decreaseQty } from "../../features/ProductsSlice";
import { useDispatch } from "react-redux";
const Item = ({ item }) => {
    const { id, name, info, price, img, qty } = item;
    const disptach = useDispatch();

    const handleDecrease = () => {
        if (qty > 1) {
            disptach(decreaseQty(item));
        } 
    };
    return (
        <>
            <p className="w-8/12 text-sm text-gray-80 px-3 py-2">
                {name} <span className="float-right text-emerald-900">x {qty}</span>
            </p>

            <p className="w-4/12 text-sm text-gray-800 text-center  px-3 py-2">
                {price*qty}
            </p>

        </>
    );
};

export default Item;
