import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth"
import app from '../../components/firebase/firebase.config';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext()
const auth = getAuth(app)



const UserContext = ({ children }) => {
    const [user, setUser] = useState("");
    const [loader, setLoader] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    // react toast startb
    const createUserToast = () => {
        toast.success("Create User Successful", {
            position: toast.POSITION.TOP_RIGHT
        })
    }
    const loginSuccessToast = () => {
        toast.success("Login Success", {
            position: toast.POSITION.TOP_RIGHT
        })
    }
    const logOutToast = () => {
        toast.success("LogOut Success", {
            position: toast.POSITION.TOP_RIGHT
        })
    }
    const loginErrorToast = () => {
        toast.error("Your Email Or Password is Not Correct", {
            position: toast.POSITION.TOP_RIGHT
        })
    }

    // react toast end

    // general function
    const jwtUtility = (userEmail) => {
        fetch("https://lexis-art-server.onrender.com/jwt", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userEmail)
        })
            .then((response) => response.json())
            .then((data) => localStorage.setItem("lexis-art", data.userJwt))
    }

    const createUserEmailAndPassword = (name, email, password) => {
        setLoader(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                jwtUtility({ email })
                const newUser = userCredential.user
                updateProfile(auth.currentUser, {
                    displayName: name,

                })
                    .then(() => {
                        createUserToast();
                    })
                    .catch((error) => alert(error))
            })
            .catch((error) => alert(error))
    }


    const userLoginEmailAndPassword = (email, password) => {
        setLoader(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                jwtUtility({ email })
                loginSuccessToast()
            })
            .catch((error) => loginErrorToast())
    }

    const loginWithGoogle = () => {
        setLoader(true)
        signInWithPopup(auth, googleProvider)
            .then(() => {
                loginSuccessToast()
                onAuthStateChanged(auth, (currentUser => {
                    jwtUtility({ email: currentUser.email })
                }))
            })
            .catch((error) => alert(error))

    }

    const logOut = () => {
        localStorage.removeItem("lexis-art")
        signOut(auth)
            .then(() =>
                logOutToast()
            )
            .catch((error) => { alert(error) })
    }

    useEffect(() => {
        const unsubscriber = onAuthStateChanged(auth, (currentUser => {
            setUser(currentUser)
            setLoader(false)
        }))
        return () => unsubscriber()
    }, [])



    const authInfo = { user, loader, createUserEmailAndPassword, userLoginEmailAndPassword, loginWithGoogle, logOut }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default UserContext;