import React,{useContext, useEffect,useState} from 'react';
import {UserContext} from '../contexts/UserContext'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast'
import axios from 'axios';
import bgprofile from '../img/interieur-salle-3d-grunge-arriere-plan-atmosphere-fumee-fumee.jpg'

export const Profile = () => {
    const navigate = useNavigate()
    const {user,setUser} = useContext(UserContext)
    const [name,setName] = useState(user && user.name)
    const [email,setEmail] = useState(user && user.email)
    const [currPassword,setCurrPassword] = useState('')
    const [newPassword,setNewPassword] = useState('')
    useEffect(()=>{
        const use = localStorage.getItem("user")
        if(user !== null) setUser(JSON.parse(use))
    },[])
    const updateHandler =async (e) => {
        e.preventDefault()
        try {
            const {data} = await axios.post("http://127.0.0.1:4545/userProfile", {
                name:name,
                email:email,
                currPassword:currPassword,
                newPassword:newPassword,
                }
            )
            if(data.error){
                toast.error(data.error)
            }else {
                setEmail('')
                setName('')
                setCurrPassword('')
                setNewPassword('')
                toast.success("Account,has been updated successfuly")
                navigate('/')
            }
        } catch (error) {
            console.log(error)
        }

    }
  return (

<div className="h-screen bg-no-repeat bg-cover bg-center flex justify-center items-center" style={{backgroundImage:`url(${bgprofile})`}}>
    <div className="sm:mt-10">    
        <div className="block md:flex">
            <div className="w-full md:w-2/5 p-4 sm:p-6 sm:mt-24 lg:p-8 bg-transparente shadow-md">
                <div className="flex justify-between">
                    <span className="text-md font-semibold block text-white">welcome {user && user.name} to your profile</span>
                    
                </div>
                <div className="w-full p-8 mx-2 flex justify-center">
                <img id="showImage" className="max-w-xs w-32 items-center border rounded-full" src="https://images.unsplash.com/photo-1477118476589-bff2c5c4cfbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&q=200" alt=""/>                     
                </div>
                <div className="pb-4">
                    <label class="block mb-2 font-semibold text-white dark:text-white" HtmlFor="default_size">Upload your Photo</label>
                    <input class="block w-full mb-5  text-white border border-black rounded-lg cursor-pointer bg-[#323232] dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="default_size" type="file" /> 
                </div>
                <div className='flex justify-end'>
                    <button className="-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800">Save Image</button>
                </div>
            
            </div>           
            <form onSubmit={updateHandler} className="w-full md:w-3/5 p-8 bg-transparent lg:ml-4 shadow-md">
                <div className="rounded  shadow p-6">
                <div className="pb-6">
                    <label htmlFor="name" className="font-semibold text-white block pb-1">Name</label>
                    <div className="flex">
                    <input value={name} onChange={(e)=>setName(e.target.value)} id="username" className="border-2 border-black text-white text-semibold rounded-full px-4 py-2 w-full bg-[#323232]" type="text" />
                    </div>
                </div>
                <div className="pb-4">
                    <label htmlFor="about" className="font-semibold text-white block pb-1">Email</label>
                    <input value={email} onChange={(e)=>setEmail(e.target.value)} id="email" className="border-2 border-black  rounded-full text-white text-semibold px-4 py-2 w-full bg-[#323232]"  type="email" />
                </div>
                <div className="pb-4">
                    <label htmlFor="about" className="font-semibold text-white block pb-1">Current Password</label>
                    <input onChange={(e)=>setCurrPassword(e.target.value)} id="currPassword" className="border-2 border-black  rounded-full text-white px-4 py-2 w-full bg-[#323232]" type="password" />
                </div>
                <div className="pb-4">
                    <label htmlFor="about" className="font-semibold text-white block pb-1">New Password</label>
                    <input onChange={(e)=>setNewPassword(e.target.value)} id="newPassword" className="border-2 border-black  rounded-full text-white px-4 py-2 w-full bg-[#323232]" type="password" />
                </div>
                <div className="pb-4 mt-4 flex justify-end">
                    <button type="submit" className='-mt-2 text-md font-bold text-white bg-gray-700 rounded-full px-5 py-2 hover:bg-gray-800'>Save</button>
                </div>
                </div>
            </form>
        </div>
    </div>
</div>
  )
}
