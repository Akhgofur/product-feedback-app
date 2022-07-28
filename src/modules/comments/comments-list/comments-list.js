import AddCommentModal from '../add-comment/add-comment.component'
import CommentItem from '../comment/comment'
import './comments-list.scss'
function CommentsList({current}) {
    let comment = current[0] || null

    if(comment !== null){
        if(comment.comments !== [] && comment.comments !== undefined){
            return(
                <div className="comments__wrapper">
                    <p className="comments__count">{comment.comments ? comment.comments.length : 0} Comments</p>
                    <ul className="comments__list">
                        {comment.comments.map(item => <CommentItem key={item.id} name={item.user.name} imgSrc={item.user.image} desc={item.content} email={`@${item.user.username}`} />)}
                    </ul>
                </div>
            )
        }else{

            return(
                <div className="comments__wrapper">
                    <p className="comments__count">there is no comments yet</p>
                    
                </div>
            )
        }
    }else{
        return(
            <p>Loading...</p>
        )
    }
    
}
export default CommentsList