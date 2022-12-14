import { createContext, Dispatch, FC, PropsWithChildren, SetStateAction, useState } from 'react'

interface IData {
    user: {
        _id: string,
        email: string
    } | null
    accessToken: string
}

interface IContext extends IData{
    setData: Dispatch<SetStateAction<IData>> | null
}


export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider: FC<PropsWithChildren<unknown>> = ({children}) => {
    const [data, setData] = useState<IData>({
        user: null,
        accessToken: ''
    })

    return <AuthContext.Provider value={{...data, setData}}>
        {children}
    </AuthContext.Provider>
};

