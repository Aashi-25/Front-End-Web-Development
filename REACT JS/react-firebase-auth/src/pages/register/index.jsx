import React, { useContext } from 'react'
import CommonForm from '../../components/common-form';
import { AuthContext } from '../../context';
import { registerFormControls } from '../../config';

function RegisterPage() {

    const {registerFormData , setRegisterFormData , registerOnSubmit} = useContext(AuthContext);

    console.log(registerFormData);

  return (
    <div className='w-full max-w-sm mx-auto rounded-lg shadow-md'>
        <div className='px-6 py-5'>
            <h3>Welcome back</h3>
            <p>Register Page</p>
            <CommonForm
            formControls={registerFormControls}
            formData={registerFormData}
            setFormData={setRegisterFormData}
            onSubmit={registerOnSubmit}
            buttonText={'Save'}
            />
        </div>
    </div>
  )
}

export default RegisterPage;