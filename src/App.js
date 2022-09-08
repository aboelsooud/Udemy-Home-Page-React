import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';


function App() {

  return (
    <div className="App">
        <Routes>
          <Route path='/Udemy-Home-Page-React' element={<Home/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
