import { useContext } from "react";
import { FeedbackContext } from "../../../context/context";
import CategoriesItem from "./categories-item";
import './categories.scss'
function Categories({setFilter}) {
    const {categories} = useContext(FeedbackContext)
    const handleListClick = (e) => {
        if(e.target.matches(".categories__item-label")) {
            let category = `${e.target.dataset.id}`
            setFilter(category)
        }
    }
    return (
        <ul className="categories" onClick={handleListClick}>
            <CategoriesItem content={"All"} />
             {categories.map(category => <CategoriesItem key={category.id} content={category.name}/>)}
        </ul>
    )
}
export default Categories