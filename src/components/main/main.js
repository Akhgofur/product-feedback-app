import FeedbacksList from "../main-components/feedbacks/feedbacks-list";
import MainHeader from "../main-components/header/header";
import './main.scss';
import { FeedbacksProvider } from "../../context/context";
import { useSelector, useDispatch } from "react-redux";
import { getFeedbacks } from "../main-components/feedbacks/feedbacks-slice";

function Main({filter}){
    const dispatch = useDispatch()
    const feedbackStatus = useSelector(state => state.feedbacks.status)
    if(feedbackStatus === "idle") {
            dispatch(getFeedbacks())
    }
    const data = useSelector(state => state.feedbacks.feedbacks)
    
    return (
        <FeedbacksProvider>
            <div className="main">
                <MainHeader />
                {
                    feedbackStatus === "loading" ? <div className="wrapper"><b className="loading">Loading...</b></div> : <FeedbacksList data={data} filter={filter}  />
                }
            </div>
        </FeedbacksProvider>
    )
}

export default Main