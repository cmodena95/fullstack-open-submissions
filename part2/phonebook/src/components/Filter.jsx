const Filter = (props) => {
    return (
        <div>Filter shown with <input value={props.value} onChange={props.onChange}></input></div>
    )
}

export default Filter