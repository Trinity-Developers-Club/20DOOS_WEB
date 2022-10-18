import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";


const Menu = () => {
    const dispatch = useDispatch();

    const data = useSelector((state) => state.ProductsSlice.products);

    const [allProducts, setAllProducts] = useState(data);
    // console.log(data);

    return (
        <div className="pt-10 mb-20 ">
            
            {!allProducts ? (
                <p className="bg-yellow-400 p-1 text-gray-600 text-sm ">
                    Loading
                </p>
            ) : (
                <div className="flex items-center justify-center flex-wrap gap-4 md:gap-6">
                    {allProducts.map((product) => (
                        <Product data={product} key={product.id} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Menu;
