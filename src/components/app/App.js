import Main from '../main/main';
import Sidebar from '../side-bar/sidebar';
import './app.scss';
import {Routes, Route, Link} from 'react-router-dom'
import { useContext } from 'react';
function App() {

  return(

    <div className='main-wrapper container'>
      <Sidebar />
      <Main />
    </div>
  )
}

export default App;
