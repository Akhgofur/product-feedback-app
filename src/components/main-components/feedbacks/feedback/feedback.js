import './feedback.scss'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux' 
import { upVote, upVotePost } from '../feedbacks-slice'

function Feedback({votes, title, isVoted, desc, btn, comments, id}) {
    const dispatch = useDispatch()
    function handleClickVote(){
    let upvote = (isVoted ? votes - 1 : votes + 1)
    const voted = !isVoted
    const current = {id, voted, upvote}
    dispatch(upVote(current))
    dispatch(upVotePost(current))
    }
    
    if(isVoted) {
        return(
            <li className='feedback' id={id}>
            <button data-id className='feedback__vote-btn' onClick={handleClickVote}>
                <p className='feedback__vote-num'>{votes}</p>
            </button>
            <div className='feedback__content-wrapper'>
                <div className='feedback__content'>
                    <h3 className='feedback__title'>
                        {title}
                    </h3>
                    <p className='feedback__desc'>
                        {desc}
                    </p>
                    <button className='feedback__button'>{btn}</button>
                </div>
                <Link to={`/single/${id}`} className='feedback__comment-btn'>
                    <img alt='' className='feedback__comment-img'/>
                    <p className='feedback__comment-count'>{comments}</p>
                </Link>
            </div>
        </li>
        )
    }else {
        return(
            <li className='feedback' id={id}>
            <button className='feedback__vote-btn' onClick={handleClickVote}>
                <p className='feedback__vote-num'>{votes}</p>
            </button>
            <div className='feedback__content-wrapper'>
                <div className='feedback__content'>
                    <h3 className='feedback__title'>
                        {title}
                    </h3>
                    <p className='feedback__desc'>
                        {desc}
                    </p>
                    <button className='feedback__button'>{btn}</button>
                </div>
                <Link to={`/single/${id}`} className='feedback__comment-btn'>
                    <img alt='' className='feedback__comment-img'/>
                    <p className='feedback__comment-count'>{comments}</p>
                </Link>
            </div>
        </li>
        )
    }
}

export default Feedback