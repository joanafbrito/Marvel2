import React, { useEffect, useRef }from 'react';
import { gsap } from 'gsap';
import { Redirect } from 'react-router-dom';
import './Loader.css'

const Loader = () => {
    let loadingMessage = useRef(null)
    let spiderman = useRef(null)

    useEffect(() => {
        gsap.from([spiderman], {
            duration: 2.5,
            easy: 'bounce.out',
            y: -1000,
            // scale: -0.6,
            x: 0,
            yoyo: true,
            // rotation: 150,
            repeat: 6,
        });

        gsap.to([spiderman], {
            duration: 2.5,
            easy: 'bounce.out',
            // rotatio: -130,
            y: -180,
            x: 500,
            yoyo: true,
            repeat:3
        });

    },[]);

    return (
        <section className='loader-container'>
            <img className='spiderman-loader' src='/spiderman.png' ref={(el) => spiderman = el } alt='spiderman in loading'/>
            <h2 className='loading-msg' ref={(el) => loadingMessage = el }>Hi,... helo.... ops...looks like it is loading...</h2>
        </section>
    )
    

}

export default Loader;