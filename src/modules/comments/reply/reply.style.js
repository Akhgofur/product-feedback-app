import styled from "styled-components"

export const ReplyItem = styled.li`
    display: flex;
    align-items: start;
    justify-content: start;
    padding-top: 32px;
`
export const ReplyIconWrapper = styled.div`
    flex-shrink: 0;
`
export const ReplyingTo = styled.span` 
    font-weight: 700;
    font-size: 15px;
    line-height: 22px;
    color: #AD1FEA;
`
export const ReplyIcon = styled.img` 
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 32px;
`
export const ReplyContent = styled.div` 
    flex-grow: 1;
`
export const ReplyContentHeader = styled.header` 
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 17px;
`
export const ReplyAuthor = styled.div``
export const ReplyUserName = styled.p` 
    padding: 0;
    margin: 0;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.194444px;
    color: #3A4374;    
`
export const ReplyUserEmail = styled.p` 
    padding: 0;
    margin: 0;
    text-decoration: none;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #647196;
`
export const ReplyBtn = styled.button` 
    display: inline-block;
    cursor: pointer;
    padding: 4px;
    margin: 0;
    border: none;
    background-color: transparent;
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    color: #4661E6;
`
export const ReplyDesc = styled.p` 
    padding: 0;
    margin: 0;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    color: #647196;
`