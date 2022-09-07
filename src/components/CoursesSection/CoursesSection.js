import React from 'react'
import Cards from '../Cards/Cards.js'
import styles from './coursesSection.module.css'

function CoursesSection(props) {
  const { header, description, courses } = props;
  return (
     <section className={styles.explain}>
         <h3 className={styles.header}>{header}</h3>
         <p className={styles.description}>{description}</p>
         <button className={styles.button}>Explore Python</button>
         <Cards courses={courses}/>
     </section>
  )
}

export default CoursesSection
