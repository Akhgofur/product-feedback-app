import { FeedbacksProvider } from '../../context/context'
import Categories from '../sidebar-components/categories/categories'
import SidebarHeader from '../sidebar-components/header/sidebar-header'
import Roadmap from '../sidebar-components/roadmap/roadmap'
import './sidebar.scss'
function Sidebar() {

    
    return (
        <FeedbacksProvider>
            <div className='sidebar'>
            <SidebarHeader/>
            <Categories />
            <Roadmap/>
            </div>
        </FeedbacksProvider>
    )
}

export default Sidebar