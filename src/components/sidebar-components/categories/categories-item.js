import './categories-item.scss'
function CategoriesItem({content}) {
    return(
        <li className="categories__item">
            <label className="categories__item-label">
                <input className="categories__item-radio" type={"radio"} name="category" value={content}/>
                <span className="categories__item-name">{content}</span>
            </label>
        </li>
    )
}

export default CategoriesItem