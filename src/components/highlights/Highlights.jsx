"use client"
import React, { useEffect } from 'react';
import styles from "./highlight.module.css";
import Image from 'next/image';
import Image1 from "./images/1.jpg";
import Image2 from "./images/2.jpg";
import Image3 from "./images/3.jpg";
import Image4 from "./images/4.jpg";
import Image5 from "./images/5.jpg";
import Glide from '@glidejs/glide/dist/glide.esm';

const Highlights = () => {
  useEffect(() => {
    const glide = new Glide('#options-start-at', {
      startAt: 0,
      perView: 3
    });

    glide.mount();

    const input = document.getElementById('options-start-at');
    input.addEventListener('input', function (event) {
      glide.update({
        startAt: event.target.value
      });
    });
  }, []);

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Yatra Highlights</h1>
                <p>Join the Sacred Mandir Yatra for an Unforgettable Experience!</p>
            </div>
            <div class="glide">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">  
                        <li class="glide__slide"><Image alt='image' width={200} height={350} src={Image1} /></li>
                        <li class="glide__slide"><Image alt='image' width={200} height={350} src={Image2} /></li>
                        <li class="glide__slide"><Image alt='image' width={200} height={350} src={Image3} /></li>
                        <li class="glide__slide"><Image alt='image' width={200} height={350} src={Image4} /></li>

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Highlights

