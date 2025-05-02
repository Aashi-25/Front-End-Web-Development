function CommonInput({type, label, onChange, name, id, value, placeholder}){
    return(
        <div>
            <label htmlFor = {name}>{label}</label>
            <input name={name} id = {id} placeholder = {placeholder || "Enter value here"} value = {value} onChange = {onChange} type = {type || 'text'}/>
        </div>
    )

}

export default CommonInput;