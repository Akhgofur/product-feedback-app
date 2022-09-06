import styled from "styled-components"
import arrow from "../../../../assets/img/strelka.svg"
import comment from '../../../../assets/img/comment.svg'

export const RoadmapCard = styled.li`
    padding: 32px;
    border-top: 6px solid #F49F85;
    border-radius: 5px;
    background-color: #fff;
`
export const RoadmapCardStatus = styled.p`
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #647196;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    &::before {
        content: '';
        width: 8px;
        height: 8px;
        background-color: #F49F85;
        border-radius: 50%;
        display: block;
        margin-right: 16px;
    }
`
export const RoadmapCardHeading = styled.h4`
    margin: 0;
    margin-bottom: 4px;
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3A4374;
`
export const RoadmapCardDesc = styled.p`
    margin: 0;
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #647196;
`
export const RoadmapCardCategory = styled.p`
    padding: 6px 16px;
    background-color: #F2F4FF;
    border-radius: 10px;
    font-weight: 600;
    font-size: 13px;
    line-height: 19px;
    color: #4661E6;
    margin-top: 0;
    margin-bottom: 16px;
    display: inline-block;
`
export const RoadmapCardBottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const RoadmapCardUpvotes = styled.button`
    cursor: pointer;
    border-radius: 10px;
    padding: 10px 12px 10px 16px;
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.180556px;
    color: #3A4374;
    background-color: #F2F4FE;
    border: none;
    display: flex;
    align-items: center;
    &::before {
        content: url(${arrow});
        margin-right: 12px;
        display: block;
        margin-top: -2px;
    }
`
export const RoadmapCardComments = styled.p`
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    text-align: center;
    letter-spacing: -0.222222px;
    color: #3A4374;
    margin: 0;
    display: flex;
    align-items: center;
    &::before {
        content: url(${comment});
        margin-right: 8px;
        display: block;
        padding-top: 5px;
    }
`