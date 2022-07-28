import './comment.scss'
function CommentItem({imgSrc, email, name, desc}) {
    return(
        <li className="comments__item comment">
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
        </li>
    )
}
export default CommentItem