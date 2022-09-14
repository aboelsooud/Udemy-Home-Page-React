import React, { useContext, useEffect, useState } from 'react'
import { createSearchParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Navbar.module.css'
import { setSearchValueContext } from '../../App'

function Navbar() {
  const setSearch = useContext(setSearchValueContext);
  const [searchValue, setSearchvalue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams('');
  const navigate = useNavigate();
  
  useEffect( () => {
    const search = searchParams.get('filter');
    if(search != null && search !== searchValue){
      navigate({
        pathname: "Udemy-Home-Page-React",
        search: `${createSearchParams({filter: searchValue})}`
      })
      setSearchParams({filter : search});
      setSearchvalue(search.toLocaleLowerCase());
      setSearch(search.toLowerCase());
      // const dom = document.querySelectorAll('section');
      // dom[1].scrollIntoView({behavior:"smooth", block:'start', inline:'nearest'});
    }
    if(search === ''){
      setSearchParams({});
      navigate('Udemy-Home-Page-React');
    } 
  },[])

  const searchSubmit = (e) => {
    e.preventDefault();
    if(searchValue === ''){
      setSearchParams({});
      navigate('Udemy-Home-Page-React');
    }else{
      navigate({
        pathname: "Udemy-Home-Page-React",
        search: `${createSearchParams({filter: searchValue})}`
      })
      // const dom = document.querySelectorAll('section');
      // dom[1].scrollIntoView({behavior:"smooth", block:'start', inline:'nearest'});
    }
    setSearch(searchValue.toLowerCase());
  }

  return (
    <nav className={styles.navbar}>
        <span className={`${styles.navItems} ${styles.displayBar}`}><i className="fas fa-bars fa-2x"></i></span>
        <Link to ='/Udemy-Home-Page-React' onClick={() => {setSearch(''); setSearchvalue('');}}><img className={`${styles.logo} ${styles.navItems}`} src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="udemy logo"/></Link>
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
