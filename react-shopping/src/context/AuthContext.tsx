import React, {createContext, ReactNode, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

export type User ={
    id: string;
    name:string;
    email:string;
}
type singInCredentials ={
    email: string;
    password:string;
}

type AuthContextData ={
    singIn(credentials: singInCredentials): Promise<void>;
    user: User;
    isAuthenticated: boolean;
}

type AuthProviderPros ={
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children }:AuthProviderPros) {
    const navigate = useNavigate();
    const [user, setUser] = useState<User>();
    const isAuthenticated = !!user;

    async function singIn({email,password}: singInCredentials){
        try{
        const response = await api.post('/api/auth/login/',{
            email,
            password,
        })
        const { id, name} = response.data.payload;
        //console.log(response.data.payload.name)
        
        setUser({
          id, name, email
        })

        localStorage.setItem(JSON.stringify(user), "response")
        navigate("/");
        } catch(err){
            console.log(err);
        }
    }

    return(
        <AuthContext.Provider value={{ singIn,user, isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    )
};
