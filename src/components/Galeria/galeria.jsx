import './galeria.scss';

export default function Galeria (){
    return(
        <section >
            <div className="galeria">
            <div className="galeria_columna">
                <a href="https://unsplash.com/photos/9IqIwOD65X0" className="galeria_link">
                    <figure className="galeria_miniatura">
                        <img src="img/g1.jpeg" alt="Iceland" className="galeria_imagen"/>
                        <figcaption className="galeria_leyenda">Iceland</figcaption>
                    </figure>
                </a>
        
                <a href="https://unsplash.com/photos/fCqrdUb9COg" className="galeria_link">
                    <figure className="galeria_miniatura">
                        <img src="img/g2.jpeg" alt="Jaipur, Rajasthan, India" className="galeria_imagen"/>
                        <figcaption className="galeria_leyenda">Jaipur, Rajasthan, India</figcaption>
                    </figure>
                </a>
        
                <a href="https://unsplash.com/photos/MRVazFxfm50" className="galeria_link">
                    <figure className="galeria_miniatura">
                        <img src="img/g3.jpeg" alt="Cicladi, Grecia" className="galeria_imagen"/>
                        <figcaption className="galeria_leyenda">Cicladi, Grecia</figcaption>
                    </figure>
                </a>
            </div>
        
            <div className="galeria_columna">
                <a href="https://unsplash.com/photos/SHNGFJx3Spo"  className="galeria_link">
                    <figure className="galeria_miniatura">
                        <img src="img/g4.jpeg" alt="Hallstatt, Austria" className="galeria_imagen"/>
                        <figcaption className="galeria_leyenda">Hallstatt, Austria</figcaption>
                    </figure>
                </a>
        
                <a href="https://unsplash.com/photos/DdW-KDap7DU"  className="galeria_link">
                    <figure className="galeria_miniatura">
                        <img src="img/g5.jpeg" alt="Dominican Republic" className="galeria_imagen"/>
                        <figcaption className="galeria_leyenda">Dominican Republic</figcaption>
                    </figure>
                </a>
        
                <a href="https://unsplash.com/photos/FgYSaefAUTs"  className="galeria_link">
                    <figure className="galeria_miniatura">
                        <img src="img/g6.jpeg" alt="Petra, Jordania" className="galeria_imagen"/>
                        <figcaption className="galeria_leyenda">Petra, Jordania</figcaption>
                    </figure>
                </a>
            </div>
        
            <div className="galeria_columna">
                <a href="https://unsplash.com/photos/zvUy4_sBAuM"  className="galeria_link">
                    <figure className="galeria_miniatura">
                        <img src="img/g7.jpeg" alt="Tulum, Quintana Roo, Mexico" className="galeria_imagen"/>
                        <figcaption className="galeria_leyenda">Tulum, Quintana Roo, Mexico</figcaption>
                    </figure>
                </a>
        
                <a href="https://unsplash.com/photos/NWsqAW54bGc"  className="galeria_link">
                    <figure className="galeria_miniatura">
                        <img src="img/g8.jpeg" alt="Cefalú, Taormina, Italy" className="galeria_imagen"/>
                        <figcaption className="galeria_leyenda">Cefalú, Taormina, Italy</figcaption>
                    </figure>
                </a>
        
                <a href="https://unsplash.com/photos/1EBr30MS9u0"  className="galeria_link">
                    <figure className="galeria_miniatura">
                        <img src="img/g9.jpeg" alt="El Nido, Province de Palawan, Philippines" className="galeria_imagen"/>
                        <figcaption className="galeria_leyenda">El Nido, Province de Palawan, Philippines</figcaption>
                    </figure>
                </a>
            </div>
            
        </div>
        </section>
    )
}