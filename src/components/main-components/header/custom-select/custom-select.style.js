import styled from "styled-components"

export const Dropdown = styled.div` 
    z-index: 10;
    margin-right: auto;
`
export const DropdownHeader = styled.header` 
    display: flex;
    align-items: center;
    justify-content: start;
`
export const DropdownImg = styled.img` 
    transform: rotate(180deg);

`
export const DropdownBtn = styled.button` 
    background-color: transparent;
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #F2F4FE;
    letter-spacing: -0.25px;
    border: none;
    margin-right: 9px;
    @media (max-width: 630px) {
        font-size: 13px;
        line-height: 19px;
    }
`
export const DropdownList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    z-index: 10;
    left: 50%;
    transform: translateX(-70%);
    top: calc(100% + 16px);
    border-radius: 10px;
    background-color: #fff;
    user-select:none;
    width: 100%;
    max-width: 255px;
    box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
    @media (max-width: 630px) {
        transform: translateX(-50%);
}
`
export const DropdownItem = styled.li`
    padding: 12px 24px;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #647196;
    width: 100%;
    &:not(:last-child) {
        border-bottom: 1px solid #3a437423;
    }
    &:hover {
        color: #AD1FEA;
    }
`