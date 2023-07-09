import React, { useState, useEffect, FC } from 'react'
import { Redirect, RouteComponentProps } from "react-router-dom";
import "./styles/home.css";
import perfilImage from "../images/perfil.png";
import LogoImage from "./LogoImage";
import LogoutButton from './LogoutButton';
import EditIcon from '@mui/icons-material/Edit';
import { useForm } from 'react-hook-form';
import axios, {AxiosRequestConfig} from 'axios';

const Auth0token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkFtZEpydXlTNHJhX24zeGZuemNleCJ9.eyJpc3MiOiJodHRwczovL2Rldi1scG1od3RpMXV3dHNnZm9rLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJLeVE0TUhaWHBTYWpNOUZWVmtnUUI3Z1Y2eGNwYXV2TkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtbHBtaHd0aTF1d3RzZ2Zvay51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY4ODE1NDE4NCwiZXhwIjoxNjkwNzQ2MTg0LCJhenAiOiJLeVE0TUhaWHBTYWpNOUZWVmtnUUI3Z1Y2eGNwYXV2TiIsInNjb3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkYXRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgcmVhZDp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfY3VzdG9tX2Jsb2NrcyBkZWxldGU6dXNlcl9jdXN0b21fYmxvY2tzIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDpob29rcyB1cGRhdGU6aG9va3MgZGVsZXRlOmhvb2tzIGNyZWF0ZTpob29rcyByZWFkOmFjdGlvbnMgdXBkYXRlOmFjdGlvbnMgZGVsZXRlOmFjdGlvbnMgY3JlYXRlOmFjdGlvbnMgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDppbnNpZ2h0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOmxvZ3NfdXNlcnMgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIHVwZGF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHJlYWQ6YW5vbWFseV9ibG9ja3MgZGVsZXRlOmFub21hbHlfYmxvY2tzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHVwZGF0ZTpjdXN0b21fZG9tYWlucyByZWFkOmVtYWlsX3RlbXBsYXRlcyBjcmVhdGU6ZW1haWxfdGVtcGxhdGVzIHVwZGF0ZTplbWFpbF90ZW1wbGF0ZXMgcmVhZDptZmFfcG9saWNpZXMgdXBkYXRlOm1mYV9wb2xpY2llcyByZWFkOnJvbGVzIGNyZWF0ZTpyb2xlcyBkZWxldGU6cm9sZXMgdXBkYXRlOnJvbGVzIHJlYWQ6cHJvbXB0cyB1cGRhdGU6cHJvbXB0cyByZWFkOmJyYW5kaW5nIHVwZGF0ZTpicmFuZGluZyBkZWxldGU6YnJhbmRpbmcgcmVhZDpsb2dfc3RyZWFtcyBjcmVhdGU6bG9nX3N0cmVhbXMgZGVsZXRlOmxvZ19zdHJlYW1zIHVwZGF0ZTpsb2dfc3RyZWFtcyBjcmVhdGU6c2lnbmluZ19rZXlzIHJlYWQ6c2lnbmluZ19rZXlzIHVwZGF0ZTpzaWduaW5nX2tleXMgcmVhZDpsaW1pdHMgdXBkYXRlOmxpbWl0cyBjcmVhdGU6cm9sZV9tZW1iZXJzIHJlYWQ6cm9sZV9tZW1iZXJzIGRlbGV0ZTpyb2xlX21lbWJlcnMgcmVhZDplbnRpdGxlbWVudHMgcmVhZDphdHRhY2tfcHJvdGVjdGlvbiB1cGRhdGU6YXR0YWNrX3Byb3RlY3Rpb24gcmVhZDpvcmdhbml6YXRpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVycyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVycyBjcmVhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgY3JlYXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uc19zdW1tYXJ5IGNyZWF0ZTphY3Rpb25zX2xvZ19zZXNzaW9ucyBjcmVhdGU6YXV0aGVudGljYXRpb25fbWV0aG9kcyByZWFkOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgdXBkYXRlOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgZGVsZXRlOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgcmVhZDpjbGllbnRfY3JlZGVudGlhbHMgY3JlYXRlOmNsaWVudF9jcmVkZW50aWFscyB1cGRhdGU6Y2xpZW50X2NyZWRlbnRpYWxzIGRlbGV0ZTpjbGllbnRfY3JlZGVudGlhbHMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.jk9UmZq5jOdo8sL_8E491VZ-EHnJB3IqNJNDrinMKPnLcn62ws2U5_gEqipT0sajqj1rgGDLEuDZ79-jSi2pYJcJ-K77jqwlZjPIwmCEqdXn8Hjz6Vrzsbuv4UVbo0_76oFQw-ahSH8uC2DYRFOEvqijkifwQDKeY9OEpzWjG5-djFe1hpfq-bOuPlbNDNvaEIQCMnre2oIObtXtLud5HVyRWHjNd1eGlc5_yUsdQjnWNEaYoNoqOfBMkL_OLwvymKBG3tcSJdkqp8EjGUeYoYVBwQcugJI9u1M_kFFYU_RT4FVYS-eioyrOF21_iyKGIqm24nL92L_9lnsEabJb4w"

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

  const cambiarContraseña = async () => {
    console.log('Iniciando cambio de contraseña');
    var id = user.email
    var client_id = "HTstXUMKgWFq1CpvYeff0dLMexjk5cSG"
    var connection_id = "con_xajlBqx8elYn0nCY"
    const axios = require('axios');
    let data = JSON.stringify({
      "connection_id" : connection_id,
      "email": id,
      "client_id": client_id,
      "includeEmailInRedirect": true
    });

    const config: AxiosRequestConfig = {
      method: 'post',
      url: 'https://dev-lpmhwti1uwtsgfok.us.auth0.com/api/v2/tickets/password-change',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${Auth0token}`,
        'Accept': 'application/json',
      },
      data: data,
    };

    try {
      const response = await axios(config);
      console.log(JSON.stringify(response.data));
      var link = response.data.ticket
      window.open(link)
    } catch (error) {
      console.log(error);
    }

  };
  
  if(user) {
      return (
        <>
          <div className="grid">
            <button type="submit" className="sisgeg" onClick={inicio}>SISGEG</button>
            <div className="eslogan">Sistema seguimiento escuela graduados</div>
            <div className='logout-container'> <LogoutButton></LogoutButton></div>
            <LogoImage />
          </div>
          <div className="griddatos">
            <div className="contenedor-cuadrado">
              <img src={perfilImage} alt="Foto perfil" />
            </div>
            
          <div>
          
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
                <div className='contenedor-botones'>
                  <button type="submit" className="boton" onClick={histComp}>Historial de comprobantes</button>
                </div>
                <div className='contenedor-botones'>
                  <button type="submit" className="boton" onClick={subirComp}>Subir comprobante</button>
                </div>
                <div className='contenedor-botones'></div>
                <div className='contenedor-botones'></div>
              </div> 

              <div className="botones">
                <div className='estadofin'>Cuenta</div>
                <div className='contenedor-botones'>
                  <button className='boton' onClick={cambiarContraseña}>
                    Cambiar contraseña
                  </button>
                </div>
                <div className='contenedor-botones'></div>
                <div className='contenedor-botones'></div>
                <div className='contenedor-botones'></div>
                
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
