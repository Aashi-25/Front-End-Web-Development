import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebaseConfig";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export default function AuthState({ children }) {

    const[loading , setLoading] = useState(true);

    const [registerFormData, setRegisterFormData] = useState(
        {
            name: "",
            email: "",
            password: "",
            gender: "",
            bio: "",
        }
    );

    const [loginFormData , setLoginFormData] = useState({
        email : '',
        password : ''
    })

    const [user, SetUser] = useState(null);

    const navigate = useNavigate();

    function registerWithFirebase(event) {
        setLoading(true);
        event.preventDefault();

        const { email, password } = registerFormData;
        console.log("Trying to register:", email, password);

        return createUserWithEmailAndPassword(auth, email,password);
    }

    function loginWithFirebase(){
        const {email , password} = loginFormData;
        setLoading(true);

        return signInWithEmailAndPassword(auth , email , password)
    }

    function handleLogout(){
        return signOut(auth);
    }

    useEffect(() => {
        const checkAuthState = onAuthStateChanged(auth, (currentUser) => {
            SetUser(currentUser);
            setLoading(false);
        });

        return () => {
            checkAuthState();
        }
    }, []);

    useEffect(() => {
        if (user) navigate('/profile')
    }, [user])

    if (loading) return <h1>Loading ! Please wait</h1>

    return <AuthContext.Provider value={{ registerFormData, setRegisterFormData, registerWithFirebase , loading , user , loginFormData , setLoginFormData , loginWithFirebase , handleLogout , SetUser , setLoading}}>
        {children}
    </AuthContext.Provider>
}