import React from 'react'

const UserCard = ({ user }) => {

    const { _id, firstName, lastName, photoUrl, age, gender, about } = user
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
                    <button className="btn btn-primary mx-2">Ignore</button>
                    <button className="btn btn-secondary mx-2">Interested</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard