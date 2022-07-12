import Categories from '../sidebar-components/categories/categories'
import SidebarHeader from '../sidebar-components/header/sidebar-header'
import Roadmap from '../sidebar-components/roadmap/roadmap'
import './sidebar.scss'
function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarHeader/>
            <Categories/>
            <Roadmap/>
        </div>
    )
}

export default Sidebar