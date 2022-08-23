import { createContext, useEffect, useState } from "react"
export const FeedbackContext = createContext();
export const URL = "https://rgergerretwe.herokuapp.com/productRequests"
export const categoriesLink = 'https://rgergerretwe.herokuapp.com/suggestionFilter'

export const FeedbacksProvider = ({children}) => {
const [categories, setCategories] = useState([])
 let [data, setData] = useState([])
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
 
