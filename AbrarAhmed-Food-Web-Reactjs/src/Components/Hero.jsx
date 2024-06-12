import React from "react";

const Hero = () => {
    return (
        <div className="space-y-2 my-16 mt-44 sm:mt-16 sm:h-[70vh] overflow-hidden ">
            <div className="flex justify-between flex-wrap h-full items-center">
                <div className="w-full sm:w-5/12 space-y-3 sm:space-y-5 ">
                    <h1 className="capitalize text-stone-700 text-3xl sm:text-4xl  font-bold ">
                        The Healthy Food for walthy mood
                    </h1>
                    <p className="text-sm text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Sequi itaque nobis obcaecati quo labore unde dolor
                        quidem doloribus maxime expedita.
                    </p>
                    <button className="bg-emerald-400 text-white px-2 select-none py-1">
                        Menu
                    </button>
                </div>
                <div className="sm:flex items-center justify-center w-7/12 sm:w-7/12 h-full  hidden ">
                    <img src="/images/hero.png" alt="" className="h-[90%] max-h-full object-cover " />
                </div>
            </div>
        </div>
    );
};

export default Hero;
