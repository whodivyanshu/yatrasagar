"use client"
import React, { useEffect } from 'react';
import styles from "./yatras.module.css";
import Image from 'next/image';
import Image1 from "./images/kedarnath.png";
import Image2 from "./images/2.png";
import Image3 from "./images/3.png";
import Image4 from "./images/4.png";
import Image5 from "./images/5.png";
import Star from "./images/star.png";
import arrow from './images/arrow-right.png';

import Glide from '@glidejs/glide'
import "node_modules/@glidejs/glide/src/assets/sass/glide.core.scss";
import "node_modules/@glidejs/glide/src/assets/sass/glide.theme.scss";

const Yatras = () => {
    useEffect(() => {
        var glide = new Glide('.glide', {
            type: 'slider',
            perView: 4,
            focusAt: 0,
            bound: true,
            autoplay: 4000,
            hoverpause: true,
            animationTimingFunc: 'ease-out',
            breakpoints: {
              1200: {
                perView: 3
              },
              900: {
                perView: 2
              },
              600: {
                focusAt: 'center',
                bound: false,
                
                perView: 1
              }
            }
          })
          
        glide.mount()
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Upcoming Yatras</h1>
                <p>All Yatras <Image className={styles.arrow} src={arrow}></Image></p>
            </div>
            <br />
            <br />
            <br />
            <div class="glide">
              <div class="glide__track" data-glide-el="track">
                <ul class="glide__slides">
                  <li class="glide__slide">
                    <div className={styles.yatraTile}>
                        <Image src={Image1} width={250} height={220}></Image>
                        <div className={styles.yatrabottom}>
                          <div className={styles.flexDiv}>
                            <div>
                              <h4>Kedarnath Temple</h4>
                              <p className={styles.yatraPlace}>Uttarakhand</p>
                            </div>
                            <div className={styles.flexRight}>
                              <div className={styles.flexDiv}>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                              </div>
                            </div>
                          </div>
                          <h6>(4.1K) Customer Reviews</h6>
                          <div className={styles.flexDiv}>
                            <h3>₹2499</h3>
                            <div className={styles.flexRight}><p className={styles.almostSold}>Almost Sold Out</p></div>
                          </div>
                        </div>
                    </div>
                  </li>
                  <li class="glide__slide">
                    <div className={styles.yatraTile}>
                        <Image src={Image1} width={250} height={220}></Image>
                        <div className={styles.yatrabottom}>
                          <div className={styles.flexDiv}>
                            <div>
                              <h4>Kedarnath Temple</h4>
                              <p className={styles.yatraPlace}>Uttarakhand</p>
                            </div>
                            <div className={styles.flexRight}>
                              <div className={styles.flexDiv}>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                              </div>
                            </div>
                          </div>
                          <h6>(4.1K) Customer Reviews</h6>
                          <div className={styles.flexDiv}>
                            <h3>₹2499</h3>
                            <div className={styles.flexRight}><p className={styles.almostSold}>Almost Sold Out</p></div>
                          </div>
                        </div>
                    </div>
                  </li>
                  <li class="glide__slide">
                    <div className={styles.yatraTile}>
                        <Image src={Image1} width={250} height={220}></Image>
                        <div className={styles.yatrabottom}>
                          <div className={styles.flexDiv}>
                            <div>
                              <h4>Kedarnath Temple</h4>
                              <p className={styles.yatraPlace}>Uttarakhand</p>
                            </div>
                            <div className={styles.flexRight}>
                              <div className={styles.flexDiv}>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                              </div>
                            </div>
                          </div>
                          <h6>(4.1K) Customer Reviews</h6>
                          <div className={styles.flexDiv}>
                            <h3>₹2499</h3>
                            <div className={styles.flexRight}><p className={styles.almostSold}>Almost Sold Out</p></div>
                          </div>
                        </div>
                    </div>
                  </li>
                  <li class="glide__slide">
                    <div className={styles.yatraTile}>
                        <Image src={Image1} width={250} height={220}></Image>
                        <div className={styles.yatrabottom}>
                          <div className={styles.flexDiv}>
                            <div>
                              <h4>Kedarnath Temple</h4>
                              <p className={styles.yatraPlace}>Uttarakhand</p>
                            </div>
                            <div className={styles.flexRight}>
                              <div className={styles.flexDiv}>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                              </div>
                            </div>
                          </div>
                          <h6>(4.1K) Customer Reviews</h6>
                          <div className={styles.flexDiv}>
                            <h3>₹2499</h3>
                            <div className={styles.flexRight}><p className={styles.almostSold}>Almost Sold Out</p></div>
                          </div>
                        </div>
                    </div>
                  </li>
                  <li class="glide__slide">
                    <div className={styles.yatraTile}>
                        <Image src={Image1} width={250} height={220}></Image>
                        <div className={styles.yatrabottom}>
                          <div className={styles.flexDiv}>
                            <div>
                              <h4>Kedarnath Temple</h4>
                              <p className={styles.yatraPlace}>Uttarakhand</p>
                            </div>
                            <div className={styles.flexRight}>
                              <div className={styles.flexDiv}>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                              </div>
                            </div>
                          </div>
                          <h6>(4.1K) Customer Reviews</h6>
                          <div className={styles.flexDiv}>
                            <h3>₹2499</h3>
                            <div className={styles.flexRight}><p className={styles.almostSold}>Almost Sold Out</p></div>
                          </div>
                        </div>
                    </div>
                  </li>
                  <li class="glide__slide">
                    <div className={styles.yatraTile}>
                        <Image src={Image1} width={250} height={220}></Image>
                        <div className={styles.yatrabottom}>
                          <div className={styles.flexDiv}>
                            <div>
                              <h4>Kedarnath Temple</h4>
                              <p className={styles.yatraPlace}>Uttarakhand</p>
                            </div>
                            <div className={styles.flexRight}>
                              <div className={styles.flexDiv}>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                                <Image src={Star} width={15} height={15}></Image>
                              </div>
                            </div>
                          </div>
                          <h6>(4.1K) Customer Reviews</h6>
                          <div className={styles.flexDiv}>
                            <h3>₹2499</h3>
                            <div className={styles.flexRight}><p className={styles.almostSold}>Almost Sold Out</p></div>
                          </div>
                        </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="glide__arrows" data-glide-el="controls">
                <button className={styles.slideControls} class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
                <button className={styles.slideControls} class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
              </div>
            </div>
        </div>
    )
}

export default Yatras;
