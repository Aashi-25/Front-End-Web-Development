import { useState } from "react";
import CommonForm from "../common-form";
import { RegisterFormElements } from "../../config";

const initialRegister = {
    name : '',
    email : '',
    password : ''
}


function RegisterComponent() {
    const [registerFormData, setRegisterformData] = useState(initialRegister);

    function handleRegisterOnSubmit(event){
        event.preventDefault();
        console.log(event);
        setRegisterformData(initialRegister);

    }
    return(
    <div>
        <h2>Register Component</h2>
        
        <CommonForm
            formControls={RegisterFormElements}
            formData={registerFormData}
            setFormData={setRegisterformData}
            buttonText={"Register"}
            onhandleSubmit={handleRegisterOnSubmit}
        />
    </div>
)}

export default RegisterComponent;