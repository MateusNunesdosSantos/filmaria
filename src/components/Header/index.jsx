import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <header>
            <Link to={'/'} className='logo'>Filmaria</Link>
            <Link to={'/'} className='favoritos'>Salvos</Link>

        </header>
    );
}

export default Header;
