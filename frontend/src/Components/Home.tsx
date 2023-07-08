import React, { useState, useEffect, FC } from 'react'
import { Redirect, RouteComponentProps } from "react-router-dom";
import "./styles/home.css";
import perfilImage from "../images/perfil.png";
import LogoImage from "./LogoImage";
import LogoutButton from './LogoutButton';
import EditIcon from '@mui/icons-material/Edit';
import { useForm } from 'react-hook-form';
import axios from 'axios';

type SomeComponentProps = RouteComponentProps;
const Home: FC<SomeComponentProps> = ({ history }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const inicio = () => {
    window.location.reload();
  };

  const histComp = () => {
    history.push("/comprobantes");
  }

  const subirComp = () => {
    history.push("/subirComprobante");
  }

  const admin = () => {
    history.push("/admin");
  }

  const user = localStorage.getItem("user") !== "undefined"
  ? JSON.parse(localStorage.getItem("user")!)
  : (() => {
      localStorage.clear();
      <Redirect to="/autenticacion" />
      
    })();

  const [userChild, setUserChild] = useState<any>();
  const [comps, setComps] = useState<any>();
  const [hovered, setHovered] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  useEffect(() => {
    if(errors) {
      setShowErrors(true);
      // console.log(true);
    } else {
      setShowErrors(false);
      // console.log(false);
    }

  }, [errors]);

  useEffect(() => {
    const fetchData = async () => {
      if(user.rol === "Estudiante") {
        const responseEst = await fetch(`http://localhost:8080/estudiantes/user/${user.id}`);
        const dataEst = await responseEst.json();
        setUserChild(dataEst.Estudiantes);
        setPrograma(dataEst.Estudiantes.programa);
        setCarrera(dataEst.Estudiantes.carrera);
        localStorage.setItem("est", JSON.stringify(dataEst.Estudiantes));
    
        if (dataEst.Estudiantes) {
          const responseComps = await fetch(`http://localhost:8080/comprobantes/estudiante/${dataEst.Estudiantes.id}`);
          const dataComps = await responseComps.json();
          setComps(dataComps.Comprobantes);
          console.log(dataComps.Comprobantes);
        }
      } else {
        const responseAdmin = await fetch(`http://localhost:8080/admin/user/${user.id}`);
        const dataAdmin = await responseAdmin.json();
        setUserChild(dataAdmin.PersonalAdministrativo);
        console.log(dataAdmin.PersonalAdministrativo);
        setCargo(dataAdmin.PersonalAdministrativo.cargo);
      }
    };
  
    fetchData();
  }, []);


  const [nombre, setNombre] = useState<string>(user.nombre);
  const [apellido, setApellido] = useState<string>(user.apellido);
  const [programa, setPrograma] = useState<string>(user.rol === "Estudiante" && userChild ? userChild.programa : "");
  const [carrera, setCarrera] = useState<string>(user.rol === "Estudiante" && userChild ? userChild.carrera : "");
  const [cargo, setCargo] = useState<string>(user.rol !== "Estudiante" && userChild ? userChild.cargo : "");

  const handleSaveButton = (data : any) => {
    setHovered(false);
    setEditMode(false);

    if(user.rol === "Estudiante"){
      let params = {
        nombre: data.nombre,
        apellido: data.apellido,
        programa: data.programa,
        carrera: data.carrera
      }

      console.log(params);

      axios
        .put(`http://localhost:8080/estudiantes/datos/${user.id}`, params)
        .then(function (response) {
          user.nombre = params.nombre;
          user.apellido = params.apellido;
          userChild.programa = params.programa;
          userChild.carrera = params.carrera;
          localStorage.setItem("user",JSON.stringify(user));
          localStorage.setItem("est", JSON.stringify(userChild));
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {

      let params = {
        nombre: data.nombre,
        apellido: data.apellido,
        cargo: data.cargo,
      }

      console.log(params);

      axios
        .put(`http://localhost:8080/admin/datos/${user.id}`, params)
        .then(function (response) {
          user.nombre = params.nombre;
          user.apellido = params.apellido;
          userChild.cargo = params.cargo;
          localStorage.setItem("user",JSON.stringify(user));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  function getTotal(comps: any[]) {
    let total = 0;
    comps.forEach(comp => total += comp.monto);
    return `$${total}`;
  }

  function getTotalComps(comps: any[]) {
    let total = 0;
    comps.forEach(comp => total += 1);
    return `${total}`;
  }
  
  if(user) {
      return (
        <>
          <div className="grid">
            <button type="submit" className="sisgeg" onClick={inicio}>SISGEG</button>
            <div className="eslogan">Sistema seguimiento escuela graduados</div>
            <div className='logout-container'> <LogoutButton></LogoutButton>   </div>
            <LogoImage />
          </div>
          <div className="griddatos">
            <div className="contenedor-cuadrado">
              <img src={perfilImage} alt="Foto perfil" />
            </div>
            <div 
              
              >
              {editMode ? (
                <div className='datos datos-form'>
                  <div className='campo-form'>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                      id="nombre"
                      type="text"
                      {...register("nombre", {
                        required: {
                          value: true,
                          message: "Ingrese un nombre"
                        }
                      })}
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                    <p className="danger" style={{ fontSize: 14 }}>
                      {showErrors && errors.nombre && (errors.nombre.message)}
                    </p>
                  </div>

                  <div className='campo-form'>
                    <label htmlFor="apellido">Apellido:</label>
                    <input
                      id="apellido"
                      type="text"
                      {...register("apellido", {
                        required: {
                          value: true,
                          message: "Ingrese un apellido"
                        }
                      })}
                      value={apellido}
                      onChange={(e) => setApellido(e.target.value)}
                    />
                    <p className="danger" style={{ fontSize: 14 }}>
                      {showErrors && errors.apellido && (errors.apellido.message)}
                    </p>
                  </div>

                  {user.rol === "Estudiante" ? (
                  <>
                  <div className='campo-form'>
                    <label htmlFor="programa">Programa:</label>
                    <input
                      id="programa"
                      type="text"
                      {...register("programa", {
                        required: {
                          value: true,
                          message: "Ingrese su programa"
                        }
                      })}
                      value={programa}
                      onChange={(e) => setPrograma(e.target.value)}
                    />
                    <p className="danger" style={{ fontSize: 14 }}>
                      {showErrors && errors.programa && (errors.programa.message)}
                    </p>
                  </div>

                  <div className='campo-form'>
                    <label htmlFor="carrera">Carrera:</label>
                      <input
                        id="carrera"
                        type="text"
                        {...register("carrera", {
                          required: {
                            value: true,
                            message: "Ingrese su carrera"
                          }
                        })}
                        value={carrera}
                        onChange={(e) => setCarrera(e.target.value)}
                      />
                      <p className="danger" style={{ fontSize: 14 }}>
                        {showErrors && errors.carrera && (errors.carrera.message)}
                      </p>
                  </div>
                  </>
                  ) : (
                  <>
                  <div className='campo-form'>
                  <label htmlFor="cargo">Cargo:</label>
                  <select 
                    id="cargo"
                    {...register("cargo", {
                      required: "Ingrese su cargo",
                    })}
                    value={cargo}
                    onChange={(e) => setCargo(e.target.value)}
                    >
                    <option value="">Seleccione...</option>
                    <option value="Secretaria">Secretaria</option>
                    <option value="Director de programa">Director de programa</option>
                  </select>
                  <p className="danger" style={{ fontSize: 14 }}>
                    {showErrors && errors.cargo && (errors.cargo.message)}
                  </p>
                </div>
                <br />
                </>
                  )}

                  <button type="submit" className="save-button" onClick={handleSubmit(handleSaveButton)}>Guardar</button>
                </div>
              ) : (
                <div
                  className="datos datos-info"
                  onMouseEnter={() => setHovered(!hovered)}
                  onMouseLeave={() => setHovered(!hovered)}
                  >
                  {hovered && <EditIcon className='edit_icon' onClick={() => setEditMode(true)}/>}
                  {user && <div>{nombre} {apellido}</div>}
                  {userChild && user.rol === "Estudiante" ? (
                    <>
                    <div className='p1'>{carrera}</div>
                    <div className='p1'>{programa}</div>
                    </>
                  ) : <div className='p1'>{cargo}</div>}
                </div>
              )}
            </div>
          </div>
          <div className="linea"></div>
          <div className="gridresumen">
              {user && user.rol === "Estudiante" ?
              <>
              <div className="resumen">
                <div className='estadofin'>Resumen Financiero</div>
                <div className='resumen3'>
                  <div className='resumen1'>Monto total abonado: </div>
                  <div className='datocuadro'>{comps ? getTotal(comps) : "$0"}</div>
                </div>
                <div className='resumen3'>
                  <div className='resumen1'>Total comprobantes ingresados:</div>
                  <div className='datocuadro'>{comps ? getTotalComps(comps) : "0"}</div>
                </div>
              </div>
              <div className="botones">
                <div className='estadofin'>Estado Financiero</div>
                <div className='contenedor-botones'><button type="submit" className="boton" onClick={histComp}>Historial de comprobantes</button></div>
                <div className='contenedor-botones'><button type="submit" className="boton" onClick={subirComp}>Subir comprobante</button></div>
              </div> 
              </> :
              <div className="botones">
                <div className='estadofin'>Estados de pago</div>
                <div className='contenedor-botones'><button type="submit" className="boton" onClick={admin}>Pagos de arancel</button></div>
              </div>
              }
            </div>
        </>
        );
  }

  return null;
};

export default Home;
