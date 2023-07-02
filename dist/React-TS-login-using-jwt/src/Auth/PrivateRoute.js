"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const PrivateRoute = (props) => {
    // const isAuth  = false
    const token = localStorage.getItem("auth");
    console.log("token", token);
    return <>{token ? <react_router_dom_1.Route {...props}/> : <react_router_dom_1.Redirect to="/login"/>}</>;
};
exports.default = PrivateRoute;
