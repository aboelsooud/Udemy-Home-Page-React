import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom';
import styles from './Navbar.module.css'

function Navbar({setSearchWord}) {
  const [searchValue, setSearchvalue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');
  
  useEffect( () => {
    const search = searchParams.get('filter');
    if(search != null && search !== searchValue){
      setSearchvalue(search.toLocaleLowerCase());
      setSearchWord(search.toLowerCase());
    }
    if(search === '') setSearchParams({});
  },[])

  const searchSubmit = (e) => {
    e.preventDefault();
    if(searchValue === ''){
      setSearchParams({});
    }else{
      setSearchParams({filter : searchValue});
      const dom = document.querySelectorAll('section');
      dom[1].scrollIntoView({behavior:"smooth", block:'start', inline:'nearest'});
    }
    setSearchWord(searchValue.toLowerCase());
  }

  return (
    <nav className={styles.navbar}>
        <span className={`${styles.navItems} ${styles.displayBar}`}><i className="fas fa-bars fa-2x"></i></span>
        <Link to ='/Udemy-Home-Page-React' onClick={() => {setSearchWord(''); setSearchvalue('');}}><img className={`${styles.logo} ${styles.navItems}`} src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="udemy logo"/></Link>
        <a href="#" className={`${styles.navItems} ${styles.displaySmall} ${styles.link}`}>Categories</a>
        <form action="" className={`${styles.navItems} ${styles.displaySmall} ${styles.searchBar}`} onSubmit={searchSubmit}>
            <button type="submit" className={styles.submit}><i className="fas fa-solid fa-magnifying-glass fa-1x "></i></button>
            <input type="text" name="Search" placeholder="Search for anything" 
              className={styles.searchField} value={searchValue} onChange={ e => setSearchvalue(e.target.value)}/>
        </form>
        <a href="#" className={`${styles.navItems} ${styles.displaySmall} ${styles.link} ${styles.displayUdemyBusiness}`}>Udemy Business</a>
        <a href="#" className={`${styles.navItems} ${styles.displaySmall} ${styles.link} ${styles.displayTeach}`}>Teach on Udemy</a>
        <button className={`${styles.navItems} ${styles.displaySmall} ${styles.cart}`}><i className="fas fa-solid fa-cart-shopping fa-2x"></i></button>
        <button className={`${styles.navItems} ${styles.displaySmall} ${styles.log}`}>Log in</button>
        <button className={`${styles.navItems} ${styles.displaySmall} ${styles.sign}`}>Sign up</button>
        <button className={`${styles.navItems} ${styles.displaySmall} ${styles.lang}`}><i className="fas fa-solid fa-globe fa-2x"></i></button>
    </nav>
  )
}

export default Navbar
