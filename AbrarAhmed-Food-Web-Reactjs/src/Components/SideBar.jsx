import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./Menu/CartItem";

const SideBar = ({isSideBarOpened,setisSideBarOpened}) => {
    const items = useSelector((state) => state.ProductsSlice.added_products);

    const calculateTotalPrice = () => {
        let total = 0;
        items.map((item) => (total = total + (item.price*item.qty)));

        // console.log(total);
        return total;
    };
    return (
        <div className={`w-10/12 sm:w-5/12 lg:w-3/12 absolute ${isSideBarOpened?'right-0 transition-all transform-scale-80' : '-right-full transition-all'} shadow-lg h-[calc(95vh-72px)] bg-gray-50 flex flex-col justify-between p-4  overflow-scroll  no-scrollbar transition-all pb-16`}>
            {items.length > 0 ? (
                <>
                    <div className="h-[95%] overflow-scroll  no-scrollbar">
                        <h4 className="mb-4">Your Food Items !</h4>
                        <div className="">
                            {items.map((item) => (
                                <CartItem item={item} key={item.id} />
                            ))}
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center justify-between pt-2">
                            <p className="text-sm text-gray-700 font-bold ">
                                Total Price:
                            </p>
                            <p className="text-semibold">
                                Rs.{calculateTotalPrice()}
                            </p>
                        </div>

                        <button className="btn mt-4 bg-emerald-600 text-white  w-full rounded cursor-pointer shadow-emerald-400 text-md transition-colors hover:bg-emerald-800 py-1" ><Link to="/Checkout" onClick={()=>setisSideBarOpened(false)} className="">Proceed to Checkout</Link></button>
                    </div>
                </>
            ) : (
                <h1>No items</h1>
            )}
        </div>
    );
};

export default SideBar;
