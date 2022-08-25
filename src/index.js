import React from "react";
import ReactDom from "react-dom";
import App from "./components/App";
import './styles/global.scss';

const root = ReactDom.createRoot(document.getElementById("app"));
render(<App />, root);