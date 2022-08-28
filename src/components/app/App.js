import Main from '../main/main';
import Sidebar from '../side-bar/sidebar';
import './app.scss';
import {Routes, Route, Link} from 'react-router-dom'
import { useContext } from 'react';
import { useState } from 'react';
function App() {
    const [filter, setFilter] = useState("All")
  return(

    <div className='main-wrapper container'>
      <Sidebar setFilter={setFilter} />
      <Main filter={filter} />
    </div>
  )
}

export default App;