import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import UserCard from './UserCard'
import { useDispatch, useSelector } from 'react-redux'
import { addFeed } from '../Store/feedSlice'


const Feed = () => {

  const dispatch = useDispatch()

  const feed = useSelector(store => store.feed)

  const getFeed = async () => {

    if (feed) return

    const res = await axios.get(BASE_URL + "/user/feed", {
      withCredentials: true
    })

    dispatch(addFeed(res.data.feed))

  }



  useEffect(() => {
    getFeed()
  }, [])

   if (!feed) 
      return <h1 className='text-center my-10'>Loading feeds...</h1>;
   
  if(feed.length === 0)
     return <h1 className='text-center my-10'>No Feed Available</h1>

  return (
    <div>
      {feed &&
        <UserCard user={feed[0]} />

      }

    </div>
  )
}

export default Feed