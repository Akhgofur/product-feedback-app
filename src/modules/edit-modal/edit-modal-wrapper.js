import { Link } from "react-router-dom"
import { EditFeedbackModal } from "./edit-modal/edit-modal.component"
import './edit-modal-wrapper.scss'
import { FeedbacksProvider } from "../../context/context"

export const EditModalWrapper = () => {
    return(
        <div className="container modal__wrapper">
            <FeedbacksProvider>
            <Link to={'/'} className="go-back-link">Go Back</Link>
            <EditFeedbackModal/>
            </FeedbacksProvider>
        </div>
    )
}