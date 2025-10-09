import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addConnection } from '../Store/connectionSlice'

const Connection = () => {
    
    const connections = useSelector(store => store.connection)
    const dispatch = useDispatch()

    const fetchConnection = async () =>{
        if(connections) return
       const res = await axios.get(BASE_URL + "/user/connections",{
        withCredentials:true
       })
       dispatch(addConnection(res.data.connection))
       console.log(res.data.connection)

    }

 useEffect(()=>{
    fetchConnection()
 },[])

    if (!connections) 
      return <h1 className='text-center my-10'>Loading Connections...</h1>;

   if(connections.length === 0)
      return <h1 className='text-center my-10'>No Connection Found</h1>

  return (
     <div className='mx-64 mt-8 mb-2'>
            <h1 className='font-semibold text-xl text-blue-200 text-center pb-5'>Connection </h1>

            {connections && connections.map((connect) =>
               <ul key={connect._id} className="list  rounded-box shadow-md">

                <li className="list-row mb-2 bg-base-300">
                   {connect.photoUrl && <div><img className="size-10 rounded-box" src={connect.photoUrl} /></div>}  
                    <div>
                        <div className='font-bold opacity-70 '>{connect.firstName +" "+ connect.lastName}</div>
                      {connect.age && connect.gender && <div className="text-xs  font-semibold opacity-60 uppercase">{connect.age +", " + connect.gender}</div>}  
                    </div>
                    <p className="list-col-wrap font-sans opacity-70 text-[14px]">
                        {connect.about}
                    </p>
                   
                </li>



            </ul>
            )}
           

        </div>
   
  )
}

export default Connection