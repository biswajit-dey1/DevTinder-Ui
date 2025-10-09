import axios from 'axios'
import React from 'react'
import { BASE_URL } from '../utils/constant'
import { useDispatch } from 'react-redux'
import { removeUserFromFeed } from '../Store/feedSlice'

const UserCard = ({ user }) => {

    const dispatch = useDispatch()
    const { _id, firstName, lastName, photoUrl, age, gender, about } = user


    const handleSendRequest = async (status, userId) => {
        try {
            await axios.post(BASE_URL + "/request/send/" + status + "/" + userId, {

            }, {
                withCredentials: true
            })

            dispatch(removeUserFromFeed(_id))

        } catch (error) {
            console.log(error)
        }

    }



    return (
        <div className="card bg-base-300 w-96 max-h-[510px] shadow-sm  mx-auto my-8 text-gray-400">
            <figure>
                <img
                    className='w-[370px] h-[300px] rounded-lg object-fill'
                    src={photoUrl}
                    alt="user" />
            </figure>
            <div className="card-body gap-0">
                <h2 className="card-title gap-0 text-blue-200 font-semibold">{firstName + " " + lastName}</h2>
                {age && gender && <p>{age + ", " + gender}</p>}
                <p>{about}</p>
                <div className="card-actions justify-center mt-2">
                    <button className="btn btn-primary mx-2" onClick={() => handleSendRequest("ignored", _id)}>Ignore</button>
                    <button className="btn btn-secondary mx-2" onClick={() => handleSendRequest("interested", _id)}>Interested</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard