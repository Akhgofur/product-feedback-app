import './categories-item.scss'
function CategoriesItem({content}) {
    return(
        <li className="categories__item">
            <label className="categories__item-label" data-id={content}>
                <input className="categories__item-radio" defaultChecked={content === "All" ? true : false} type={"radio"} name="category" value={content}/>
                <span className="categories__item-name">{content}</span>
            </label>
        </li>
    )
}

export default CategoriesItem