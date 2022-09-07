import React, { useEffect, useState } from 'react'
import Courses from '../Courses/Courses'
import styles from './CoursesSection.module.css'
import axios from 'axios'
import Loader from '../Loader/Loader';

function CoursesSection() {
  const [topic, setTopic] = useState({});
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    axios.get('https://api.jsonbin.io/v3/b/63190b40e13e6063dc9f344e')
      .then(res => {
        setTopic(res.data.record);
        setIsFetched(true);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <section className={styles.courses}>
        <h2 className={styles.heading}>A broad selection of courses</h2>
        <p className={styles.paragraph}>Choose from 185,000 online video courses with new additions published every month</p>
        {
          isFetched ? <Courses header={topic.header} description={topic.description} courses={topic.courses}/> : <Loader/>
        } 
    </section>
  )
}

export default CoursesSection
