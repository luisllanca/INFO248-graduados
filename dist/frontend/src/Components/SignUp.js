"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_hook_form_1 = require("react-hook-form");
const axios_1 = __importDefault(require("axios"));
const react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.min.css");
const LogoImage_1 = __importDefault(require("./LogoImage"));
const SignUp = ({ history }) => {
    const { register, handleSubmit, watch, reset, formState: { errors }, } = (0, react_hook_form_1.useForm)();
    const submitData = (data) => {
        let payload = {
            nombre: data.firstname,
            apellido: data.lastname,
            password: data.password,
            email: data.email,
        };
        axios_1.default.post("http://localhost:8080/user/registrar", payload, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then(response => {
            console.log(response.data);
            react_toastify_1.toast.success("Registro exitoso");
            reset();
        })
            .catch(error => {
            console.error(error);
            react_toastify_1.toast.error("Ocurrió un error al registrar");
        });
    };
    const handleFormSubmit = handleSubmit(submitData);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "container" },
            react_1.default.createElement("div", { className: "row d-flex justify-content-center align-items-center", style: { height: "100vh" } },
                react_1.default.createElement(LogoImage_1.default, null),
                react_1.default.createElement("div", { className: "card mb-3 mt-3 rounded", style: { maxWidth: "500px" } },
                    react_1.default.createElement("div", { className: "col-md-12" },
                        react_1.default.createElement("div", { className: "card-body" },
                            react_1.default.createElement("h3", { className: "card-title text-center text-secondary mt-3 mb-3" }, "Registro"),
                            react_1.default.createElement("form", { className: "row", autoComplete: "off", onSubmit: handleSubmit(submitData) },
                                react_1.default.createElement("div", { className: "col-md-6" },
                                    react_1.default.createElement("div", { className: "" },
                                        react_1.default.createElement("label", { className: "form-label" }, "Nombre"),
                                        react_1.default.createElement("input", Object.assign({ type: "text", className: "form-control form-control-sm", id: "exampleFormControlInput1" }, register("firstname", {
                                            required: "Firstname is required!",
                                        }))),
                                        errors.firstname && (react_1.default.createElement("p", { className: "text-danger", style: { fontSize: 14 } }, errors.firstname.message)))),
                                react_1.default.createElement("div", { className: "col-md-6" },
                                    react_1.default.createElement("div", { className: "" },
                                        react_1.default.createElement("label", { className: "form-label" }, "Apellido"),
                                        react_1.default.createElement("input", Object.assign({ type: "text", className: "form-control form-control-sm", id: "exampleFormControlInput2" }, register("lastname", {
                                            required: "Lastname is required!",
                                        }))),
                                        errors.lastname && (react_1.default.createElement("p", { className: "text-danger", style: { fontSize: 14 } }, errors.lastname.message)))),
                                react_1.default.createElement("div", { className: "" },
                                    react_1.default.createElement("label", { className: "form-label" }, "Email"),
                                    react_1.default.createElement("input", Object.assign({ type: "email", className: "form-control form-control-sm", id: "exampleFormControlInput3" }, register("email", { required: "Email is required!" }))),
                                    errors.email && (react_1.default.createElement("p", { className: "text-danger", style: { fontSize: 14 } }, errors.email.message))),
                                react_1.default.createElement("div", { className: "" },
                                    react_1.default.createElement("label", { className: "form-label" }, "Contrase\u00F1a"),
                                    react_1.default.createElement("input", Object.assign({ type: "password", className: "form-control form-control-sm", id: "exampleFormControlInput5" }, register("password", {
                                        required: "Password is required!",
                                    }))),
                                    errors.password && (react_1.default.createElement("p", { className: "text-danger", style: { fontSize: 14 } }, errors.password.message))),
                                react_1.default.createElement("div", { className: "" },
                                    react_1.default.createElement("label", { className: "form-label" }, "Confirmar contrase\u00F1a"),
                                    react_1.default.createElement("input", Object.assign({ type: "password", className: "form-control form-control-sm", id: "exampleFormControlInput6" }, register("cpassword", {
                                        required: "Confirm Password is required",
                                        validate: (value) => value === watch("password") ||
                                            "Passwords don't match.",
                                    }))),
                                    errors.cpassword && (react_1.default.createElement("p", { className: "text-danger", style: { fontSize: 14 } }, errors.cpassword.message))),
                                react_1.default.createElement("div", { className: "text-center mt-4 " },
                                    react_1.default.createElement("button", { className: "btn btn-outline-primary text-center shadow-none mb-3", type: "submit", onClick: handleFormSubmit, onSubmit: handleSubmit(submitData) }, "Enviar"),
                                    react_1.default.createElement("p", { className: "card-text" },
                                        "\u00BFYa tienes una cuenta?",
                                        " ",
                                        react_1.default.createElement(react_router_dom_1.Link, { style: { textDecoration: "none" }, to: "/login" }, "Iniciar sesion"))))))))),
        react_1.default.createElement(react_toastify_1.ToastContainer, { position: "top-right", autoClose: 5000, hideProgressBar: true, closeOnClick: true, rtl: false, pauseOnFocusLoss: false, draggable: false, pauseOnHover: true, limit: 1, transition: react_toastify_1.Flip })));
};
exports.default = SignUp;
