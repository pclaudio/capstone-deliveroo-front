import {createContext, ReactNode, useContext, useState} from "react"
import {useHistory} from "react-router"
import api from "../services/api"
import {toast} from "react-toastify"

export interface userData {
    email: string
    password: string
}

export interface userDataRegister {
    email: string
    password: string
    name: string
    passwordConfirm: string
}

interface AuthProviderProps {
    children: ReactNode
}

interface AuthProviderData {
    authToken: string
    userId: number
    history: any
    signIn: (userData: userData) => void
    logout: () => void
    userRegister: (userData: userDataRegister) => void
}

const AuthContext = createContext<AuthProviderData>({} as AuthProviderData)

export const AuthProvider = ({children}: AuthProviderProps) => {
    const history = useHistory()

    const [authToken, setAuthToken] = useState<string>(
        () => localStorage.getItem("token") || ""
    )

    const [userId, setUserId] = useState<number>(
        () => Number(localStorage.getItem("id")) || Number()
    )

    const signIn = (userData: userData) => {
        api.post("/login", userData)
            .then((response) => {
                localStorage.setItem("token", response.data.accessToken)
                setAuthToken(response.data.accessToken)
                localStorage.setItem("id", response.data.user.id)
                setUserId(response.data.user.id)
                history.push("/dashboard")
                toast.success(
                    `Login efetuado! Bem vindo, ${response.data.user.name}`
                )
            })
            .catch(() => {
                toast.error("Email ou senha inválidos")
            })
    }

    const logout = () => {
        localStorage.clear()
        setAuthToken("")
        history.push("/")
    }

    const userRegister = (userData: userDataRegister) => {
        api.post("/register", userData)
            .then(() => {
                history.push("/")
                toast.success(`Usuário cadastrado`)
            })
            .catch(() => {
                toast.error(`Tente outro email`)
            })
    }

    return (
        <AuthContext.Provider
            value={{authToken, userId, history, logout, signIn, userRegister}}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)
