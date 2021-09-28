import React from 'react';
import './Header.css';

const Header = () => {

    return(
        <header className='header'>
            <div className='logo-img-container'>
                <img className='marvel-logo' src="/m_logo.png" alt='Marvel'/>
            </div>
            <a className='home-page-link'href='/'>Characters</a>
        </header>
    )

}

export default Header;