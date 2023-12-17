
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../../provider";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
const gitProvider = new GithubAuthProvider ();
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading()
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userSignIn = (email, password) => {
        setLoading()
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        setLoading()
        return signInWithPopup(auth, googleProvider)
    }
    const signInWithGithub = () => {
        signInWithPopup(auth, gitProvider)
    }

    const logOut = () => {
        setLoading()
        return signOut(auth);

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, courantUser => {
            setUser(courantUser);
            setLoading()
            console.log("courant user is exist", courantUser)
        });
        return () => {
            unSubscribe()
        }

    }, [])

    const info = {
        user, loading,
        createUser,
        userSignIn,
        logOut,
        signInWithGoogle,
        signInWithGithub
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;