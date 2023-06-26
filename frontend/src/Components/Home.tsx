import React, { FC } from "react";
import { RouteComponentProps } from "react-router-dom";
import CustomizedTable from "./CustomizedTable"
import "./home.css";
import axios from "axios";

const user =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user")!)
      : localStorage.clear();

if(user) {
  axios.get(`http://localhost:8080/estudiante/${user.id}`)
  .then(function(response) {
    const est = response.data.Estudiante;
    localStorage.setItem("est", JSON.stringify(est));
  })
  .catch(function(error) {
    console.log(error);
  });
}

type SomeComponentProps = RouteComponentProps;
const Home: FC<SomeComponentProps> = ({ history }) => {
  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingLeft: 50,
          paddingRight: 50,
        }}
      >
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
        <div
          // className="row d-flex justify-content-center align-items-center text-center"
          style={{ height: "100vh" }}
        >
          <p className="muted display-6">Hola {user.nombre}👋</p>
          <CustomizedTable/>
        </div>

      </div>
    </>
  );
};

export default Home;
