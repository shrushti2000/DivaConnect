import axios from "axios"

export const getAllUserService=()=>axios.get("/api/users") 

export const updateUserService=(token,userData)=>
 axios.post("/api/users/edit",{userData},{
    headers:{
        authorization:token
    }
})


export const followUserService=(token,userId)=>
     axios.post(`/api/users/follow/${userId}`,{},{
        headers:{
            authorization:token
        }
    })

export const unfollowUserService=(token,userId)=>
     axios.post(`/api/users/unfollow/${userId}`,{},{
        headers:{
            authorization:token
        }
    })
