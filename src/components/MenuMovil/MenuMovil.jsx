import './MenuMovil.scss';
import {Link} from 'react-router-dom';
import {useState} from 'react';

export default function MenuMovil(){

    const [menu, setMenu] = useState (false);

    function accionMenu(){
        setMenu(!menu);
    }

    return(
        <nav className='MenuMovil'>
            <div className="contenedor">
                <div className="btn" onClick={accionMenu}>
                {menu ? 
                <i className="fas times"></i>
                :
                <i className="fas fa-bars"></i>}
                </div>
            </div>
            <div className={`blur ${menu ? 'activo' : '' }`}> </div>
            <div className={`enlacesMoviles ${menu ? 'activo' : '' }`}>
                <h3>Menú</h3>
            <Link to="/acerca"> ACERCA DE</Link>
            <Link to="/"> INICIO </Link>    
            <Link to="/contacto"> CONTACTO </Link>
            </div>
        </nav>
    )
}
