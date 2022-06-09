import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserPost } from '../../features/postSlice'

const SuggestedUserProfile = () => {
    const {username}=useParams()
    const {user}=useSelector(state=>state.authentication)
    const {allUsers}=useSelector(state=>state.user)
    const {allPosts,userPosts}=useSelector(state=>state.post)
    const [singleUser,setSingleUser]=useState({})
    useEffect(()=>{
        setSingleUser(allUsers.find((user)=>user.username===username))
    },[allUsers,username])
    useEffect(()=>{
        getUserPost(singleUser?.username)
    },[singleUser,allPosts])
  return (
    singleUser?.username ? (
        <></>
    ):<></>
  )
}

export default SuggestedUserProfile