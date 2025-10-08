import React from 'react'

const UserCard = ({user}) => {

    const {_id, firstName, lastName, photoUrl, age, gender, about} = user
    return (
        <div className="card bg-base-300 w-96 shadow-sm  mx-auto my-10">
            <figure>
                <img
                 className='w-72 h-[270px] rounded-lg'
                    src={photoUrl}
                    alt="user" />
            </figure>
            <div className="card-body gap-1">
                <h2 className="card-title text-blue-200 font-semibold">{firstName +" " + lastName}</h2>
                 {age && gender && <p>{age +", " +gender}</p>}
                 <p>{about}</p>
                <div className="card-actions justify-center mt-2">
                    <button className="btn btn-primary mx-2">Ignore</button>
                    <button className="btn btn-secondary mx-2">Accept</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard