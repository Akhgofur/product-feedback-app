import styled from "styled-components";


export const AddModal = styled.div`
    max-width: 730px;
    width: 100%;
    flex-shrink: 0;
    background-color: #fff;
    border-radius: 10px;
    padding: 24px 32px 32px 34px;
    position: fixed;
    bottom: 0;
    z-index: 100;
`
export const AddModalForm = styled.form`
    width: 100%;
`
export const AddModalHeading = styled.p`
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3A4374;
    margin: 0;
    padding: 0;
    margin-bottom: 24px;
`
export const AddModalInput = styled.textarea`
    padding: 16px 24px;
    border-radius: 5px;
    border: none;
    background-color: #F7F8FD;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #8C92B3;
    margin-bottom: 16px;
    width: 100%;
    resize: none;
`
export const AddModalBottom = styled.div` 
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const AddModalCommentsCount = styled.p` 
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #647196;
    margin: 0;
    padding: 0;
`
export const AddModalSubmitBtn = styled.button`
     border: none;
    display: inline-block;
    border-radius: 10px;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    background-color: #AD1FEA;
    color: #F2F4FE;
    padding: 12px 24px; 
`