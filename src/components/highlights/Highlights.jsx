"use client"
import React, { useEffect } from 'react';
import styles from "./highlight.module.css";
import Image from 'next/image';
import Image1 from "./images/1.jpg";
import Image2 from "./images/2.jpg";
import Image3 from "./images/3.jpg";
import Image4 from "./images/4.jpg";
import Image5 from "./images/5.jpg";
import { Splide } from '@splidejs/splide';
import '@splidejs/splide/css';

import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/sea-green';

import '@splidejs/splide/css/core';

const Highlights = () => {
    useEffect(() => {
        const splide = new Splide('.splide', {
            type: 'loop',
            perPage: 5,
            focus: 'center',
//             type  : 'fade',
//   rewind: true,
        });

        splide.mount();
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Yatra Highlights</h1>
                <p>Join the Sacred Mandir Yatra for an Unforgettable Experience!</p>
            </div>
            <section className="splide" aria-label="Splide Basic HTML Example">
                <div className="splide__track">
                    <ul className="splide__list">
                        <li className="splide__slide slide1"><Image alt='hey' width={258} height={400} src={Image1} /></li>
                        <li className="splide__slide slide2"><Image alt='hey' width={258} height={400} src={Image2} /></li>
                        <li className="splide__slide slide3"><Image alt='hey' width={258} height={400} src={Image3} /></li>
                        <li className="splide__slide slide4"><Image alt='hey' width={258} height={400} src={Image4} /></li>
                        <li className="splide__slide slide5"><Image alt='hey' width={258} height={400} src={Image5} /></li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Highlights;
