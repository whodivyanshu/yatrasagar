import React from 'react'
import Styles from "./yatra.module.css"
import Image from 'next/image'
import image1 from "./image.jpg";
import image2 from "./ima.jpg";
import { Poppins } from 'next/font/google';


const poppins = Poppins({
    weight: "400",
    subsets: ["latin"],
    });


const Yatra = () => {
  return (
    <div className={Styles.container} >
        <div className={Styles.image} >
            <Image src={image2} alt="Kedarnath Temple"/>
        </div>
        <div className={Styles.text} >
            <h2 style={poppins.style}>Kedarnath Temple</h2>
            <p style={poppins.style}>Uttrakhand</p>
        </div>
    </div>
  )
}

export default Yatra;