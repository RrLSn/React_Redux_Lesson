import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { fetchUserError, fetchUserRequest, fetchUserSuccess } from '../user/userAction'

const UserContainer = () => {

    const dispatch = useDispatch()
    const usersState = useSelector(state => state)

    const fetchUser = () => {
        dispatch(fetchUserRequest())
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                const usersData = res.data
                dispatch(fetchUserSuccess(usersData))
            }) 
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUserError(errorMsg))
            })
    }

    useEffect(() => {
        fetchUser()
    },[])

  return (
    <div className='w-full h-full flex justify-center items-center'>
        {
            usersState.loading ? (
                <h2>Loading...</h2>
              ) : usersState.error ? (
                <p>{usersState.error}</p>
              ) : (
                <div className='text-center'>
                    <h1 className='text-3xl font-bold mb-5 italic'>User List</h1>

                    <div className='flex flex-wrap gap-10 justify-center'>
                        {
                            usersState.users && usersState.users.map((user) => (
                                <div className='w-[20rem] h-[25vh] border flex flex-col p-2 justify-center items-center rounded-md'>
                                    <h1 className='text-2xl font-bold'>{user.name}</h1>
                                    <p className='italic font-bold'>{user.email}</p>
                                    <p>Address: {user.address.suite} {user.address.street}, {user.address.city} {user.address.zipcode}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default UserContainer