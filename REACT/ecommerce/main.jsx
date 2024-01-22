import React from "react";
import ReactDOM from "react-dom/client";
import App from "../ecommerce/src/components/App"
import Header from "./src/components/Header";
import Categories from "./src/components/Categories";
import '../ecommerce/src/assets/style.scss';

ReactDOM.createRoot(document.querySelector('#root')).render(
    <>
    {/* <App/> */}
    <Header/>
    <Categories/>
    </>
)