import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest } from '../Store/requestSlice'

const Request = () => {

    const dispatch = useDispatch()
    const requests = useSelector(store => store.request)
   

    const pendingRequest = async () => {
      
        if(requests) return
      const res = await axios.get(BASE_URL + "/user/requests/received",{
        withCredentials:true
      })

      dispatch(addRequest(res.data.pendingRequest))
      console.log(res.data.pendingRequest)

    }

    useEffect(() =>{
        pendingRequest()
    },[])

      if (!requests) 
      return <h1 className='text-center my-10'>Loading requests...</h1>;

    if(requests.length === 0)
      return <h1 className='text-center my-10'>No Request Found</h1>


    return (

        <div className='mx-64 mt-8 mb-2'>
            <h1 className='font-semibold text-xl text-blue-200 text-center pb-5'>Connection Request</h1>

            {requests && requests.map((req) =>
               <ul key={req._id} className="list  rounded-box shadow-md">

                <li className="list-row mb-2 bg-base-300">
                   {req.photoUrl && <div><img className="size-10 rounded-box" src={req.photoUrl} /></div>}  
                    <div>
                        <div className='font-bold opacity-70 '>{req.firstName +" "+ req.lastName}</div>
                      {req.age && req.gender && <div className="text-xs  font-semibold opacity-60 uppercase">{req.age +", " + req.gender}</div>}  
                    </div>
                    <p className="list-col-wrap font-sans opacity-70 text-[14px]">
                        {req.about}
                    </p>
                    <button className="btn btn-primary">
                        Accept
                    </button>
                    <button className="btn btn-secondary">
                        Reject
                    </button>
                </li>



            </ul>
            )}
           

        </div>
    )
}

export default Request