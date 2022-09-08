import { useState } from 'react';
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header';
import CoursesSection from '../../components/CoursesSection/CoursesSection';
import Footer from '../../components/Footer/Footer';

function Home() {
    const [searchWord, setSearchWord] = useState('');

    return (
        <>
            <Navbar setSearchWord={setSearchWord}/>
            <Header/>
            <CoursesSection searchValue={searchWord}/>
            <Footer/>
        </>
    )
}

export default Home