import { getSuggestedQuery } from '@testing-library/react';
import React from 'react';
import './Search.css';

const Search = ({ searchCharacter, clearQuery }) => {

    const handleClick = (e) => {
        e.preventDefault()
        clearQuery('')
    }
    
    const handleChange = (e) => {
        e.preventDefault()
        searchCharacter(e.target.value)
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            e.preventDefault();
            searchCharacter(e.target.value)
        } else {
           console.log('here')
        }
    }

    return (
        <form className='search-form'>
            <div className='image-container'>
                <section className='home-page-background-img'>
                    <img className='home-page-bg' src="https://cdn.guidingtech.com/imager/assets/191091/Best-HD-Wallpapers-From-the-Marvel-Universe-5_935adec67b324b146ff212ec4c69054f.webp" alt='Marvel background'/>
                </section>
            </div>
            <div className='search-bar-container'>
                <img 
                className='icon-search' 
                src='/search_icon.svg' 
                alt='Search icon'
                onClick={(e) => handleClick(e)}     
                />
                <input
                className='search-bar'
                type='search'
                placeholder='SEARCH'
                onChange={(e)=> handleChange(e)}
                onKeyPress={(e)=> handleKeyPress(e)}
                />
            </div>
            <div className='gray-line'></div>
        </form>
    )
}

export default Search;