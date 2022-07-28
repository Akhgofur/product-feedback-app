import { Link } from 'react-router-dom'
import './main.scss'

function MainEmpty(){
    return <div className="empty">
        <div className="empty-inner">
            <img src="../assets/img/empty.svg" alt="" className="empty-img" />
            <h2 className="empty-list-heading">There is no feedback yet.</h2>
            <p className="empty-list-desc">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
            <Link className="empty-list-btn"></Link>
        </div>
    </div>
}

export default MainEmpty