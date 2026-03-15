import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div>
      <h1 className={styles.head}>React Js LEarning</h1>
      <button className={styles.btn}>login now</button>
    </div>
  )
}

export default Header
