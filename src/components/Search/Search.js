import React, { useState } from 'react';
import './Search.css';


const Search = ({ searchCharacter }) => {

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
            <div className='search-bar-container'>
                <img className='icon-search' src='/search_icon.svg' alt='Search icon'/>
                <input
                className='search-bar'
                type='search'
                placeholder='SEARCH'
                onChange={(e)=> handleChange(e)}
                />
            </div>
            <div className='gray-line'></div>
        </form>
    )
}

export default Search;