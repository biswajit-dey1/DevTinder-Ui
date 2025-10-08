import React, { useState } from 'react'
import UserCard from './UserCard';
import axios from 'axios';
import { BASE_URL } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addUser } from '../Store/userSlice';

const EditProfile = ({ user }) => {

    const [firstName, setFirstName] = useState(user.firstName || "")
    const [lastName, setlastName] = useState(user.lastName || "")
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [age, setAge] = useState(user.age || "")
    const [gender, setGender] = useState(user.gender || "")
    const [about, setAbout] = useState(user.about || "")
    const [showToast, setShowToast] = useState(false)
    const dispatch = useDispatch()

    const saveprofile = async () => {



        const res = await axios.patch(BASE_URL + "/profile/update-profile", {
            firstName,
            lastName,
            photoUrl,
            age,
            gender,
            about
        }, {
            withCredentials: true
        })
        dispatch(addUser(res.data.data))

        setShowToast(true)

    }

    setTimeout(() => {
        setShowToast(false)
    }, 3000)



    return (
        <div>
            <div className='flex ml-52 my-2'>

                <div className="card bg-base-300 w-[400px]  shadow-sm ">

                    <div className="card-body ">
                        <h2 className="card-title text-2xl text-blue-200">Edit Profile</h2>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-[16px] text-gray-400">FirstName</legend>

                            <input type="text" className="input" placeholder="Enter your FirstName" value={firstName} onChange={(e) => {
                                setFirstName(e.target.value)
                            }} />

                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-[16px] text-gray-400">LastName</legend>

                            <input type="text" className="input" value={lastName} placeholder="Enter your lastName"
                                onChange={(e) => {
                                    setlastName(e.target.value)
                                }}
                            />

                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-[16px] text-gray-400">PhotoUrl</legend>

                            <input type="text" className="input" value={photoUrl} placeholder="Enter your photoUrl"
                                onChange={(e) => {
                                    setPhotoUrl(e.target.value)
                                }}
                            />

                        </fieldset>


                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-[16px] text-gray-400">Age</legend>

                            <input type="text" className="input" value={age} placeholder="Enter your age"
                                onChange={(e) => {
                                    setAge(e.target.value)
                                }}
                            />

                        </fieldset>


                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-[16px] text-gray-400">gender</legend>

                            <input type="text" className="input" value={gender} placeholder="Enter your gender"
                                onChange={(e) => {
                                    setGender(e.target.value)
                                }}
                            />

                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">About</legend>
                            <textarea className="textarea h-24"
                                value={about}
                                onChange={(e) => {
                                    setAbout(e.target.value)
                                }}
                                placeholder="about"></textarea>

                        </fieldset>




                        <div className="card-actions justify-center mt-7">

                            <button
                                className="btn btn-secondary"
                                onClick={saveprofile}
                            >Save Profile</button>
                        </div>
                    </div>
                </div>


                <UserCard user={{ firstName, lastName, photoUrl, age, gender, about }} />

            </div>

            {showToast && <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span> Profile updated successfully</span>
                </div>
            </div>

            }

        </div>
    )
}

export default EditProfile