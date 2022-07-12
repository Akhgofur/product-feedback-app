import './header.scss'
function MainHeader(){
    return(
        <header className="main-header">
            <img className="main-header__img" src="../src/assets/img/bulb.svg" width={24} height={24}/>
            <p className='main-header__heading'>6 Suggestions</p>
            <p className='main-header__select-title'>Sort by : </p>
            <select className='main-header__select'>
                <option className='main-header__select-option'>Most Upvotes</option>
            </select>
            <button className='main-header__btn'>+ Add Feedback</button>
        </header>
    )
}
export default MainHeader