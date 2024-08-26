import { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
import app from "../Backend.js";
import PropTypes from "prop-types";
import Espera from "../components/Espera.jsx";

const AutenticacionContext = createContext({
    isAuthenticated : false,
    isAdministrador : false,
    getAccessToken : () => {},
    guardarUsuario : () => {},
    cerrarSesion : () => {},
    Usuario : () => {},
    getRefreshToken : () => {}
});
const AutenticacionProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdministrador, setIsAdministrador] = useState(false);
    const [Usuario, setUsuario] = useState({});
    const [accessToken, setAccessToken] = useState("");
    const [espera, setEspera] = useState(true);

    const nuevoAccessToken = async (refrescarToken) => {
        try {
            const response = await axios.post(`${app.backend}/refresh`, null{
                headers : {
                    Authorization : `Bearer ${refrescarToken}`
                }
            });
            if (response.status === 200) {
                return response.data.accessToken;
            }
            else {
                throw new Error(response.statusText);
            }
        } catch (error) {
            console.log(error);
        }

    const chequeoAdmin = async (Usuario, Token) => {
        try {
            const response = await axios.get(`${app.backend}/rol/${Usuario.Rol}`, {
                headers : {
                    Authorization : `Bearer ${Token}`
                }
            });
            return response.data.docs.nombre === "Administrador";
        } catch (error) {
            console.log(error);
        }
    const informacio_U = async (accessToken) => {
        try {
        const response = await axios.get(`${app.backend}/perfil`, {
            headers : {
                Authorization : `Bearer ${accessToken}`
            }
        });
        if (response.status === 200) {
            const chequeo = await chequeoAdmin(response.data, accessToken);
            setIsAdministrador(chequeo);
            return response.data;
        }
        else {
            throw new Error(response.statusText);
        }
        } catch (error) {
            console.log(error);
        }
    }
    const chequeoauth = async () => {
        setEspera(true);
        if (accessToken) {
            const informacion = await informacio_U(accessToken);
            if (informacion) {
                guardarsession(accessToken, informacio_U, getRefreshToken());
            }
            else
    }