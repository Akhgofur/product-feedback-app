import FeedbacksList from "../main-components/feedbacks/feedbacks-list";
import MainHeader from "../main-components/header/header";
import { Link } from "react-router-dom";
import './main.scss';
import { FeedbacksProvider } from "../../context/context";
import { useState } from "react";
// import {Routes, Route, Link} from 'react-router-dom';
function Main(){

    const [selected, setSelected] = useState("1")
    return (
        <FeedbacksProvider>
            <div className="main">
                <MainHeader setSelected={setSelected} />
                <FeedbacksList selected={selected} />
            </div>
        </FeedbacksProvider>
    )
}

export default Main