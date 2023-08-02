"use client"
import React, { useState } from 'react';
import styles from "./body1.module.css";
import Link from "next/link";
import { Cagliostro, Poppins, Russo_One, Angkor } from "next/font/google";
import Login from '../login/Login';

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

const Body1 = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLogin = () => {
    setShowLogin(true);
  }

  const handleClose = () => {
    setShowLogin(false);
  }

  return (
    <div className={styles.container}>
      {showLogin && <Login onClose={handleClose} />}
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
          <Link href="#" style={poppins.style}>About</Link>
          <Link href="#" style={poppins.style} onClick={handleLogin}>Login</Link>
        </div>
      </div>
      <div className={styles.title}>
        <h1 style={biorhyme.style}>
          Enlightened Journeys to Sacred <br /> Destinations Worldwide
        </h1>
        <div className={styles.button}>
          <button className={styles.btn} style={poppins.style}>Discover Holy Pilgrimages</button>
        </div>
      </div>
    </div>
  );
}

export default Body1;
