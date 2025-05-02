import { useState } from "react";

function FormComponent(){
    const [nameValue , setNameValue] = useState(''); 
    //useState keeps track of changing data

    const[emailValue , setEmailValue] = useState('');

    //creating common form state
    const[formData , setFormData] = useState({
        name : '',
        email : ''
    })

    function handleInputChange(event){
        console.log(event);
        const {value} = event.target;
        setNameValue(value);
    }

    function handleSubmit(event){
        event.preventDefault(); //prevent page reload on clicking submit button

        //call the api and pass the name value
        console.log(nameValue,emailValue);
    }

    function handleEmailChange(event){
        const {value} = event.target;
        setEmailValue(value);
    }

    function handleOnChange(event){
        console.log(event.target.name);

        const {name , value} = event.target;

        setFormData({
            ...formData , 
            [name] : value
        })
    }
    console.log(formData);

    return <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
        <input value = {formData.name} name = 'name' id='id' placeholder= 'Enter your name' onChange = {handleOnChange}></input>

        <input style={{marginLeft : 10 }}
        type="email" name="email" id="email" placeholder="Enter your email" onChange={handleOnChange} value = {formData.email}/>

        <button style={{marginLeft : 10 }} type = "submit">Submit</button>
        </form>
    </div> 
    //on passing the parameter value..not able to update name in form 
}

export default FormComponent;