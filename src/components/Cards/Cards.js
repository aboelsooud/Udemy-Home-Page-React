import React from 'react'
import Card from '../Card/Card';
import styles from './cards.module.css'

function Cards({courses, searchValue}) {
  const cards = courses.map(course => <Card key={course.id} course={course} searchValue={searchValue} />);
  return (
    <section className={styles.cards}>
      {cards}
    </section>
  )
}

export default Cards
