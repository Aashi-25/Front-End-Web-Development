import React from 'react'
import { useForm } from 'react-hook-form';

function ReactHookForm() {

    const { register, handleSubmit, formState: { errors } , reset } = useForm();

    async function onSubmitForm(data){
        try {
            const response = await fetch('YOUR_API_ENDPOINT_HERE', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const result = await response.json();
            console.log('Success:', result);
            reset();
        } catch (error) {
            console.error('Error:', error);
        }
    }
  return (
    <div>
        <h1>React Hook Form</h1>
        <form style = {{textAlign : 'center'}} onSubmit={handleSubmit(onSubmitForm)}>
            <div>
                <label>Email :- </label>
                <input {...register("email", {required: true , pattern : {
                    value : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,  // basic email regex
                }})} name='email' type = 'email'/>
                {
                    errors.email && errors.email.type === "required" ? (<p style = {{color : 'yellow' , fontWeight : 'bolder' , margin : '20px'}}>Email is required</p>) : null
                }
                {
                    errors.email && errors.email.type === "pattern" ? (<p style = {{color : 'yellow' , fontWeight : 'bolder' , margin : '20px'}}>Please enter a valid email address</p>) : null
                }
            </div>
            <div>
                <label>Password :- </label>
                <input {...register("password" , { required : true , minLength : 8 } )} name='password' type = 'password'/>
                {
                    errors.password && errors.password.type === 'required' ? (
                        <p style={{color : 'yellow' , fontWeight : 'bolder' , margin : '20px'}}>Password is required</p>
                    ) : null
                }

                {
                    errors.password && errors.password.type === 'minLength' ? <p style = {{color : 'yellow' , fontWeight : 'bolder' , margin : '20px'}}>Password should be atleast 8 characters. Please verify the password again.</p> : null
                }
            </div>
            <button type='submit' style={{marginTop : "20px"}}>Submit</button>
        </form>
    </div>
  )
}

export default ReactHookForm;