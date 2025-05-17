import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB3ZDbTvC3xplH1GLT5s6Slf0luiUIfpKY",
    authDomain: "react-firebase-auth-d20f9.firebaseapp.com",
    projectId: "react-firebase-auth-d20f9",
    storageBucket: "react-firebase-auth-d20f9.firebasestorage.app",
    messagingSenderId: "954464416561",
    appId: "1:954464416561:web:73346b4a18ee3e1afab610",
    measurementId: "G-8TMVR68VKP"
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;