const hoc = (hook, Component) => {
    const HocResult = (props) => {
        const hookResult = hook(props)
        return <Component {...props} {...hookResult} />
    }

    return HocResult
}

export default hoc