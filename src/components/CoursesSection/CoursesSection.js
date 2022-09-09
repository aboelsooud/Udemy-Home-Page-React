import React, { useContext } from 'react'
import Courses from '../Courses/Courses'
import styles from './CoursesSection.module.css'
import Loader from '../Loader/Loader';
import { DataContext, isFetchedContext} from '../../App'

function CoursesSection() {
  const isFetched = useContext(isFetchedContext);
  const topic = useContext(DataContext);

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
