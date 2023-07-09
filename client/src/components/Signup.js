import React,{useState} from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from './utils/mutations';

function Signup(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const[name,setName]=useState('');
    const [signupMutation,{loading,error}]=useMutation(SIGNUP_USER);

    const handleSignup=async()=>{
        try{
            const response=await signupMutation({
                variables:{
                    email,
                    password,
                    name,
                },
            });
        }
        catch(error){
            console.log(error);
        }
    };

    return(
        <div>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
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
                onChange={(e)=>setPassword(e.target.value)}
            />
            <button onClick={handleSignup}>Signup</button>
        </div>
    );
}