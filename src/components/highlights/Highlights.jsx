import React from 'react'
import styles from "./highlight.module.css";
import Image from 'next/image';
import Image1 from "./images/1.jpg";
import Image2 from "./images/2.jpg";
import Image3 from "./images/3.jpg";
import Image4 from "./images/4.jpg";
import Image5 from "./images/5.jpg";

// ... (Your imports and component definition remain the same)

const Highlights = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                <h1>Yatra Highlights</h1>
                <p>Join the Sacred Mandir Yatra for an Unforgettable Experience!</p>
            </div>
            <div className={styles.carousel}>
                <div className={styles.card}>
                    <Image width={290} height={400} alt='image' src={Image1}  />
                </div>
                <div className={styles.card}>
                    <Image width={290} height={400} alt='image' src={Image2}  />
                </div>
                <div className={styles.card}>
                    <Image width={290} height={400} alt='image' src={Image3}  />
                </div>
                <div className={styles.card}>
                    <Image width={290} height={400} alt='image' src={Image4}  />
                </div>
                <div className={styles.card}>
                    <Image width={290} height={400} alt='image' src={Image5}  />
                </div>
            </div>
        </div>
    )
}

export default Highlights

