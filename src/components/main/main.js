import FeedbacksList from "../main-components/feedbacks/feedbacks-list";
import MainHeader from "../main-components/header/header";
import './main.scss';
import { FeedbacksProvider } from "../../context/context";
import { useSelector, useDispatch } from "react-redux";
import { getFeedbacks } from "../main-components/feedbacks/feedbacks-slice";

function Main({filter, open}){
    const dispatch = useDispatch()
    const feedbackStatus = useSelector(state => state.feedbacks.status)
    if(feedbackStatus === "idle") {
            dispatch(getFeedbacks())
    }
    const data = useSelector(state => state.feedbacks.feedbacks)
    const errorStatus = useSelector(state => state.feedbacks.error)
    console.log(errorStatus);
    
    return (
        <FeedbacksProvider>
            <div className={open ? "main main--grey" : "main"}>
                <div className="main__grey-wrapper">
                </div>
                <MainHeader />
                {
                    feedbackStatus === "loading" ? <div className="wrapper"><b className="loading">Loading...</b></div> : (
                        feedbackStatus === 'error' ? <div className="wrapper"><b className="loading">Error {errorStatus.message.toString().toLowerCase()}
                        </b></div> : <FeedbacksList data={data} filter={filter}  />
                    )
                }
            </div>
        </FeedbacksProvider>
    )
}

export default Main