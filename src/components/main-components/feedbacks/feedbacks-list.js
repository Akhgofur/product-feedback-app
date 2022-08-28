import { useContext, useEffect, useState } from "react";
import { FeedbackContext } from "../../../context/context";
import Feedback from "./feedback/feedback";
import { useSelector, useDispatch } from "react-redux"
import { getFeedbacks } from "./feedbacks-slice";
import './feedbacks-list.scss'
import { nanoid } from "@reduxjs/toolkit";


function FeedbacksList({filter}){
    
    const dispatch = useDispatch()
    useEffect(() => {
         dispatch(getFeedbacks())
    }, [])
    const data = useSelector(state => state.feedbacks.feedbacks)
    const error = useSelector(state => state.feedbacks.error)
    const loading = useSelector(state => state.feedbacks.loading)
    return (
        
        <>
        {!loading && !error ? 
        (<ul className="feedbacks">
        {data !== [] ? 
        (data.map(item => {
            if(filter === "All"){
                return <Feedback key={nanoid()} id={item.id} isVoted={item.isUpvoted} comments={item.comments ? item.comments.length : 0} title={item.title} desc={item.description} btn={item.category} votes={item.upvotes}/>
            }
            if(item.category.toLowerCase() === filter.toLowerCase() ) {
                return <Feedback key={nanoid()} id={item.id} isVoted={item.isUpvoted} comments={item.comments ? item.comments.length : 0} title={item.title} desc={item.description} btn={item.category} votes={item.upvotes}/>
            }
        })
        ) : (<b>There is no Comments yet</b>) }
        </ul>): (error ? <b>Error</b> : <b>Loading...</b>)
        }
        </>
    )
}
export default FeedbacksList;