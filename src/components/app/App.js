import Main from '../main/main';
import Sidebar from '../side-bar/sidebar';
import './app.scss';
import { useState } from 'react';
function App() {
    const [filter, setFilter] = useState("All")
    const [open, setOpen] = useState(false)

  return(

    <div className='main-wrapper container'>
      <Sidebar open={open} setOpen={setOpen} setFilter={setFilter} />
      <Main open={open} filter={filter} />
    </div>
  )
}

export default App;
