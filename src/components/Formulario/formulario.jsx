import {isEmpty, isEmail} from 'validator';
import {useState} from 'react';
import './formulario.scss';

export default function Formulario() {

const [error, setError] = useState(false);
const [formulario, setFormulario] = useState({
    nombre: '',
    correo: '',
})

function capturarDatos(e){
    setFormulario({
        ...formulario,
        [e.target.name]: e.target.value
    })
}

function validarDatos(e){
    const {nombre, correo} = formulario;
    e.preventDefault();

    if(isEmpty(nombre) || isEmpty(correo)) {
        setError({
            estado:true,
            mensaje: 'Complete todos los campos obligatorios'
        })
    } else {
        if(!isEmail(correo)){
            setError({
                estado: true,
                mensaje: 'Escriba un correo válido'
            })
        } else{
            setError({
                estado:false,
                mensaje: ''
            })
            setFormulario({
                ... formulario,
                nombre: '',
                correo: '',
            })
        }
    }
}


    return(
        <section className-='form'>
            <div className="formulario">  
            <form id="contacto" onSubmit={validarDatos} >
            <h3>¡Pónte en contacto con nosotros!</h3>
                <input 
                type="text"
                id="Nombre"
                placeholder="Nombre Completo" 
                name="Nombre" 
                value={formulario.Nombre} 
                tabindex="1" required autofocus  onChange= {capturarDatos} />
                <input 
                placeholder="Correo" 
                type="email" 
                name="Correo" 
                value={formulario.Correo}  tabindex="2" required onChange= {capturarDatos} />
                <input placeholder="Número de teléfono (opcional)" type="tel" tabindex="3" required/>
                <input placeholder="Presupuesto" type="number" tabindex="4" required/>
                <textarea placeholder="Cuéntanos tu viaje ideal...." tabindex="5" required></textarea>
                {error.estado &&
                <div className="error"> <span> Error:</span> Mensaje de ejemplo</div>}
                <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Enviar</button>
            </form>
        </div>
        </section>
    )
}