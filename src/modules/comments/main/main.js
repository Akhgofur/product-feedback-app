
import CommentsList from "../comments-list/comments-list"
import Nav from "../nav/nav"
import './main.scss'
import {useParams} from 'react-router-dom'
import Feedback from "../../../components/main-components/feedbacks/feedback/feedback"
import AddCommentModal from "../add-comment/add-comment.component"
import { nanoid } from "@reduxjs/toolkit"
import { getFeedbacks } from "../../../components/main-components/feedbacks/feedbacks-slice"
import { useDispatch, useSelector } from "react-redux"
import { useRef } from "react"
import { useState } from "react"

function CommentsMain() {
    const param = useParams()
    const data = useSelector(state => state.feedbacks.feedbacks)
    const feedbacksStatus = useSelector(state => state.feedbacks.status)
    let current = data.filter(person => { 
        return `${person.id}` === `${param.id}`
    })
    const [repliedUser, setRepliedUser] = useState({})
    const dispatch = useDispatch()

    if(feedbacksStatus === "idle") {
        dispatch(getFeedbacks())
    }
    const addCommentRef = useRef('')
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
                <CommentsList setRepliedUser={setRepliedUser} current={current} addCommentRef={addCommentRef} />
                <AddCommentModal  id={param.id} repliedUser={repliedUser} setRepliedUser={setRepliedUser} addCommentRef={addCommentRef} current={current}/>
        </div>
    )
}

export default CommentsMain