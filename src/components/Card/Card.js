import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Stars from '../Stars/Stars';
import styles from './Card.module.css'

function Card({course}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  let instructor = "";

  for(const inst in course.instructors)
    instructor += course.instructors[inst].name + ', ';
  
  instructor = instructor.slice(0, -2);
  
  return (
    <div className={styles.card}>
      <div className={styles.course} aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}>
        
        <img className={styles.thumb} src={course.image} alt="course thumbnail"/>
        <h6>{course.title}</h6>
        <p className={styles.instructor}>{instructor}</p>
        <span className={styles.rating}>{course.rating.toFixed(2)} </span>
        <Stars rate={course.rating}/>
        <div>${course.price}</div>
      </div>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div sx={{ p: 1 }} className={styles.popover}>
          <h5>{course.title}</h5>
          <p className={styles.update}>Updated September 2019</p>
          <p className={styles.details}>21 total hours . All Levels . Subtitles</p>
          <p>{course.headline}</p>
          <div className={styles.list}><span className={styles.check}><i class="fa-solid fa-check"></i></span><span>Create fully functional Python programs </span></div>
          <div className={styles.list}><span className={styles.check}><i class="fa-solid fa-check"></i></span><span>To learn the python language</span></div>
          <div className={styles.list}><span className={styles.check}><i class="fa-solid fa-check"></i></span><span>Become an experienced Python Programmer</span></div>
          <button className={styles.add}> Add to cart</button>
          <button className={styles.love}><i class="fa-regular fa-heart fa-2x"></i></button>
        </div>
      </Popover>
    </div>
  )
}

export default Card
