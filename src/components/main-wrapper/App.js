import Main from '../main/main';
import Sidebar from '../side-bar/sidebar';
import './app.scss';
import {Routes, Route, Link} from 'react-router-dom'
function App() {
  return(
    <div className='main-wrapper container'>
      <Routes>
        {/* <Route path='/sidebar' element= */}
        <Route path='/sidebar' element={<Sidebar />}/>
        <Route path='*' element={<Main/>}/>

      
      
      </Routes>
      
    </div>
  )
}

export default App;
