import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { useState } from 'react';

function App() {

  let PageSize = 5
  let [progress, setProgress] = useState(0);
    
  return (
    <>
      <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress} 
        height={3}
      />
          <Routes>
            <Route exact  path="/" element={<News setProgress= {setProgress}   key='general' pageSize = {PageSize} country = 'in' category = 'general'/>}></Route>
            <Route exact path="/business" element={<News setProgress= {setProgress}    key='business' pageSize = {PageSize} country = 'in' category = 'business'/>}></Route>
            <Route exact  path="/entertainment" element={<News setProgress= {setProgress}   key='entertainment' pageSize = {PageSize} country = 'in' category = 'entertainment'/>}></Route>
            <Route exact  path="/health" element={<News setProgress= {setProgress}   key='health' pageSize = {PageSize} country = 'in' category = 'health'/>}></Route>
            <Route exact  path="/science" element={<News setProgress= {setProgress}   key='science' pageSize = {PageSize} country = 'in' category = 'science'/>}></Route>
            <Route exact  path="/sports" element={<News setProgress= {setProgress}   key='sports' pageSize = {PageSize} country = 'in' category = 'sports'/>}></Route>
            <Route exact  path="/technology" element={<News setProgress= {setProgress}   key='technology' pageSize = {PageSize} country = 'in' category = 'technology'/>}></Route>
          </Routes>
      </Router>
    </>
  );
}

export default App;
