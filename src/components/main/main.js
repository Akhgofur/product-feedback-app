import FeedbacksList from "../main-components/feedbacks/feedbacks-list";
import MainHeader from "../main-components/header/header";
import './main.scss';
import {Routes, Route, Link} from 'react-router-dom';
function Main(){
    return (
        <div className="main">
            <MainHeader/>
            <FeedbacksList/>
        </div>
    )
}

export default Main