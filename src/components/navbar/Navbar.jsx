import React from 'react'
import Styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={Styles.navbar} >
      <div className={Styles.navleft}>
        <Link href="#" style={poppins.style}>Home</Link>
        <Link href="#" style={poppins.style}>Highlights</Link>
      </div>
      <div className={Styles.navmid}>
        <Link href="#" style={angkor.style}>
          YatraSagar
        </Link>
      </div>
      <div className={Styles.navright}>
        <Link href="#" style={poppins.style}>Reviews</Link>
        <Link href="#" style={poppins.style}>About</Link>
      </div>
    </div>
  )
}

export default Navbar