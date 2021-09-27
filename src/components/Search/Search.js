import React, { useState } from 'react';
import './Search.css';


const Search = ({ searchCharacter }) => {
    // const [query, setQuery] = useState('');

    // searchCharacter(query);
    const handleChange = (e) => {
        e.preventDefault()
        searchCharacter(e.target.value)
    }

    return (
        <form className='search-form'>
            <div className='image-container'>
                <section className='home-page-background-img'>
                    <img className='home-page-bg' src="https://cdn.guidingtech.com/imager/assets/191091/Best-HD-Wallpapers-From-the-Marvel-Universe-5_935adec67b324b146ff212ec4c69054f.webp" alt='Marvel background'/>
                </section>
            </div>
            <input
              className='search-bar'
              type='search'
              placeholder='SEARCH'
            //   onChange={(e)=> searchCharacter(e.target.value)}
              onChange={(e)=> handleChange(e)}

            />
        </form>
    )
}

export default Search;