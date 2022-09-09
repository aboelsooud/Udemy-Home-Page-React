import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Header from '../../components/Header/Header';
import CoursesSection from '../../components/CoursesSection/CoursesSection';
import Footer from '../../components/Footer/Footer';

function Home() {
    return (
        <>
            <Navbar/>
            <Header/>
            <CoursesSection/>
            <Footer/>
        </>
    )
}

export default Home