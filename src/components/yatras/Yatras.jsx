import React from 'react'
import Styles from "./yatras.module.css"
import { Poppins } from 'next/font/google'
import Image from 'next/image';
import Yatra from './yatra/Yatra';

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Yatras = () => {
  return (
    <div className={Styles.container} >
      <div className= {Styles.head} >
        <h1 style={poppins.style}>New Upcoming Yatras</h1>
        <button style={poppins.style}>All Yatras <Image width="30" height="30" src="https://img.icons8.com/ios/50/long-arrow-right--v1.png" alt="long-arrow-right--v1"/> </button>
      </div>
        <div className={Styles.carousel} >
          <Yatra />
          <Yatra />
          <Yatra />
          <Yatra />
          <Yatra />
          <Yatra />
          <Yatra />
          <Yatra />

        </div>
    </div>
  )
}

export default Yatras