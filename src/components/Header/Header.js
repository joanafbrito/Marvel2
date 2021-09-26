import React from 'react';
// import marvel_logo from '../../utils/marvel_logo.svg';
import './Header.css';

const Header = () => {

    return(
        <header className='header'>
            <h1>
            {/* <img className='marvel-logo' src={ marvel_logo} alt='Marvel'/> */}
            MARVEL
            </h1>
            <a className='home-page-link'href='/'>Characters</a>
        </header>
    )

}

export default Header;