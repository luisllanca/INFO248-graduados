import React, { FC } from 'react'
import { RouteComponentProps } from "react-router-dom";
import "./styles/home.css";
import LogoImage from "./LogoImage";
import StudentTable from './tablaEstudiantes';
import LogoutButton from './LogoutButton';

type SomeComponentProps = RouteComponentProps;
const HomeAdmin: FC<SomeComponentProps> = ({ history }) => {

    const inicio = () => {
        history.push("/home");
    }
    return (
        <>
            <div className="grid">
                <button type="submit" className="sisgeg" onClick={inicio}>SISGEG</button>
                <div className="eslogan">Sistema seguimiento escuela graduados</div>
                <div className='logout-container'> <LogoutButton></LogoutButton>   </div>
                <LogoImage />
            </div>
            <div className='gridtablacomprobantes'>
                <div className='containerTabla'><StudentTable /></div>
            </div>
        </>
    )
}

export default HomeAdmin;