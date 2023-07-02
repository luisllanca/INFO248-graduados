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
    return (<>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
          <div className="card mb-3 mt-3 rounded" style={{ maxWidth: "500px" }}>
            <div className="col-md-12">
              <div className="card-body">
                <h3 className="card-title text-center text-secondary mt-3 mb-3">
                  Registro
                </h3>
                <form className="row" autoComplete="off" onSubmit={handleSubmit(submitData)}>
                  <div className="col-md-6">
                    <div className="">
                      <label className="form-label">Nombre</label>
                      <input type="text" className="form-control form-control-sm" id="exampleFormControlInput1" {...register("firstname", {
        required: "Firstname is required!",
    })}/>
                      {errors.firstname && (<p className="text-danger" style={{ fontSize: 14 }}>
                          {errors.firstname.message}
                        </p>)}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="">
                      <label className="form-label">Apellido</label>
                      <input type="text" className="form-control form-control-sm" id="exampleFormControlInput2" {...register("lastname", {
        required: "Lastname is required!",
    })}/>
                      {errors.lastname && (<p className="text-danger" style={{ fontSize: 14 }}>
                          {errors.lastname.message}
                        </p>)}
                    </div>
                  </div>

                  <div className="">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control form-control-sm" id="exampleFormControlInput3" {...register("email", { required: "Email is required!" })}/>
                    {errors.email && (<p className="text-danger" style={{ fontSize: 14 }}>
                        {errors.email.message}
                      </p>)}
                  </div>
                  <div className="">
                    <label className="form-label">Contraseña</label>
                    <input type="password" className="form-control form-control-sm" id="exampleFormControlInput5" {...register("password", {
        required: "Password is required!",
    })}/>
                    {errors.password && (<p className="text-danger" style={{ fontSize: 14 }}>
                        {errors.password.message}
                      </p>)}
                  </div>
                  <div className="">
                    <label className="form-label">Confirmar contraseña</label>
                    <input type="password" className="form-control form-control-sm" id="exampleFormControlInput6" {...register("cpassword", {
        required: "Confirm Password is required",
        validate: (value) => value === watch("password") ||
            "Passwords don't match.",
    })}/>
                    {errors.cpassword && (<p className="text-danger" style={{ fontSize: 14 }}>
                        {errors.cpassword.message}
                      </p>)}
                  </div>
                  <div className="text-center mt-4 ">

        <button className="btn btn-outline-primary text-center shadow-none mb-3" type="submit" onClick={handleFormSubmit} onSubmit={handleSubmit(submitData)}>
          Enviar
        </button>
                    <p className="card-text">
                      ¿Ya tienes una cuenta?{" "}
                      <react_router_dom_1.Link style={{ textDecoration: "none" }} to={"/login"}>
                        Iniciar sesion
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
exports.default = SignUp;
