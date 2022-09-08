import React from 'react'
import Stars from '../Stars/Stars';
import styles from './Card.module.css'

function Card({course, searchValue}) {
  let instructor = "";
  let title = course.title;
  title = title.toLowerCase()
  
  if(!title.includes(searchValue)) return (null);

  for(const inst in course.instructors)
    instructor += course.instructors[inst].name + ', ';
  
    instructor = instructor.slice(0, -2);
  
  return (
    <div className={styles.card}>
      <div className={styles.course}>
        <img className={styles.thumb} src={course.image} alt="course thumbnail"/>
        <h6>{course.title}</h6>
        <p className={styles.instructor}>{instructor}</p>
        <span className={styles.rating}>{course.rating.toFixed(2)} </span>
        <Stars rate={course.rating}/>
        <div>${course.price}</div>
      </div>
    </div>
  )
}

export default Card
