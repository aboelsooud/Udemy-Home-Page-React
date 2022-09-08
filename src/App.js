import { useState } from 'react';
import './App.css';
import CoursesSection from './components/CoursesSection/CoursesSection';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [searchWord, setSearchWord] = useState('');

  return (
    <div className="App">
        <Navbar setSearchWord={setSearchWord}/>
        <Header/>
        <CoursesSection searchValue={searchWord}/>
        <Footer/>
    </div>
  );
}

export default App;
