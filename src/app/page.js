import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { Cagliostro, Poppins, Russo_One, Angkor } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const angkor = Angkor({
  weight: "400",
  subsets: ["latin"],
});
const biorhyme = Cagliostro({
  weight: "400",
  subsets: ["latin"],
});

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.navleft}>
          <Link href="#" style={poppins.style}>Home</Link>
          <Link href="#" style={poppins.style}>Highlights</Link>
        </div>
        <div className={styles.navmid}>
          <Link href="#" style={angkor.style}>
            YatraSagar
          </Link>
        </div>
        <div className={styles.navright}>
          <Link href="#" style={poppins.style}>Reviews</Link>
          <Link href="#" style={poppins.style}>About</Link>
        </div>
      </div>
      <div className={styles.title}>
        <h1 style={biorhyme.style}>
          Enlightened Journeys to Sacred <br/> Destinations Worldwide
        </h1>
        <div className={styles.button} >
          <button className={styles.btn} style={poppins.style}>Discover Holy Pilgrimages</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
