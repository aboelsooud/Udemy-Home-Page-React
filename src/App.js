import './App.css';
import CoursesSection from './components/CoursesSection/CoursesSection';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <CoursesSection/>
    </div>
  );
}

export default App;
