import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest, removeUserFromRuquest } from '../Store/requestSlice'
import { addFeed } from '../Store/feedSlice'

const Request = () => {

  const dispatch = useDispatch()
  const requests = useSelector(store => store.request)

  const handleReviewRequest = async (status, requestId) => {

    const res = await axios.post(BASE_URL + "/request/review/" + status + "/" + requestId, {}, {
      withCredentials: true
    })

    dispatch(removeUserFromRuquest(requestId))
    dispatch(addFeed(res.data.data.fromUserId))

    console.log(res.data.data.fromUserId)
  }


  const pendingRequest = async () => {

    if (requests) return
    const res = await axios.get(BASE_URL + "/user/requests/received", {
      withCredentials: true
    })

    dispatch(addRequest(res.data.pendingRequest))


  }

  useEffect(() => {
    pendingRequest()
  }, [])

  if (!requests)
    return <h1 className='text-center my-10'>Loading requests...</h1>;

  if (requests.length === 0)
    return <h1 className='text-center my-10'>No Request Found</h1>


  return (

    <div className='mx-64 mt-8 mb-2'>
      <h1 className='font-semibold text-xl text-blue-200 text-center pb-5'>Connection Request</h1>

      {requests && requests.map((req) => {

        const { _id, firstName, lastName, photoUrl, age, gender, about } = req.fromUserId;

        return (

          <ul key={_id} className="list  rounded-box shadow-md">

            <li className="list-row mb-2 bg-base-300">
              {photoUrl && <div><img className="size-10 rounded-box" src={photoUrl} /></div>}
              <div>
                <div className='font-bold opacity-70 '>{firstName + " " + lastName}</div>
                {req.age && req.gender && <div className="text-xs  font-semibold opacity-60 uppercase">{age + ", " + gender}</div>}
              </div>
              <p className="list-col-wrap font-sans opacity-70 text-[14px]">
                {about}
              </p>
              <button className="btn btn-primary" onClick={() => handleReviewRequest("accepted", req._id)}>
                Accept
              </button>
              <button className="btn btn-secondary" onClick={() => handleReviewRequest("rejected", req._id)}>
                Reject
              </button>
            </li>



          </ul>
        )
      })}


    </div>
  )
}

export default Request