import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/navbar";
import Formulaire from "./components/form";




import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <NavBar/>
        <Formulaire/>
    </React.StrictMode>
);


