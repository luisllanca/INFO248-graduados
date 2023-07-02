"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./home.css");
const Home = ({ history }) => {
    const logout = () => {
        localStorage.clear();
        history.push("/login");
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: 50,
                paddingRight: 50,
            } },
            react_1.default.createElement("div", null,
                react_1.default.createElement("h3", { className: "m-3" }, "Inicio")),
            react_1.default.createElement("div", null,
                react_1.default.createElement("button", { type: "submit", className: "butn", onClick: logout }, "Logout"))),
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("div", { className: "row d-flex justify-content-center align-items-center text-center", style: { height: "100vh" } },
                react_1.default.createElement("p", { className: "muted display-6" }, "Hello User\uD83D\uDC4B")))));
};
exports.default = Home;
