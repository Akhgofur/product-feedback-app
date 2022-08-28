
import Feedback from "./feedback/feedback";
import './feedbacks-list.scss'
import { nanoid } from "@reduxjs/toolkit";


function FeedbacksList({filter, data}){
    return (
        
        <>
         {/* eslint-disable-next-line  */}
        {data.length > 0 ? (data.map(item => {
            if(filter === "All"){
                return <Feedback key={nanoid()} id={item.id} isVoted={item.isUpvoted} comments={item.comments ? item.comments.length : 0} title={item.title} desc={item.description} btn={item.category} votes={item.upvotes}/>
            }
            if(item.category.toLowerCase() === filter.toLowerCase() ) {
                return <Feedback key={nanoid()} id={item.id} isVoted={item.isUpvoted} comments={item.comments ? item.comments.length : 0} title={item.title} desc={item.description} btn={item.category} votes={item.upvotes}/>
            }
        })
        ) : <h2>empty</h2>}
        </>
    )
}
export default FeedbacksList;