import './feedback.scss'
function Feedback({votes, title, desc, btn, comments}) {
    return (
        <li className='feedback'>
            <button className='feedback__vote-btn'>
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
                <button className='feedback__comment-btn'>
                    <img className='feedback__comment-img'/>
                    <p className='feedback__comment-count'>{comments}</p>
                </button>
            </div>
        </li>
    )
}

export default Feedback