import { useState } from 'react'
import { FeedbacksProvider } from '../../context/context'
import Categories from '../sidebar-components/categories/categories'
import SidebarHeader from '../sidebar-components/header/sidebar-header'
import Roadmap from '../sidebar-components/roadmap/roadmap'
import './sidebar.scss'
function Sidebar({setFilter}) {
    const [open, setOpen] = useState(false)

    return (
        <FeedbacksProvider>
            <div className={open ? 'sidebar sidebar--open' : 'sidebar'}>
            <SidebarHeader setOpen={setOpen} open={open} />
            <div className="sidebar__bottom">
                <Categories setFilter={setFilter} />
                <Roadmap/>
            </div>
            </div>
        </FeedbacksProvider>
    )
}

export default Sidebar