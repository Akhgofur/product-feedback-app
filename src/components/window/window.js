import React from "react";
import { Route, Routes } from "react-router-dom";
import Comments from "../../modules/comments/comments";
import { Modal } from "../../modules/create-modal/modal";
import { EditModalWrapper } from "../../modules/edit-modal/edit-modal-wrapper";
import App from "../app/App";
import MainEmpty from "../main/main-empty";

function Window(){  
    

    return(
        <Routes>
                <Route path='' element={<App/>} />
                <Route path='/single/:id' element={<Comments />} />
                <Route path='/create' element={<Modal/>}></Route>
                <Route path='/empty' element={<MainEmpty/>} />
                <Route path="/edit-feedback/:id" element={<EditModalWrapper/>} />
                
            
        </Routes>
    )
}

export default Window



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
