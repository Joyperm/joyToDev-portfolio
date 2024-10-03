import React, {useState} from "react";

import styles from './Navbar.module.css';
import {getImageUrl} from '../../utils';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">Joy To Dev</a>
      <div className={styles.menu}>
        <img className={styles.menuBtn}         
        src={
            menuOpen 
            ? getImageUrl('nav/closeIcon.png')
            : getImageUrl('nav/menuIcon.png')} 
        alt="menu-button" 
        onClick={()=>setMenuOpen(!menuOpen)} // hide & show menu when clicked
        />        
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={()=> setMenuOpen(false)}>   
        {/* onclick= close the menu when selected end hide & show menu when clicked        */}
            
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Project</a>
          </li>
          <li>
            <a href="#research">Research</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
