import React, { useState } from "react";
import { PlusSmIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { addToCart, deleteToCart } from "../../features/ProductsSlice";
import { MinusSmIcon } from "@heroicons/react/solid";
const Product = ({ data }) => {
    const { id, info, price, name, img } = data;

    const dispatch = useDispatch();

    const [isAdded, setisAdded] = useState(false);

    const addTOcart = (data) => {
        if (isAdded) {
            // console.log("delete");
            dispatch(deleteToCart(data));
            setisAdded(false);
        } else {
            // console.log("adding");
            dispatch(addToCart(data));
            setisAdded(true);
        }
    };

    return (
        <div className="h-64 space-y-3 w-72  sm:w-52 md:w-64 mb-4 sm:mb-0  p-3 shadow-sm border-[1px] hover:shadow-lg transition cursor-pointer rounded-md hover:rounded-xl select-none">
            <div className="flex items-center justify-center h-2/4 select-none">
                <img src={img} alt="" className="h-full object-cover select-none" />
            </div>

            <p className="text-sm font-medium text-gray-800 capitalize select-none">
                {name}
            </p>
            <p className="text-xs text-gray-500 select-none">
                Lorem ipsum dolor sit amet consectestur adipisicing elit.
            </p>

            <div className="flex items-center justify-between select-none">
                <p className="text-gray-700 font-medium text-sm select-none">Rs:{price}</p>
                <button
                    className="text-xs flex items-center justify-between border-2 border-emerald-600 text-emerald-600 px-2 rounded-full py-1 select-none outline-none "
                    onClick={() => addTOcart(data)}
                >
                    <span>{!isAdded ? "Add" : "Remove"}</span>
                    {!isAdded ? (
                        <PlusSmIcon className="w-4 text-xs select-none" />
                    ) : (
                        <MinusSmIcon className="w-4 text-xs select-none" />
                    )}
                </button>
            </div>
        </div>
    );
};

export default Product;
