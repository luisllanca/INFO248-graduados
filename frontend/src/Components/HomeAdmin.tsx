import React, { useState, useEffect, FC, useContext } from 'react'
import { RouteComponentProps } from "react-router-dom";
import CustomizedTable from "./CustomizedTable"
import "./styles/home.css";
import perfilImage from "../images/perfil.png";
import LogoImage from "./LogoImage";
import UserContext from './UserContext';
import axios from 'axios';
import { ToastContainer, toast, Flip } from "react-toastify";
import EnhancedTable from './EnhancedTable';
import StudentTable from './tablaEstudiantes';

const userString = localStorage.getItem("user");
const user = userString ? JSON.parse(userString) : null;


type SomeComponentProps = RouteComponentProps;
const HomeAdmin: FC<SomeComponentProps> = ({ history }) => {
    const logout = () => {
        localStorage.clear();
        history.push("/login");
    };

    const inicio = () => {
        history.push("/admin");
    }
    return (
        <>
            <div className="grid">
                <button type="submit" className="sisgeg" onClick={inicio}>SISGEG</button>
                <div className="eslogan">Sistema seguimiento escuela graduados</div>
                <div className='logout-container'><button type='submit' className='logout' onClick={logout}>Cerrar Sesion</button></div>
                <LogoImage />
            </div>
            <div className='gridtablacomprobantes'>
                <div className='containerTabla'><StudentTable /></div>
            </div>
        </>
    )
}

export default HomeAdmin;