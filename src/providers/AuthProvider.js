import React, { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext()
export const AuthContextDispatcher = createContext()

function AuthProvider({ children }) {

    const [state, setState] = useState("")

    // useEffect(() => {
    //     const userData = JSON.parse(localStorage.getItem("authStatee")) || false
    //     setState(userData)
    // }, [])

    return (
        <AuthContext.Provider value={state}>
            <AuthContextDispatcher.Provider value={setState}>
                {children}
            </AuthContextDispatcher.Provider>
        </AuthContext.Provider>
    )
}

export default AuthProvider


export const UseAuth = () => useContext(AuthContext)

export const UseAuthActions = () => {
    const auth = useContext(AuthContext)
    const setAuth = useContext(AuthContextDispatcher)

    const handleLogin = (name) => {
        setAuth(name)
    }

    const handleLogOut = () => {
        setAuth("")
    }

    return { handleLogin, handleLogOut }
}