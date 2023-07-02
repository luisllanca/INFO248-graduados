import React, { useState, useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import PopupFormEstudiante from "./PopupFormEstudiante";
import PopupFormAdmin from "./PopupFormAdmin";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
var myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkFtZEpydXlTNHJhX24zeGZuemNleCJ9.eyJpc3MiOiJodHRwczovL2Rldi1scG1od3RpMXV3dHNnZm9rLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJLeVE0TUhaWHBTYWpNOUZWVmtnUUI3Z1Y2eGNwYXV2TkBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtbHBtaHd0aTF1d3RzZ2Zvay51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTY4ODE1NDE4NCwiZXhwIjoxNjkwNzQ2MTg0LCJhenAiOiJLeVE0TUhaWHBTYWpNOUZWVmtnUUI3Z1Y2eGNwYXV2TiIsInNjb3BlIjoicmVhZDpjbGllbnRfZ3JhbnRzIGNyZWF0ZTpjbGllbnRfZ3JhbnRzIGRlbGV0ZTpjbGllbnRfZ3JhbnRzIHVwZGF0ZTpjbGllbnRfZ3JhbnRzIHJlYWQ6dXNlcnMgdXBkYXRlOnVzZXJzIGRlbGV0ZTp1c2VycyBjcmVhdGU6dXNlcnMgcmVhZDp1c2Vyc19hcHBfbWV0YWRhdGEgdXBkYXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBkZWxldGU6dXNlcnNfYXBwX21ldGFkYXRhIGNyZWF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgcmVhZDp1c2VyX2N1c3RvbV9ibG9ja3MgY3JlYXRlOnVzZXJfY3VzdG9tX2Jsb2NrcyBkZWxldGU6dXNlcl9jdXN0b21fYmxvY2tzIGNyZWF0ZTp1c2VyX3RpY2tldHMgcmVhZDpjbGllbnRzIHVwZGF0ZTpjbGllbnRzIGRlbGV0ZTpjbGllbnRzIGNyZWF0ZTpjbGllbnRzIHJlYWQ6Y2xpZW50X2tleXMgdXBkYXRlOmNsaWVudF9rZXlzIGRlbGV0ZTpjbGllbnRfa2V5cyBjcmVhdGU6Y2xpZW50X2tleXMgcmVhZDpjb25uZWN0aW9ucyB1cGRhdGU6Y29ubmVjdGlvbnMgZGVsZXRlOmNvbm5lY3Rpb25zIGNyZWF0ZTpjb25uZWN0aW9ucyByZWFkOnJlc291cmNlX3NlcnZlcnMgdXBkYXRlOnJlc291cmNlX3NlcnZlcnMgZGVsZXRlOnJlc291cmNlX3NlcnZlcnMgY3JlYXRlOnJlc291cmNlX3NlcnZlcnMgcmVhZDpkZXZpY2VfY3JlZGVudGlhbHMgdXBkYXRlOmRldmljZV9jcmVkZW50aWFscyBkZWxldGU6ZGV2aWNlX2NyZWRlbnRpYWxzIGNyZWF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgcmVhZDpydWxlcyB1cGRhdGU6cnVsZXMgZGVsZXRlOnJ1bGVzIGNyZWF0ZTpydWxlcyByZWFkOnJ1bGVzX2NvbmZpZ3MgdXBkYXRlOnJ1bGVzX2NvbmZpZ3MgZGVsZXRlOnJ1bGVzX2NvbmZpZ3MgcmVhZDpob29rcyB1cGRhdGU6aG9va3MgZGVsZXRlOmhvb2tzIGNyZWF0ZTpob29rcyByZWFkOmFjdGlvbnMgdXBkYXRlOmFjdGlvbnMgZGVsZXRlOmFjdGlvbnMgY3JlYXRlOmFjdGlvbnMgcmVhZDplbWFpbF9wcm92aWRlciB1cGRhdGU6ZW1haWxfcHJvdmlkZXIgZGVsZXRlOmVtYWlsX3Byb3ZpZGVyIGNyZWF0ZTplbWFpbF9wcm92aWRlciBibGFja2xpc3Q6dG9rZW5zIHJlYWQ6c3RhdHMgcmVhZDppbnNpZ2h0cyByZWFkOnRlbmFudF9zZXR0aW5ncyB1cGRhdGU6dGVuYW50X3NldHRpbmdzIHJlYWQ6bG9ncyByZWFkOmxvZ3NfdXNlcnMgcmVhZDpzaGllbGRzIGNyZWF0ZTpzaGllbGRzIHVwZGF0ZTpzaGllbGRzIGRlbGV0ZTpzaGllbGRzIHJlYWQ6YW5vbWFseV9ibG9ja3MgZGVsZXRlOmFub21hbHlfYmxvY2tzIHVwZGF0ZTp0cmlnZ2VycyByZWFkOnRyaWdnZXJzIHJlYWQ6Z3JhbnRzIGRlbGV0ZTpncmFudHMgcmVhZDpndWFyZGlhbl9mYWN0b3JzIHVwZGF0ZTpndWFyZGlhbl9mYWN0b3JzIHJlYWQ6Z3VhcmRpYW5fZW5yb2xsbWVudHMgZGVsZXRlOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGNyZWF0ZTpndWFyZGlhbl9lbnJvbGxtZW50X3RpY2tldHMgcmVhZDp1c2VyX2lkcF90b2tlbnMgY3JlYXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgZGVsZXRlOnBhc3N3b3Jkc19jaGVja2luZ19qb2IgcmVhZDpjdXN0b21fZG9tYWlucyBkZWxldGU6Y3VzdG9tX2RvbWFpbnMgY3JlYXRlOmN1c3RvbV9kb21haW5zIHVwZGF0ZTpjdXN0b21fZG9tYWlucyByZWFkOmVtYWlsX3RlbXBsYXRlcyBjcmVhdGU6ZW1haWxfdGVtcGxhdGVzIHVwZGF0ZTplbWFpbF90ZW1wbGF0ZXMgcmVhZDptZmFfcG9saWNpZXMgdXBkYXRlOm1mYV9wb2xpY2llcyByZWFkOnJvbGVzIGNyZWF0ZTpyb2xlcyBkZWxldGU6cm9sZXMgdXBkYXRlOnJvbGVzIHJlYWQ6cHJvbXB0cyB1cGRhdGU6cHJvbXB0cyByZWFkOmJyYW5kaW5nIHVwZGF0ZTpicmFuZGluZyBkZWxldGU6YnJhbmRpbmcgcmVhZDpsb2dfc3RyZWFtcyBjcmVhdGU6bG9nX3N0cmVhbXMgZGVsZXRlOmxvZ19zdHJlYW1zIHVwZGF0ZTpsb2dfc3RyZWFtcyBjcmVhdGU6c2lnbmluZ19rZXlzIHJlYWQ6c2lnbmluZ19rZXlzIHVwZGF0ZTpzaWduaW5nX2tleXMgcmVhZDpsaW1pdHMgdXBkYXRlOmxpbWl0cyBjcmVhdGU6cm9sZV9tZW1iZXJzIHJlYWQ6cm9sZV9tZW1iZXJzIGRlbGV0ZTpyb2xlX21lbWJlcnMgcmVhZDplbnRpdGxlbWVudHMgcmVhZDphdHRhY2tfcHJvdGVjdGlvbiB1cGRhdGU6YXR0YWNrX3Byb3RlY3Rpb24gcmVhZDpvcmdhbml6YXRpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVycyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGRlbGV0ZTpvcmdhbml6YXRpb25fbWVtYmVycyBjcmVhdGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIHVwZGF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBjcmVhdGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyByZWFkOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJfcm9sZXMgY3JlYXRlOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyByZWFkOm9yZ2FuaXphdGlvbl9pbnZpdGF0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uc19zdW1tYXJ5IGNyZWF0ZTphY3Rpb25zX2xvZ19zZXNzaW9ucyBjcmVhdGU6YXV0aGVudGljYXRpb25fbWV0aG9kcyByZWFkOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgdXBkYXRlOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgZGVsZXRlOmF1dGhlbnRpY2F0aW9uX21ldGhvZHMgcmVhZDpjbGllbnRfY3JlZGVudGlhbHMgY3JlYXRlOmNsaWVudF9jcmVkZW50aWFscyB1cGRhdGU6Y2xpZW50X2NyZWRlbnRpYWxzIGRlbGV0ZTpjbGllbnRfY3JlZGVudGlhbHMiLCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMifQ.jk9UmZq5jOdo8sL_8E491VZ-EHnJB3IqNJNDrinMKPnLcn62ws2U5_gEqipT0sajqj1rgGDLEuDZ79-jSi2pYJcJ-K77jqwlZjPIwmCEqdXn8Hjz6Vrzsbuv4UVbo0_76oFQw-ahSH8uC2DYRFOEvqijkifwQDKeY9OEpzWjG5-djFe1hpfq-bOuPlbNDNvaEIQCMnre2oIObtXtLud5HVyRWHjNd1eGlc5_yUsdQjnWNEaYoNoqOfBMkL_OLwvymKBG3tcSJdkqp8EjGUeYoYVBwQcugJI9u1M_kFFYU_RT4FVYS-eioyrOF21_iyKGIqm24nL92L_9lnsEabJb4w")
var requestOptions: RequestInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'cors',
  redirect: 'follow'
};
const Autenticador: React.FC = () => {
  const history = useHistory();
  const [correo, setCorreo] = useState("")
  const { user, isAuthenticated, isLoading} = useAuth0();
  const [dataLoaded, setDataLoaded] = useState(false); 
  const [rolCuenta, setRolCuenta] = useState("")
  // Bandera para controlar si los datos ya se han cargado
  const waitUntilVariableIsSet = (): Promise<any> => {
    return new Promise((resolve) => {
      const intervalId = setInterval(() => {
        if (correo) { // 
          clearInterval(intervalId);
          resolve(correo);
        }
      }, 100); // Intervalo de verificación en milisegundos
    });
  };
  const getEmail = async () => {
    if(user){
      const mail = user.email
    
    var id = ""
    var rol = ""
    
    waitUntilVariableIsSet();
    await fetch(`https://dev-lpmhwti1uwtsgfok.us.auth0.com/api/v2/users-by-email?email=${mail}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        id = result[0].user_id
      })
      .catch(error => console.log('error', error));
    
    //correo y id obtenida
    await fetch(`https://dev-lpmhwti1uwtsgfok.us.auth0.com/api/v2/users/${id}/roles`, requestOptions)
      .then(response => response.json())
      .then(result => {
        rol = result[0].name // almacena el rol de la cuenta
      })
      .catch(error => console.log('error', error));
    //Obtenidos roles
    
    try {
      const email = mail
      const response = await axios.post("http://localhost:8080/user/login",{email});

      if (response.status === 201) {
        // Señal de éxito: código 201
        // El usuario existe y entonces se puede redirigir al home, dependiendo si es estudiante o admin
        console.log("Usuario logeado correctamente");
        const usuario_db = response.data.usuario;
        const userJson = JSON.stringify(usuario_db);
        console.log(userJson)
        localStorage.setItem("user", userJson);
        
        if (rol === "Estudiante") {
          history.push('/home');
        } 
        else if (rol === "Administrador") {
          history.push('/admin')
          console.log("Admin");
        }
      }
        
      if (response.status === 203) {
        //Se crean los usuarios con formularios
        console.log(rol)
        console.log("ayuda diosito")
        if(rol === "Estudiante"){
          history.push('/registroEstudiante')
        }
        else{
          history.push('/registroAdmin')
        }

        // El usuario no existe y entonces se debe crear, retornado el formulario popup y etc
        
      } 
    } 
    catch (error) {
      // Error de red u otro error
      console.error("Error al realizar la consulta:", error);
    }
    
  }
  };
  if (isLoading) {
    return <div>Cargando...</div>;
  }
  
  if (isAuthenticated && !dataLoaded && user) {
    // Consulta API por correo de usuario
    getEmail(); //Obtiene el ID usando el email
    setDataLoaded(true)
  }

  return <div>Cargando...</div>;

};

export default Autenticador;