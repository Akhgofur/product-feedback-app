import CommentItem from '../comment/comment'
import './comments-list.scss'
function CommentsList({current, addCommentRef, setRepliedUser}) {
    let comment = current[0] || null
    const handleReplyBtn = (e) => {
        const event = e.target;
        const id = event.closest("[data-id]").dataset.id;
        if (event.dataset.user) {
          setRepliedUser({ username: event.dataset.user, id });
        }
    }


    if(comment !== null){
        if(comment.comments !== [] && comment.comments !== undefined){
            return(
                <div className="comments__wrapper">
                    <p className="comments__count">{comment.comments ? comment.comments.length : 0} Comments</p>
                    <ul className="comments__list" onClick={handleReplyBtn}>
                        {comment.comments.map(item => <CommentItem addCommentRef={addCommentRef} key={item.id} id={item.id} replies={item.replies ? item.replies : null} name={item.user.name} imgSrc={item.user.image} desc={item.content} email={item.user.username} />)}
                    </ul>
                </div>
            )
        }else{

            return(
                <div className="comments__wrapper">
                    <b className="comments__count">there is no comments yet</b>
                </div>
            )
        }
    }else{
        return(
            <b>Loading...</b>
        )
    }
    
}
export default CommentsList