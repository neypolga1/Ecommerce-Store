import React,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast'

import SignUpBg from '../img/5053309.jpg'

const SignupForm = () => {
  const navigate = useNavigate()

  const [nameReg,setNameReg] = useState("")
  const [emailReg,setEmailReg] = useState("")
  const [passwordReg,setPasswordReg] = useState("")

  const register = async (e) =>{
    e.preventDefault()
    try {
      const {data} = await axios.post("http://127.0.0.1:4545/signUp", {
      name:nameReg,
      email:emailReg,
      password:passwordReg,
      }
      )

      if(data.error){
        toast.error(data.error)
      }else {
        setEmailReg('')
        setNameReg('')
        setPasswordReg('')
        toast.success("Congratulation!,You have been sign up successfyly.")
        navigate('/logIn')
      }
    } catch (error) {
      console.log(error)
    }
  }
 return (
    <div className="bg-zinc-800 min-h-screen flex items-center justify-center bg-no-repeat bg-cover bg-center" style={{backgroundImage:`url(${SignUpBg})`}}>
      <div className="bg-[#eeeee0] p-8 rounded-lg shadow-md min-w-2/3">
        <h2 className="text-2xl font-bold mb-5">Create an Account</h2>
        <form onSubmit={register}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input value={nameReg} onChange={(e)=>setNameReg(e.target.value)}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter your name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input value={emailReg} onChange={(e)=>setEmailReg(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="name@company.com" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input value={passwordReg} onChange={(e)=>setPasswordReg(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="agree">
              <input className="mr-2 leading-tight" type="checkbox" id="agree" />
              <span className="text-sm">
                By signing up, you are creating a Flowbite account, and you agree to Flowbite's Terms Use and Privacy Policy.
              </span>
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Create an Account
            </button>
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Sign in here
            </a>
          </div>
        </form>
      </div>
    </div>
 );
};

export default SignupForm;