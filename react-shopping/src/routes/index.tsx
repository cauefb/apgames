import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"
import { Cadastro } from "../pages/Cadastro/Cadastro";
import Home from "../pages/Home/Home";
import { Login } from "../pages/login/Login";

import { AuthProvider } from "../context/AuthContext";

type User ={
    id:string;
    email:string;
}


export const AppRoutes = () => {
    //const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const login = (email:string, password:string) =>{
    
    }

    const logout =() =>{};
    return (
        <BrowserRouter >
            <AuthProvider>
            <Routes>
                
                <Route path="/*" element={<Home/>}/>
                <Route path="/*" element={<Navigate to="/home"/>} />
                <Route path="/login"  element={<Login/>}/>
                <Route path="/cadastro"  element={<Cadastro/>}/>
            </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}