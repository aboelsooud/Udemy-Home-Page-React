import React from 'react'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
        <section className={`${styles.headerItems} ${styles.content}`}>
            <h1><strong>New to Udemy? Lucky you.</strong></h1>
            <p>courses start at E<span>&#8364;</span>169.99. Get your new-student offer before it expires</p>
        </section>
        <figure className={`${styles.headerItems} ${styles.fig}`}>
            <img src="https://i.ibb.co/2qHbQqM/download.png" alt="Clock photo" className={styles.image}/>
        </figure>
    </header>
  )
}

export default Header