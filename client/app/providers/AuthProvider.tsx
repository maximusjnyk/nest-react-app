import { createContext, FC, PropsWithChildren } from 'react'

interface IContext {
    user: {
        _id: string,
        email: string
    } | null
    accessToken: string
}

export const AuthContext = createContext<IContext>({
    user: null,
    accessToken: ''
})

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({children}) => {

    const data: IContext

    return <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
};