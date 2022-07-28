import './nav.scss'
import {Link} from 'react-router-dom'
function Nav({id}) {
    return(
        <div className="nav">
            <Link to={'/'} className="nav__back-btn">
                Go Back
            </Link>
            <Link to={`/edit-feedback/${id}`} className="nav__edit-feedback-btn">
            Edit Feedback
            </Link>
        </div>
    )
}
export default Nav