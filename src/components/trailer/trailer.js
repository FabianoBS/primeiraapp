import React from "react";
import Video from '../../assets/trailer.mp4'
import './styles.css'

function Trailer(){
    return (
        <div id="trailer-container">
            <div className="content">
                <video controls className="trailer">
                    <source src={Video}/>
                    Seu navegador não possui suporte para vídeos
                </video>
                <div id="sinopse">
                    <p className="description">
                    Situada na fictícia Gotham City, a trama desse suspense noir acompanha o jovem Bruce Wayne (Pattison), um órfão e bilionário que passa grande parte do seu tempo atuando como o vigilante solitário da cidade, conhecido pela população como Batman.
                    </p>
                    <button className="button">
                        Comprar ingresso
                    </button>
                </div>
            </div>
            
        </div>
    )
}

export default Trailer;