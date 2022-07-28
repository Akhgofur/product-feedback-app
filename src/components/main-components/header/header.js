import './header.scss'
import {Link} from 'react-router-dom'
import { useRef } from 'react'


function MainHeader({setSelected}){
    let selectRef = useRef("1")
    return(
        <header className="main-header">
            <img className="main-header__img" src="../src/assets/img/bulb.svg" width={24} height={24}/>
            <p className='main-header__heading'>6 Suggestions</p>
            <p className='main-header__select-title'>Sort by : </p>
            <select ref={selectRef} onChange={()=> setSelected(selectRef.current.value)} className='main-header__select'>
                <option value={"1"} className='main-header__select-option'>Most Upvotes</option>
                <option value={"2"} className='main-header__select-option'>Least Upvotes</option>
                <option value={"3"} className='main-header__select-option'>Most Comments</option>
                <option value={"4"} className='main-header__select-option'>Least Comments</option>
            </select>
            <Link to={'/create'} className='main-header__btn'>+ Add Feedback</Link>
        </header>
    )
}
export default MainHeader