import { useContext } from "react";
import { FeedbackContext, FeedbacksProvider } from "../../../context/context";
import Feedback from "../../main-components/feedbacks/feedback/feedback";
import CategoriesItem from "./categories-item";
import './categories.scss'
function Categories() {

    const {categories} = useContext(FeedbackContext)
    return (
        <ul className="categories">
             {categories.map(category => <CategoriesItem key={category.id} content={category.name}/>)}
        </ul>
    )
}
export default Categories