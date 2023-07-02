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
    return (<>
      <div style={{
            display: "flex",
            justifyContent: "space-between",
            paddingLeft: 50,
            paddingRight: 50,
        }}>
        <div>
          <h3 className="m-3">Inicio</h3>
        </div>
        <div>
          <button type="submit" className="butn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center text-center" style={{ height: "100vh" }}>
          <p className="muted display-6">Hello User👋</p>
        </div>
      </div>
    </>);
};
exports.default = Home;
