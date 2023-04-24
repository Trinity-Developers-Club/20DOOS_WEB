import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Checkout from "./Pages/Checkout";
import { Provider } from "react-redux";
import { store } from "./app/store";
import TraceOrder from "./Pages/TraceOrder";

const App = () => {
    return (
        <>
            <Provider store={store}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/Checkout" element={<Checkout />} />
                        <Route path="/TraceOrder" element={<TraceOrder />} />
                    </Routes>
                </BrowserRouter>
            </Provider>
        </>
    );
};

export default App;
