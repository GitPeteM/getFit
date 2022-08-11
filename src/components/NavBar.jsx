import React from 'react';
import heart from '../assets/heart.png'
import styles from './App.module.css';

export default function NavBar () {
  return (
    <div>
      <header className={styles.Navbar}>
        <div className={styles.Toolbar}>
              <img className={styles.Logo} src={heart} alt="Weights" />
          <div className={styles.Title}> getFit </div>
          <div>
            <button> Login </button>
          </div>
        </div>
      </header>
      <div className={styles.Toolbar}/>
    </div>
  )
}
