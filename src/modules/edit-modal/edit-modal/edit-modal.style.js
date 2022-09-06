import { Link } from "react-router-dom"
import styled from "styled-components"
import ruchka from "../../../assets/img/pen.svg"


export const EditFeedbackWrapper = styled.div`
    max-width: 540px;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    margin-right: auto;
    margin-left: auto;
    padding: 52px 42px 40px;
    position: relative;
    @media (max-width:550px) {
        padding-right: 24px;
        padding-left: 24px;
    }
`
export const EditFeedbackHeading = styled.h3`
    margin: 0;
    padding: 0;
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.333333px;
    color: #3A4374;
    &::before {
        content: url(${ruchka}) ;
        padding: 16px;
        width: 56px;
        height: 56px;
        position: absolute;
        display: inline-block;
        background: radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%);
        border-radius: 50%;
        color: #fff;
        line-height: 16px;
        left: 42px;
        top: -28px;

    }
`
export const EditFeedbackForm = styled.form` `
export const EditFeedbackTitle = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.194444px;
    color: #3A4374;
    margin: 0;
    padding: 0;
    margin-bottom: 2px;
`
export const EditFeedbackTitleWarning = styled.p`
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #647196;
    margin-bottom: 16px;
`
export const EditFeedbackTitleInput = styled.input`
     background: #F7F8FD;
    border-radius: 5px;
    width: 100%;
    padding: 13px 24px;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #3A4374;
    border: none;
    margin-bottom: 24px;
`
export const EditFeedbackCategories = styled.select`
    background: #F7F8FD;
    border-radius: 5px;
    width: 100%;
    padding: 13px 24px;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #3A4374;
    border: none;
    margin-bottom: 24px;
`
export const EditFeedbackCategory = styled.option` `
export const EditFeedbackStatusSelect = styled.select`
    background: #F7F8FD;
    border-radius: 5px;
    width: 100%;
    padding: 13px 24px;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #3A4374;
    border: none;
    margin-bottom: 24px;
`
export const EditFeedbackStatusOption = styled.option` `
export const EditFeedbackTextArea = styled.textarea`
    background: #F7F8FD;
    border-radius: 5px;
    width: 100%;
    padding: 13px 24px;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #3A4374;
    border: none;
    margin-bottom: 32px;
    resize: none;
`
export const EditFeedbackModalBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    @media (max-width:550px) {
        flex-direction: column-reverse;
        align-items: stretch;
        text-align: center;
    }
`
export const EditFeedbackDeleteBtn = styled.button`
    margin-right: auto;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #F2F4FE; 
    padding: 12px 24px;
    background-color: #D73737;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    @media (max-width:550px) {
        margin-right: 0;
    }
`
export const EditFeedbackCancelBtn = styled(Link)`
    margin-right: 16px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #F2F4FE; 
    padding: 12px 24px;
    background-color: #3A4374;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: none;
    @media (max-width:550px) {
        margin-right: 0;
        margin-bottom: 16px;
    }
    
`
export const EditFeedbackSubmitBtn = styled.button` 
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #F2F4FE; 
    padding: 12px 24px;
    background-color: #AD1FEA;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    @media (max-width:550px) {
        margin-bottom: 16px;
    }
`