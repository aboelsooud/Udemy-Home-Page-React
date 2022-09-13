import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { createContext, useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import SingleCoursePage from './pages/SingleCoursePage/SingleCoursePage';

export const DataContext = createContext();
export const isFetchedContext = createContext();
export const searchValueContext = createContext();
export const setSearchValueContext = createContext();

function App() {
  const [coursesData, setCoursesData] = useState({});
  const [isFetched, setIsFetched] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios.get('https://api.jsonbin.io/v3/b/63190b40e13e6063dc9f344e')
      .then(res => {
        setCoursesData(res.data.record);
        setIsFetched(true);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="App">
      <DataContext.Provider value={coursesData}>
        <isFetchedContext.Provider value={isFetched}>
          <searchValueContext.Provider value={searchValue}>
            <setSearchValueContext.Provider value={setSearchValue}>
              <Navbar/>
              <Routes>
                <Route path='/Udemy-Home-Page-React' element={<Home/>}></Route>
                <Route path='/Udemy-Home-Page-React/course-info/:id' element={<SingleCoursePage/>}/>
              </Routes>
            </setSearchValueContext.Provider>
          </searchValueContext.Provider>
        </isFetchedContext.Provider>
      </DataContext.Provider>
    </div>
  );
}

export default App;
