import './feedback.scss'
import {Link, useParams} from 'react-router-dom'
import { useState } from 'react'

function Feedback({votes, title, desc, btn, comments, id, URL}) {
    const [voted,setVoted] = useState(false)

    function handleClickVote(){
        upVote()
    }
    async function upVote(){
        const res = await fetch(`${URL}/${id}`,{
            method: 'PATCH',
              headers: {
                    'Content-type' : 'application/json'
                  },
                  body: JSON.stringify(
                        {
                            isUpvoted: setVoted(!voted),
                            upvotes: +votes + 1
                        }
                      )
        })
    }
    return (
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
                    <img className='feedback__comment-img'/>
                    <p className='feedback__comment-count'>{comments}</p>
                </Link>
            </div>
        </li>
    )
}

export default Feedback