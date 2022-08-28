import FeedbacksList from "../main-components/feedbacks/feedbacks-list";
import MainHeader from "../main-components/header/header";
import { Link } from "react-router-dom";
import './main.scss';
import { FeedbacksProvider } from "../../context/context";
import { useState } from "react";
// import {Routes, Route, Link} from 'react-router-dom';
function Main({filter}){
    return (
        <FeedbacksProvider>
            <div className="main">
                <MainHeader />
                <FeedbacksList filter={filter}  />
            </div>
        </FeedbacksProvider>
    )
}

export default Main