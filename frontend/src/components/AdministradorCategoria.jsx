import PropTypes from 'prop-types';
import {useAutenticacion} from "../Authentication/Autenticacion.jsx";
import { useEffect, useState } from 'react';
import Fecha from '../assets/FormatoFecha.jsx';
import Espera from './Espera.jsx';
import Backend from '../assets/Backend.jsx';
import axios from "axios";

const AdministradorCategoria = ({Categoria}) => {
    const Auth = useAutenticacion();
    const [Nombre, setNombre] = useState(Categoria.nombre);
    const [Eliminado, setEliminado] = useState(Categoria.eliminado);
    const [tiempo, setTiempo] = useState(false);
    const [error, setError] = useState(null);
    const HandleCopy = (text) => {
        navigator.clipboard.writeText(text);
    };

    const HandleSubmit = async () => {
        try {
            setTiempo(true);
            setError(null);
            const response = await axios.patch(`${Backend.backend}/categorias/${Categoria._id}`, { Nombre, Eliminado }), 
            {
                headers : {
                    "Authorization": `Bearer ${Auth.getAccessToken()}`,
                    "Rol": Auth.Usuario().rol
                }
            };
            if (response.status === 200) {
                console.log("CATEGORIA ACTUALIZADA");
            } 
        } catch (error) {
            setError(`Error: [${error.response.status}] ${error.response.data.message}`);
            console.log(error);
            }
            setTiempo(false);
    };
    useEffect(() => {
        setNombre(Categoria.nombre);
    }, [Categoria]);
        