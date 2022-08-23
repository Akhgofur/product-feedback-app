
import CommentsList from "../comments-list/comments-list"
import Nav from "../nav/nav"
import './main.scss'
import {useParams} from 'react-router-dom'
import Feedback from "../../../components/main-components/feedbacks/feedback/feedback"
import { useContext } from "react"
import { FeedbackContext } from "../../../context/context"
import AddCommentModal from "../add-comment/add-comment.component"
import { nanoid } from "@reduxjs/toolkit"
import { useEffect } from "react"
import { getFeedbacks } from "../../../components/main-components/feedbacks/feedbacks-slice"
import { useDispatch } from "react-redux"

function CommentsMain() {

    const {data} = useContext(FeedbackContext)
    const param = useParams()
    
    let current = data.filter(person => { 
        return `${person.id}` === `${param.id}`
    })
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getFeedbacks())
    },[])
    return (
        <div className="comments">
                {current ?( current.map(current => {
                    return(
                        <>
                        <Nav id={current.id} />
                        <Feedback key={nanoid()} id={current.id} isVoted={current.isUpvoted} comments={current.comments ? current.comments.length : 0} title={current.title} desc={current.description} btn={current.category} votes={current.upvotes}/>
                        </>
                    )
                }
                )) : <b>Loading...</b>}
                <CommentsList current={current} />
                <AddCommentModal current={current}/>
        </div>
    )
}

export default CommentsMain