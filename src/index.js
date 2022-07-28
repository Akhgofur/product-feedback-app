import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';
import {Routes, Route, Link} from 'react-router-dom'
import CreateFeedbackModal from './modules/create-modal/create-modal';
import MainEmpty from './components/main/main-empty';
import CommentsMain from './modules/comments/main/main';
import Window from './components/window/window';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
    <BrowserRouter>
      <Window/>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
