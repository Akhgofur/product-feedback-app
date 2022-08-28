import './header.scss'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { sortFeedback } from '../feedbacks/feedbacks-slice'
import { CustomSelect } from './custom-select/custom-select.component'
import { useSelector } from 'react-redux/es/exports'


function MainHeader(){
    const sorts = [
        {
            id:1,
            name:'Most Upvotes',
        },
        {
            id: 2,
            name:'Least Upvotes',
        },
        {
            id: 3,
            name:'Most Comments',
        },
        {
            id: 4,
            name:'Least Comments',
        }
    ]
    const [selected, setSelected] = useState("1")
    const dispatch = useDispatch()
    dispatch(sortFeedback(selected))
    const data = useSelector(state => state.feedbacks.feedbacks)

    return(
        <header className="main-header">
            <img className="main-header__img" alt='logo' src="../src/assets/img/bulb.svg" width={24} height={24}/>
            <p className='main-header__heading'>{data.length} Suggestions</p>
            <p className='main-header__select-title'>Sort by : </p>
            <CustomSelect items={sorts} setSelected={setSelected} />
            <Link to={'/create'} className='main-header__btn'>+ Add Feedback</Link>
        </header>
    )
}
export default MainHeader