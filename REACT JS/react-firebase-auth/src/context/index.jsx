import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthState({children}) {

    const [registerFormData , setRegisterFormData] = useState(
        {
            name : '',
            email : '',
            password : '',
            gender : '',
            bio : ''
        }
    )

    function registerOnSubmit(event){
        event.preventDefault();
    }

    return <AuthContext.Provider value = {{registerFormData , setRegisterFormData , registerOnSubmit}}>
        {children}
    </AuthContext.Provider>
}