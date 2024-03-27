const Form = (props) => {
    return (
        <form onSubmit={props.onSubmit}>
            <div>
                name: <input value={props.inputs[0].name} onChange={props.inputs[0].handler}/>
            </div>
            <div>
                number: <input value={props.inputs[1].name} onChange={props.inputs[1].handler}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default Form