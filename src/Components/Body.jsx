import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import Footer from './Footer'
import axios from 'axios'
import { BASE_URL } from '../utils/constant'
import { addUser } from '../Store/userSlice'

const Body = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const fetchUser = async () => {



    try {
      const res = await axios.get(BASE_URL + "/profile/view-profile", {
        withCredentials: true
      })

      dispatch(addUser(res.data.data))

    } catch (error) {

      if (error.status === 404) {
        navigate("/login")
      }
      console.error(error)
    }

  }

  useEffect(() => {
    fetchUser()

  }, [])
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Body