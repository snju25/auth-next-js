'use client'

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import toast, { Toaster } from "react-hot-toast"


const ProfilePage = () => {
  const router = useRouter()
  const [data,setData] = useState('nothing')
  const logout = async() =>{
    try {
      const response = await axios("api/users/logout")
      console.log(response.data.message);
      toast.success(response.data.message)
      // return response
      return router.push('/login')
           
    } catch (error : any) {
      console.log(error.message);
      toast.error(error.message)
      return error
  
    }

  }

  const getUserDetails = async() =>{
    const res = await axios("/api/users/me")
    console.log(res.data);
    
    setData(res.data.user._id)
  }

  return (
    <div className="h-screen justify-center items-center flex flex-col">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <hr />
      <h2 className="p-2 rounded bg-green-500">{data === 'nothing'? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
      <button  className="mt-2 bg-blue-500 text-white p-4" onClick={logout}>Logout</button>
      <button  className="mt-2 bg-green-500 text-white p-4" onClick={getUserDetails}>Get User Details</button>
      <Toaster/>
    </div>
  )
}
export default ProfilePage