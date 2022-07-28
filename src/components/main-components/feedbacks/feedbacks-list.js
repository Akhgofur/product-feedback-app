import { useContext } from "react";
import { FeedbackContext } from "../../../context/context";
import Feedback from "./feedback/feedback";
import './feedbacks-list.scss';


function FeedbacksList({selected}){
    
    const {data, URL} = useContext(FeedbackContext)
    let filteredData = data && data.sort((a, b) => {
        switch (selected) {
            case "1":
                return +b.upvotes - +a.upvotes
                break   
            case "2":
                return  +a.upvotes - +b.upvotes
                break
            case "3":
                return  b.comments.length || 0 - a.comments.length || 0
                break
            case "4":
                return  a.comments.length || 0 - b.comments.length || 0
                break
            default:
                return +a.upvotes - +b.upvotes
                break
        }
    })

   if(!filteredData){
    return <b>Loading...</b>
   }else{
    return (
        <ul className="feedbacks">
            {filteredData.map(item => <Feedback URL={URL} key={item.id} id={item.id} comments={item.comments ? item.comments.length : 0} title={item.title} desc={item.description} btn={item.category} votes={item.upvotes}/>)}
        </ul>
    )
   }
}
export default FeedbacksList;