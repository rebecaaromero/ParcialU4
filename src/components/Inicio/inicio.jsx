import './inicio.scss';

export default function Inicio (){
    return(
        <section className="inicio"> 
            <div className="contenedor2">
                <div className="descripcion">
                <p> Encuentra el viaje de tus sueños. <br/>Paquetes de viajes, viajes combinados, última hora, hoteles, vuelos y más. <br/>¡Tu próximo viaje comienza aquí! </p> </div>
        <div className="destinos">
            <div className="mexico"> 
                <img src="img/1.jpg" alt="" />
                <button> MÉXICO</button>
                </div>
            <div className="italia"> 
                <img src="img/2.jpg" alt=""/>
                <button> ITALIA </button>
            </div>
            <div className="maldivas"> 
                <img src="img/3.jpg" alt=""/>
                <button> MALDIVAS </button>
            </div>
            </div>
            </div>
        </section>
    )
}