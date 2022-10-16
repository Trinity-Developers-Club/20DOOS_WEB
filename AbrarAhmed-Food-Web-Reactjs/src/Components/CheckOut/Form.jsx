import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { emptyCart } from "../../features/ProductsSlice";

const Form = () => {
    const nav = useNavigate()
    const dispatch = useDispatch()
    const handleForm= (e) =>{
            e.preventDefault();
            dispatch(emptyCart())
            nav('/TraceOrder')

    }
    return (
        <div class="leading-loose w-screen md:w-7/12">
            <form class="max-w-xl my-4 sm:m-4 p-5 md:p-10 bg-white rounded shadow-xl" onSubmit = {(e)=>handleForm(e)}>
                <p class="text-gray-800 font-medium">Billing Details</p>
                <div class="">
                    <label class="block text-sm text-gray-00" for="cus_name">
                        Name
                    </label>
                    <input
                        class="w-full px-5 py-2 text-sm text-gray-700 bg-gray-200 rounded outline-emerald-500"
                        id="cus_name"
                        name="cus_name"
                        type="text"
                        required
                        placeholder="Your Name"
                        aria-label="Name"
                    />
                </div>
                <div class="mt-2">
                    <label class="block text-sm text-gray-600" for="cus_email">
                        Email
                    </label>
                    <input
                        class="w-full px-5  py-2  text-sm text-gray-700 bg-gray-200 rounded outline-emerald-500"
                        id="cus_email"
                        name="cus_email"
                        type="text"
                        required
                        placeholder="Your Email"
                        aria-label="Email"
                    />
                </div>
                <div class="mt-2">
                    <label class=" block text-sm text-gray-600" for="cus_email">
                        Address
                    </label>
                    <input
                        class="w-full px-2  py-2  text-sm text-gray-700 bg-gray-200 rounded outline-emerald-500"
                        id="cus_email"
                        name="cus_email"
                        type="text"
                        required
                        placeholder="Street"
                        aria-label="Email"
                    />
                </div>
                <div class="mt-2">
                    <label
                        class="hidden text-sm block text-gray-600"
                        for="cus_email"
                    >
                        City
                    </label>
                    <input
                        class="w-full px-2 py-2 text-sm text-gray-700 bg-gray-200 rounded outline-emerald-500"
                        id="cus_email"
                        name="cus_email"
                        type="text"
                        required
                        placeholder="City"
                        aria-label="Email"
                    />
                </div>
                <div class="inline-block mt-2 w-1/2 pr-1">
                    <label
                        class="hidden block text-sm text-gray-600"
                        for="cus_email"
                    >
                        Country
                    </label>
                    <input
                        class="w-full px-1 py-2 text-sm text-gray-700 bg-gray-200 rounded outline-emerald-500"
                        id="cus_email"
                        name="cus_email"
                        type="text"
                        required
                        placeholder="Country"
                        aria-label="Email"
                    />
                </div>
                <div class="inline-block mt-2 -mx-1 pl-1 w-1/2">
                    <label
                        class="hidden block text-sm text-gray-600"
                        for="cus_email"
                    >
                        Zip
                    </label>
                    <input
                        class="w-full px-2 py-2 text-sm text-gray-700 bg-gray-200 rounded outline-emerald-500"
                        id="cus_email"
                        name="cus_email"
                        type="text"
                        required
                        placeholder="Zip"
                        aria-label="Email"
                    />
                </div>
                <p class="mt-4 text-gray-800 font-medium">
                    Payment information
                </p>
                <div class="">
                    <label class="block text-sm text-gray-600" for="cus_name">
                        Card
                    </label>
                    <input
                        class="w-full px-2 py-2 text-sm text-gray-700 bg-gray-200 rounded outline-emerald-500"
                        id="cus_name"
                        name="cus_name"
                        type="text"
                        required
                        placeholder="Card Number MM/YY CVC"
                        aria-label="Name"
                    />
                </div>
                <div class="mt-4">
                    <button
                        class="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded "
                        type="submit"
                    >
                        Ordered
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
