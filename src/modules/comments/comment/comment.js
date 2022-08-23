import { Reply } from '../reply/reply.component'
import { nanoid } from '@reduxjs/toolkit'
import './comment.scss'
import { RepliesList } from '../replies/replies.style'
function CommentItem({imgSrc, email, name, desc, replies}) {
    return(
        <li className="comments__item">
            <div className="comment">
                <img src={imgSrc} alt="" className="comment__img" />
                <div className="comment__content">
                    <div className="comment__content-top">
                        <div className="comment__author">
                            <p className="comment__name">{name} </p>
                            <a href={email} className="comment__email">{email} </a>
                        </div>
                        <button className="comment__reply-btn">Reply</button>
                    </div>
                    <p className="comment__desc">{desc}</p>
                </div>
            </div>
            {
               replies !== null ? (<RepliesList>
                {replies.map(item => {
                    return <Reply key={nanoid()} content={item.content} replyingTo={item.replyingTo} img={item.user.image} name={item.user.name} username={item.user.username}  /> 
                })}
            </RepliesList>) : ''
            }
        </li>
    )
}
export default CommentItem