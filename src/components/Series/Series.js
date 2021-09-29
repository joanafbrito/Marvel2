import React from 'react';
import './Series.css';

const Series = (props) => {
    const series = props.series.map((serie) => {
        return (
                <li>{ serie.name }</li>
        )
    });

    return (
        <ul className='series-list'>
        {series}
    </ul>
    );
};



export default Series;