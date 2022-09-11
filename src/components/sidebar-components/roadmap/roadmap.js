import './roadmap.scss'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'
import { sortFeedbackStatus } from '../../../utils/sort-feedback-status'
function Roadmap() {
    const statusFeedbacks = useSelector(state => state.feedbacks.feedbacks.filter(item => item.status.toLowerCase() !== 'suggestion'))
    const { planned, progress, live } = sortFeedbackStatus(statusFeedbacks)
    return (
        <div className='roadmap'>
            <div className='roadmap__top'>
                <p className='roadmap__heading'>
                Roadmap
                </p>
                <Link className='roadmap__link' to={"/roadmap"}>View</Link>
            </div>
            <ol className='roadmap__list'>
                <li className='roadmap__item'>
                    <p className='roadmap__item-heading'>
                    Planned
                    </p>
                    <p className='roadmap__item-number'>{planned.length}</p>
                </li>
                <li className='roadmap__item'>
                    <p className='roadmap__item-heading'>
                    In-Progress
                    </p>
                    <p className='roadmap__item-number'>{progress.length}</p>
                </li>
                <li className='roadmap__item'>
                    <p className='roadmap__item-heading'>
                    Live
                    </p>
                    <p className='roadmap__item-number'>{live.length}</p>
                </li>
            </ol>
        </div>
    )
}
export default Roadmap