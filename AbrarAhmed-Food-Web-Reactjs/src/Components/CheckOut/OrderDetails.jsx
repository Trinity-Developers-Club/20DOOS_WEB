import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";

const OrderDetails = () => {
    const items = useSelector((state) => state.ProductsSlice.added_products);

    const calculateTotalAmount = ()=>{
        let total = 0;
        items.map(item => total = total+(item.price * item.qty))

        return total
    }

    return (
        <div className=" w-screen md:w-5/12 ">
            <div class="max-w-xl sm:m-4 px-3 md:px-5 py-10 bg-white rounded shadow-xl">
                <p class="text-gray-800 font-medium">Your Order</p>

                <div className="flex items-center justify-between flex-wrap">
                    <p className="w-8/12 bg-gray-200 text-gray-800 text-sm px-3 py-3">
                        Product
                    </p>
                    <p className="w-4/12 bg-gray-200 text-gray-800 text-sm px-3 py-3 text-center">
                        Subtotal
                    </p>

                    {
                        items.length > 0 && (
                            items.map(item=>{
                                return(
                                    <Item item={item}/>
                                )
                            })
                        )
                    }
                    <p className="w-8/12 bg-gray-200 text-gray-800 text-sm px-3 py-3">
                        Subtotal
                    </p>
                    <p className="w-4/12 bg-gray-200 text-gray-800 text-sm px-3 py-3 text-center">
                    Rs. {calculateTotalAmount()}
                    </p>
                    <p className="w-8/12 bg-gray-200 text-gray-800 text-sm px-3 py-3">
                        Delivery Charges
                    </p>
                    <p className="w-4/12 bg-gray-200 text-gray-800 text-sm px-3 py-3 text-center">
                    Rs.  200
                    </p>
                    <p className="w-8/12 bg-gray-300 text-gray-900 text-sm px-3 py-3">
                        Total Amount
                    </p>
                    <p className="w-4/12 bg-gray-300 text-gray-900 text-sm px-3 py-3 text-center">
                     Rs. {calculateTotalAmount()+200}
                    </p>


                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
