import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.topFooter}>
            <div className={styles.links}>
                <a href='#'>Udemy Business</a>
                <a href='#'>Teach on Udemy</a>
                <a href='#'>Get the app</a>
                <a href='#'>About us</a>
                <a href='#'>Contact us</a>
            </div>
            <div className={styles.links}>
                <a href='#'>Careers</a>
                <a href='#'>Blog</a>
                <a href='#'>Help and Support</a>
                <a href='#'>Affiliate</a>
                <a href='#'>Investors</a>
            </div>
            <div className={styles.links}>
                <a href='#'>Terms</a>
                <a href='#'>Privacy policy</a>
                <a href='#'>Cookie settings</a>
                <a href='#'>Sitemap</a>
                <a href='#'>Accessibility statement</a>
            </div>
            <div className={styles.button}>
                <button><i className="fas fa-solid fa-globe"/> <span>English</span></button>
            </div>
        </div>
        <div className={styles.bottomFooter}>
            <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" alt="udemy logo"/>
            <p>© 2022 Udemy, Inc.</p>
        </div>
        <div className={styles.forSticky}>
        </div>
    </footer>
  )
}

export default Footer
