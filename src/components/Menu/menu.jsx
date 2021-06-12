import {Link} from 'react-router-dom';
import './menu.scss';
export default function Menu (){
    return(
        <nav className='Menu'>
        <div className='contenedor'>
        <Link to="/acerca"> ACERCA DE</Link>
        <Link to="/"> <img src="img/icono.png" alt="" /></Link>    
        <Link to="/contacto"> CONTACTO </Link>
        </div>
        </nav>
    )
}

