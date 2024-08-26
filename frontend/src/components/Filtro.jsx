import propTypes from 'prop-types';
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'

const Filtrar = ({Categorias, SetCategorias, nombre, setNombre, className}) => {
    const categoriaSelected = 'w-20 text-md p-2 rounded-xl bg-blue-400 scale-110'
    const categoriaDefault = 'w-20 text-md p-2 rounded-xl bg-blue-400 hover:bg-blue-600 hover:scale-110';
    const [Filtros, setFiltro] = useState(false);
    const Chequeo = () => {
        document.getElementById('all').className = categoriaDefault;
        if(!Categorias){
            document.getElementById('all').className = categoriaSelected;
        }
        document.getElementById('Categories').childNodes.forEach(element => {
            element.className = element.id == Categorias ? categoriaSelected : categoriaDefault
        });
    }

    useEffect(() => {
        Chequeo();
    }, [Categorias])

    return (
        <div className={'z-20 relative flex flex-col justify-center items-center gap-4 h-fit text-center px-4 py-4 rounded-xl shadow-xl' + className + (Filtros ? '' : 'translate-x-[100%]')}>
            <h1 className="text-2xl font-bold">Filtro</h1>
            <h2 className="text-xl font-bold">Buscar</h2>
    }