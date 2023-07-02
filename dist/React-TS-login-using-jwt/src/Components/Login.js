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
const Login = ({ history }) => {
    const { register, handleSubmit, formState: { errors }, } = (0, react_hook_form_1.useForm)();
    const login = (data) => {
        let params = {
            email: data.email,
            password: data.password,
        };
        axios_1.default
            .post("http://localhost:4000/api/login", params)
            .then(function (response) {
            //   IF EMAIL ALREADY EXISTS
            if (response.data.success === false) {
                react_toastify_1.toast.error(response.data.error, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: 0,
                    toastId: "my_toast",
                });
            }
            else {
                react_toastify_1.toast.success(response.data.message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: 0,
                    toastId: "my_toast",
                });
                localStorage.setItem("auth", response.data.token);
                setTimeout(() => {
                    history.push("/");
                }, 3000);
            }
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    return (<>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
          <div className="card mb-3" style={{ maxWidth: "320px" }}>
            <div className="col-md-12">
              <div className="card-body">
                <h3 className="card-title text-center text-secondary mt-3">
                  Inicio de Sesion
                </h3>
                <form autoComplete="off" onSubmit={handleSubmit(login)}>
                  <div className="mb-3 mt-4">
                    <label className="form-label">Correo</label>
                    <input type="email" className="form-control shadow-none" id="exampleFormControlInput1" {...register("email", { required: "Email is required!" })}/>
                    {errors.email && (<p className="text-danger" style={{ fontSize: 14 }}>
                        {errors.email.message}
                      </p>)}
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control shadow-none" id="exampleFormControlInput2" {...register("password", {
        required: "Password is required!",
    })}/>
                    {errors.password && (<p className="text-danger" style={{ fontSize: 14 }}>
                        {errors.password.message}
                      </p>)}
                  </div>
                  <div className="text-center mt-4 ">
                    <button className="btn btn-outline-primary text-center shadow-none mb-3" type="submit">
                      Enviar
                    </button>
                    <p className="card-text pb-2">
                      ¿No posees una cuenta?{" "}
                      <react_router_dom_1.Link style={{ textDecoration: "none" }} to={"/register"}>
                        Registrar
                      </react_router_dom_1.Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <react_toastify_1.ToastContainer position="top-right" autoClose={5000} hideProgressBar closeOnClick rtl={false} pauseOnFocusLoss={false} draggable={false} pauseOnHover limit={1} transition={react_toastify_1.Flip}/>
    </>);
};
exports.default = Login;
