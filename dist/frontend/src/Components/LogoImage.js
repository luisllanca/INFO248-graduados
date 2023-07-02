"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const LogoImage = () => {
    return (react_1.default.createElement("div", { className: "position-absolute top-0 end-0 p-3" },
        react_1.default.createElement("img", { src: "http://informatica.uach.cl/wp-content/uploads/2020/02/cropped-escudo-transparente.png", alt: "Descripci\u00F3n de la imagen", style: { width: "100px" } })));
};
exports.default = LogoImage;
