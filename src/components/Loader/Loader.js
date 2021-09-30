import React, { useEffect, useRef }from 'react';
import { gsap } from 'gsap';
import './Loader.css'

const Loader = () => {
    let spiderman = useRef(null)

    useEffect(() => {
        gsap.from([spiderman], {
            duration: 2.5,
            easy: 'bounce.out',
            y: -1000,
            x: 0,
            yoyo: true,
            repeat: 6,
        });

        gsap.to([spiderman], {
            duration: 2.5,
            easy: 'bounce.out',
            y: -180,
            x: 500,
            yoyo: true,
            repeat:3
        });

    },[]);

    return (
        <section className='loader-container'>
            <img className='spiderman-loader' src='/spiderman.png' ref={(el) => spiderman = el } alt='spiderman in loading'/>
            <h2 className='loading-msg'>Hi,... helo.... ops...looks like it is loading...</h2>
        </section>
    )
    

}

export default Loader;