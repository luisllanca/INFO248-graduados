"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.bundle.min.js");
const SignUp_1 = __importDefault(require("./Components/SignUp"));
const Login_1 = __importDefault(require("./Components/Login"));
const RestrictedRoute_1 = __importDefault(require("./Auth/RestrictedRoute"));
const PrivateRoute_1 = __importDefault(require("./Auth/PrivateRoute"));
const Home_1 = __importDefault(require("./Components/Home"));
const react_router_dom_1 = require("react-router-dom");
function App() {
    return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement(react_router_dom_1.Switch, null,
            react_1.default.createElement(PrivateRoute_1.default, { exact: true, path: "/", component: Home_1.default }),
            react_1.default.createElement(RestrictedRoute_1.default, { exact: true, path: "/login", component: Login_1.default }),
            react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/register", component: SignUp_1.default }))));
}
exports.default = App;
