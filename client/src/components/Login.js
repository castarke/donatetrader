import {useMutation} from '@apollo/client';
import {LOGIN_USER} from '../utils/mutations';
import { useState } from 'react';

function Login(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [loginUser]=useMutation(LOGIN_USER);
    const handleLogin=async()=>{
        try{
            const response=await loginUser({
                variables:{
                    email,
                    password,
                },
            });
            const {token}=response.data.login;
            localStorage.setItem('token',token);
            }
        catch(error){
            console.log(error);
        }
    };

    return(
        <div>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
