import React from "react";
import { Link } from "react-router-dom";
import './styles.css';
import BatmanSymbol from '../../assets/batman-simbol.png'

function Galeria(){
    return (
        <div>
            <div className="gallery-container">
                <Link to='/fotos' style={{textDecoration: 'none'}} className="gallery-items">
                    <img src={BatmanSymbol} alt="Batman's Symbol" />
                </Link>
                <Link to='/fotos' style={{textDecoration: 'none'}} className="gallery-items">
                    <img src={BatmanSymbol} alt="Batman's Symbol" />
                </Link>
                <Link to='/fotos' style={{textDecoration: 'none'}} className="gallery-items">
                    <img src={BatmanSymbol} alt="Batman's Symbol" />
                </Link>
                <Link to='/fotos' style={{textDecoration: 'none'}} className="gallery-items">
                    <img src={BatmanSymbol} alt="Batman's Symbol" />
                </Link>
                <Link to='/fotos' style={{textDecoration: 'none'}} className="gallery-items">
                    <img src={BatmanSymbol} alt="Batman's Symbol" />
                </Link>
                <Link to='/fotos' style={{textDecoration: 'none'}} className="gallery-items">
                    <img src={BatmanSymbol} alt="Batman's Symbol" />
                </Link>
            </div>        
        </div>
    )
}

export default Galeria;