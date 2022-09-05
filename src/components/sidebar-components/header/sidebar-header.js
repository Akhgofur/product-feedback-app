import './sidebar-header.scss'
function SidebarHeader({setOpen, open}) {
    return (
        <div className="sidebar__header">
            <div className="sidebar__header-content">
                <h2 className="sidebar__header-heading">
                Frontend Mentor
                </h2>
                <p className="sidebar__header-desc">
                Feedback Board
                </p>
            </div>
            <button className="sidebar__header-btn toggler" onClick={() => setOpen(!open)} >
                <span className="toggler__line toggler__top"></span>
                <span className="toggler__line toggler__center"></span>
                <span className="toggler__line toggler__bottom"></span>
            </button>
        </div>
    )
}

export default SidebarHeader