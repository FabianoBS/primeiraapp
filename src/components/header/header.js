import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import Logo from '../../assets/batman-logo.png';

function Header(){
    return (
        <header>
            <img id="logo" src={Logo} />
            <nav>
                <ul>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <li>Home</li>
                    </Link>
                    <Link to='/contato' style={{textDecoration: 'none'}}>
                        <li>Contato</li>
                    </Link>
                    <Link to='/fotos' style={{textDecoration: 'none'}}>
                        <li>Fotos</li>
                    </Link>
                    <Link to='/comentarios' style={{textDecoration: 'none'}}>
                        <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header;