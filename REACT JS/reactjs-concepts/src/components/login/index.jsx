import { useState } from "react";
import { loginFormElements } from "../../config";
import CommonForm from "../common-form";

const initialState = {
    email : '',
    password : ''
}

function LoginComponent(){
    const [loginFormData , setLoginFormData] = useState(initialState);

    function onhandleSubmit(event){
        event.preventDefault();
        //api lofic and some database logic

        setLoginFormData(initialState);
    }
    
    return(
    <div>
        <h2>
            Login Component
        </h2>
        <CommonForm formData = {loginFormData} setFormData = {setLoginFormData} formControls = {loginFormElements}
        buttonText={"Login"}
        onhandleSubmit = {onhandleSubmit}/>
    </div>
)}

export default LoginComponent;