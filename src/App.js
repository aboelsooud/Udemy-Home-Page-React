import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import { createContext, useState, useEffect} from 'react';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar';
import SingleCoursePage from './pages/SingleCoursePage/SingleCoursePage';
import Loader from './components/Loader/Loader';
import NoMatch from './components/NoMatch/NoMatch';
import Footer from './components/Footer/Footer';

export const DataContext = createContext();
export const singlePageContext = createContext();
export const isFetchedContext = createContext();
export const searchValueContext = createContext();
export const setSearchValueContext = createContext();

function App() {
  const [coursesData, setCoursesData] = useState({});
  const [isFetched, setIsFetched] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [singlePageData, setSinglePageData] = useState({});
  const [isFetchedSingle, setIsFetchedSingle] = useState(false);

  useEffect(() => {
    axios.get('https://api.jsonbin.io/v3/b/63190b40e13e6063dc9f344e')
      .then(res => {
        setCoursesData(res.data.record);
        setIsFetched(true);
      })
      .catch(err => {
        console.log(err);
      })

      axios.get('https://api.npoint.io/427e24cf2470da9aecca')
        .then(res => {
          setSinglePageData(res.data);
          setIsFetchedSingle(true);
        })
        .catch(err => {
          console.log(err);
        })
  }, [])

  return (
    <div className="App">
      <DataContext.Provider value={coursesData}>
        <singlePageContext.Provider value={singlePageData}>
          <isFetchedContext.Provider value={isFetched}>
            <searchValueContext.Provider value={searchValue}>
              <setSearchValueContext.Provider value={setSearchValue}>
                <Navbar/>
                <Routes>
                  <Route path='/Udemy-Home-Page-React' exact element={<Home/>}></Route>
                  <Route path='/Udemy-Home-Page-React/course-info/:id' exact element={isFetched && isFetchedSingle ? <SingleCoursePage/> : <Loader/>}/>
                  <Route path='/Udemy-Home-Page-React/*' exact element={<NoMatch/>}/>
                </Routes>
                <Footer/>
              </setSearchValueContext.Provider>
            </searchValueContext.Provider>
          </isFetchedContext.Provider>
        </singlePageContext.Provider>
      </DataContext.Provider>
    </div>
  );
}

export default App;
