
import CommentsList from "../comments-list/comments-list"
import Nav from "../nav/nav"
import './main.scss'
import {useParams} from 'react-router-dom'
import Feedback from "../../../components/main-components/feedbacks/feedback/feedback"
import { useContext } from "react"
import { FeedbackContext, FeedbacksProvider } from "../../../context/context"
import AddCommentModal from "../add-comment/add-comment.component"
function CommentsMain() {

    const {data} = useContext(FeedbackContext)
    const param = useParams()
    
    let current = data.filter(person => { 
        return person.id == param.id
    })
    return (
        <div className="container comments">
            <FeedbacksProvider>
                
                {current.map(current => {
                    return(
                        <>
                        <Nav id={current.id} />
                        <Feedback key={current.id} id={current.id} comments={current.comments ? current.comments.length : 0} title={current.title} desc={current.description} btn={current.category} votes={current.upvotes}/>
                        </>
                    )
                }
                )}
                <CommentsList current={current} />
                <AddCommentModal current={current}/>
            </FeedbacksProvider>
        </div>
    )
}

export default CommentsMain