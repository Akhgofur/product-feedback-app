import { useContext, useEffect, useState } from "react";
import { FeedbackContext } from "../../../context/context";
import Feedback from "./feedback/feedback";
import { useSelector, useDispatch } from "react-redux"
import { getFeedbacks } from "./feedbacks-slice";
import './feedbacks-list.scss'
import { nanoid } from "@reduxjs/toolkit";





function FeedbacksList({selected}){
    
    const dispatch = useDispatch()
    useEffect(() => {
         dispatch(getFeedbacks())
    }, [])
    
    const data = useSelector(state => state.feedbacks.feedbacks)
    const error = useSelector(state => state.feedbacks.error)
    const loading = useSelector(state => state.feedbacks.loading)
    const [active, setActive] = useState(false)


    // let filteredData = data && data.sort((a, b) => {
    //     switch (selected) {
    //         case "1":
    //             return +b.upvotes - +a.upvotes
    //             break   
    //         // case "2":
    //         //     return  +a.upvotes - +b.upvotes
    //         //     break
    //         // case "3":
    //         //     return  b.comments.length || 0 - a.comments.length || 0
    //         //     break
    //         // case "4":
    //         //     return  a.comments.length || 0 - b.comments.length || 0
    //         //     break
    //         // default:
    //         //     return +a.upvotes - +b.upvotes
    //         //     break
    //     }
    // })
    // // console.log(filteredData);

    return (
        
        <>
        {!loading && !error ? 
        (<ul className="feedbacks">
        {data.map(item => <Feedback key={nanoid()} id={item.id} isVoted={item.isUpvoted} comments={item.comments ? item.comments.length : 0} title={item.title} desc={item.description} btn={item.category} votes={item.upvotes}/>)}
        </ul>): (error ? <b>Error</b> : <b>Loading...</b>)
        }
        </>
    )
}
export default FeedbacksList;