import { Link } from "react-router-dom"
import styled from "styled-components"
import strelka from "../../assets/img/strelka-select.svg"

export const RoadmapContainer = styled.div` 
    max-width: 1150px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 20px;
    width: 100%;
    padding-top: 78px;
    @media (max-width: 500px) {
        padding: 0;
    }
`
export const RoadmapHeader = styled.div` 
    padding: 27px 40px 27px 32px;
    border-radius: 10px;
    background-color: #373F68;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 500px) {
        border-radius: 0;
        padding: 26px 24px;
    }
`
export const RoadmapHeadingWrapper = styled.div` 

`
export const RoadmapBackBtn = styled(Link)` 
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #FFFFFF;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    margin-bottom: 4px;
    text-decoration: none;
    &::before {
        content: url(${strelka});
        display: block;
        transform: rotate(-90deg);
        margin: 0;
        margin-right: 15px;
    }
`
export const RoadmapHeading = styled.h2` 
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.333333px;
    color: #FFFFFF;
    margin: 0;
    @media (max-width: 550px) {
        font-size: 18px;
        line-height: 26px;
        letter-spacing: -0.25px;
    }
`

export const RoadmapNav = styled.nav`
    display: none;
    @media (max-width: 500px) {
        display: block;
    }
`
export const RoadmapNavList = styled.ul` 
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
`
export const RoadmapNavItem = styled.li`
    flex-grow: 1;
`
export const RoadmapNavBtn = styled.button`
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.180556px;
    color: #3A4374;
    padding: 0;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &[data-id] {
        border-bottom: 4px solid #AD1FEA;
        padding-bottom: 16px;
    }
`
export const RoadmapMain = styled.div`
    padding-top: 48px;
`
export const RoadmapBoard = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
`
export const RoadmapBoardItem = styled.li`
    flex-grow: 1;
    list-style: none;
    &:not(:last-child) {
        margin-right: 30px;
    }
`
export const RoadmapBoardItemTop = styled.div`
    margin-bottom: 32px;
`
export const RoadmapBoardItemHeading = styled.h3`
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3A4374;
    margin: 0;
    margin-bottom: 4px;
`
export const RoadmapBoardItemDesc = styled.p` 
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #647196;
    margin: 0;
`
export const RoadmapList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;
`