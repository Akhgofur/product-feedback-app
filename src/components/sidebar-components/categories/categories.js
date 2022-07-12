import CategoriesItem from "./categories-item";
import './categories.scss'
function Categories() {
    return (
        <ul className="categories">
                <CategoriesItem content={"All"}/>
                <CategoriesItem content={"UI"}/>
                <CategoriesItem content={"UX"}/>
                <CategoriesItem content={"Enhancement"}/>
                <CategoriesItem content={"Bug"}/>
                <CategoriesItem content={"Feature"}/>
        </ul>
    )
}
export default Categories