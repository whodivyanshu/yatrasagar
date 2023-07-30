
import React from "react";
import styles from './yatra.module.css';
import Image from 'next/image';
import Image1 from 'https://drive.google.com/uc?export=view&id=1A1d_u2uWvwvDbWENvAfpvMJ6r1rNfqKf'
import { useRouter } from 'next/router';
import { Lora } from "next/font/google";
const lora = Lora({
    weight: "400",
    subsets: ["latin"],
});
const data=[[
    "kedarnath",
    'A Soul Stirring Journey to Kedarnath',
    'The Sacred River Ganga Flows Gracefully',
    'The Opening Date and Time of Kedarnath Temple',
    'Things to carry in Kedarnath Trekking Trips',
    'Majestic Himalayas Meet the Sky',
    'The Sacred River Ganga Flows Gracefully'
],
[
    "goldenTemple",
    'A Soul Stirring Journey to Kedarnath',
    'The Sacred River Ganga Flows Gracefully',
    'The Opening Date and Time of Kedarnath Temple',
    'Things to carry in Kedarnath Trekking Trips',
    'Majestic Himalayas Meet the Sky',
    'The Sacred River Ganga Flows Gracefully'
],[
    "shantiStupa",
    'A Soul Stirring Journey to Kedarnath',
    'The Sacred River Ganga Flows Gracefully',
    'The Opening Date and Time of Kedarnath Temple',
    'Things to carry in Kedarnath Trekking Trips',
    'Majestic Himalayas Meet the Sky',
    'The Sacred River Ganga Flows Gracefully'
],[
    "meenakshiTemple",
    'A Soul Stirring Journey to Kedarnath',
    'The Sacred River Ganga Flows Gracefully',
    'The Opening Date and Time of Kedarnath Temple',
    'Things to carry in Kedarnath Trekking Trips',
    'Majestic Himalayas Meet the Sky',
    'The Sacred River Ganga Flows Gracefully'
]
]
const Yatra=()=>{
    const router=useRouter();
    const {Index}=router.query;
    return(
        <>
            <div  className={styles.flexDiv}>
                <div className={styles.sixty}>
                    <h1 style={lora.style}>{Index?data[Index][1]:data[0][1]}</h1>
                    <p>{styles.flexDiv}</p>
                </div>
                <div className={[styles.flexRight, styles.forty].join(" ")}>
                    <Image src='https://drive.google.com/uc?export=view&id=1A1d_u2uWvwvDbWENvAfpvMJ6r1rNfqKf' width={700} height={700}></Image>
                </div>
            </div>
            <div className={styles.flexDiv}>
                <div></div>
                <div className={styles.flexRight}></div>
            </div>
            <div className={styles.flexDiv}>
                <div></div>
                <div className={styles.flexRight}></div>
            </div>
            <div className={styles.flexDiv}>
                <div></div>
                <div className={styles.flexRight}></div>
            </div>
            <div className={styles.flexDiv}>
                <div></div>
                <div className={styles.flexRight}></div>
            </div>
            <div className={styles.flexDiv}>
                <div></div>
                <div className={styles.flexRight}></div>
            </div>
            <div className={styles.flexDiv}>
                <div></div>
                <div className={styles.flexRight}></div>
            </div>

        </>
    )
}

export default Yatra;