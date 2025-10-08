import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useNavigate} from "react-router-dom"

import { BASE_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { addUser } from '../Store/userSlice'


const Login = () => {

    const [emailId,setEmailId] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate  = useNavigate()

    const handleLogin = async () => {
        
      try {
        const res = await axios.post(
        BASE_URL + "/auth/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
       
      dispatch(addUser(res.data.data))

      setEmailId("")
      setPassword("")

     

      navigate("/")
      } catch (error) {
        console.log(error)
      }
      
    }

    
    return (
        <div className="card bg-base-300 w-[400px]  shadow-sm mx-auto my-10">

            <div className="card-body ">
                <h2 className="card-title text-2xl text-blue-200">Login</h2>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-[16px] text-gray-400">EmailId:</legend>

                    <input type="text" className="input" placeholder="Enter your email" value={emailId} onChange={(e) =>{
                        setEmailId(e.target.value)
                    }} />
                    
                </fieldset>

                <fieldset className="fieldset">
                    <legend className="fieldset-legend text-[16px] text-gray-400">Password:</legend>

                    <input type="text" className="input" value={password} placeholder="Enter your password" 
                      onChange={(e) =>{
                        setPassword(e.target.value)
                    }}
                    />
                    
                </fieldset>


                <div className="card-actions justify-center mt-7">
                    <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login