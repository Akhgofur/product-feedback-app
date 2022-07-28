import { createContext, useEffect, useState } from "react"
import Feedback from "../components/main-components/feedbacks/feedback/feedback";
import CommentItem from "../modules/comments/comment/comment";
import Comments from "../modules/comments/comments";
import CommentsList from "../modules/comments/comments-list/comments-list";
import CommentsMain from "../modules/comments/main/main";
export const FeedbackContext = createContext();

export const FeedbacksProvider = ({children}) => {
const [categories, setCategories] = useState([])
 let [data, setData] = useState([])
 const URL = "http://localhost:3001/productRequests"
 const categoriesLink = 'http://localhost:3001/suggestionFilter'
    useEffect(() => {
        fetch(URL)
       .then(res => res.json())
       .then(info => setData(info))
   }, [])
   useEffect(() => {
       fetch(categoriesLink)
       .then(res => res.json())
       .then(category => setCategories(category))
   }, [])

   return <FeedbackContext.Provider value={{URL, data, setData, categories}}>
    {children}
   </FeedbackContext.Provider>
 }
 
