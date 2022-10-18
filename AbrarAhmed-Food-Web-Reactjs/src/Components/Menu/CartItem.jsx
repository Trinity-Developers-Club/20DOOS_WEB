import React from "react";
import { MinusSmIcon } from "@heroicons/react/solid";
import { PlusSmIcon } from "@heroicons/react/outline";
import { deleteToCart, increaseQty } from "../../features/ProductsSlice";
import { decreaseQty } from "../../features/ProductsSlice";
import { useDispatch } from "react-redux";
const CartItem = ({ item }) => {
    const { id, name, info, price, img, qty } = item;
    const disptach = useDispatch();

    const handleDecrease = () => {
        if (qty > 1) {
            disptach(decreaseQty(item));
        } 
    };
    return (
        <div className="flex justify-between items-center border-b-2 py-3 cursor-pointer select-none">
            <img src={img} className="w-10" alt="" />
            <div className="flex-grow ml-3">
                <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-800 ">{name}</p>
                    <p className="text-xs text-red-700">Rs.{price * qty}</p>
                </div>
                <div className="flex items-center space-x-2">
                    <PlusSmIcon
                        className="w-4 h-4 text-xs border-2 border-gray-300 text-gray-600"
                        onClick={() => disptach(increaseQty(item))}
                    />
                    <p>{qty}</p>
                    <MinusSmIcon
                        className="w-4 h-4 text-xs border-2 border-gray-300 text-gray-600"
                        onClick={() => handleDecrease()}
                    />{" "}
                    <p className="text-gray-500 text-xs">x ${item.price}</p>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
