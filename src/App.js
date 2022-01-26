import Home from './components/Home';
import WatchTrailer from './components/WatchTrailer';
import {Routes,Route,Link} from 'react-router-dom';
import {useState} from 'react';
import { ReactComponent as ReactLogo } from "./home-solid.svg";

const App =()=>{
  const[filmSelection,setFilmSelection]=useState({})
return(
  <>
  <Link to='/'><ReactLogo style={{width:"50px"}}/></Link>
  <Routes>
    <Route exact path="/" element={<Home setFilmSelection={setFilmSelection} />}/>
    <Route path="/watchtrailer" element={<WatchTrailer title={filmSelection.title} description={filmSelection.description} trailer={filmSelection.trailer}/>}/>
  </Routes>
  </>
);
}
export default App
