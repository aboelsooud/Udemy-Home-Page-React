import React from 'react'
import styles from './styles/Stars.module.css'



function Stars(props) {
  const rate = (props.rate / 5) * 100;
  const s = rate.toFixed(2) + '%';
  return (
    <div className={styles.starsouter}>
        <div className={styles.starsinner} style={{width : s}}></div>
    </div>
  )
}

export default Stars