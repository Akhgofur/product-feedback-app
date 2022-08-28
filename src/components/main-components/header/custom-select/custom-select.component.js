import { useState } from "react"
import { Dropdown, DropdownBtn, DropdownHeader, DropdownItem, DropdownList } from "./custom-select.style"
import strelka from "../../../../assets/img/strelka-select.svg"

export const CustomSelect = ({items, setSelected}) => {
    const [active, setActive] = useState(items[0])
    const [open, setOpen] = useState(false)

    const handleListClick = (e) => {
        if(e.target.matches('.dropdown__item')) {
            setActive(items.find(item => `${item.id}` === `${e.target.id}`))
            setSelected(`${e.target.dataset.id}`)
            setOpen(false)
        }
    }

    return(
        <Dropdown>
            <DropdownHeader>
                <DropdownBtn  onClick={() => setOpen(!open)}>
                    {active.name}
                </DropdownBtn>
                <img className={open ? "dropdown__img--open" : 'dropdown__img'} alt={"strelka"} src={strelka} width={8} height={4} />
            </DropdownHeader>
            {
                open && (<DropdownList onClick={handleListClick}>
                    {items.map(item => <DropdownItem data-id={item.id} className={`${active.id}` === `${item.id}` ? 'dropdown__item dropdown__item--active' : 'dropdown__item'} key={item.id} id={item.id} >{item.name}</DropdownItem>)}
                </DropdownList>)
            }
        </Dropdown>
    )
}