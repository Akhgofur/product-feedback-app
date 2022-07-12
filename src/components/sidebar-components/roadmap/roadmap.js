import './roadmap.scss'
function Roadmap() {
    return (
        <div className='roadmap'>
            <div className='roadmap__top'>
                <p className='roadmap__heading'>
                Roadmap
                </p>
                <a className='roadmap__link' href='#'>View</a>
            </div>
            <ol className='roadmap__list'>
                <li className='roadmap__item'>
                    <p className='roadmap__item-heading'>
                    Planned
                    </p>
                    <p className='roadmap__item-number'>2</p>
                </li>
                <li className='roadmap__item'>
                    <p className='roadmap__item-heading'>
                    In-Progress
                    </p>
                    <p className='roadmap__item-number'>3</p>
                </li>
                <li className='roadmap__item'>
                    <p className='roadmap__item-heading'>
                    Live
                    </p>
                    <p className='roadmap__item-number'>1</p>
                </li>
            </ol>
        </div>
    )
}
export default Roadmap