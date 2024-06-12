import React from "react";
import { useSelector } from "react-redux";
import Cart from "../Components/Cart";
import ProductsContainer from "../Components/ProductsContainer";

const Home = () => {
    const added_products = useSelector(
        (state) => state.ProductsSlice.added_products
    );
    return (
        <div className="px-10 py-6">
            <p className="fixed bg-white p-2">Cart : {added_products.length}</p>

            <ProductsContainer />
            <Cart/>
        </div>
    );
};

export default Home;
