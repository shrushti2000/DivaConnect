import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { loginUserService, signupUserService } from '../Services/authService'
import { updateUserService } from "../Services/userService"

const initialState={
    token:localStorage.getItem("token") ?? "",
    user:JSON.parse(localStorage.getItem("user")) ?? {}
}

export const loginUser=createAsyncThunk(
    "auth/loginUser",
    async({username,password},thunkAPI)=>{
        try{
            const response=await loginUserService(username,password)
            return response.data
        }catch(error){
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const signupUser=createAsyncThunk(
    "auth/signupUser",
    async({username,password,firstName,lastName},thunkAPI)=>{
        try{
            const response=await signupUserService(username,password,firstName,lastName)
            return response.data
        }catch(error){
            return thunkAPI.rejectWithValue(error)
        }
    }
)

export const updateUser=createAsyncThunk("auth/updateUser",async(userData,thunkAPI)=>{
    try{
        const token=localStorage.getItem('token')
        const response=await updateUserService(token,userData)
        return response.data.user;
    }catch(error){
        return thunkAPI.rejectWithValue(error)
    }
})

const authenticationSlice=createSlice({
    name:"authentication",
    initialState,
    reducers:{
        logoutUser:()=>{
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            return{
                user:null,
                token:null
            }
        }
    },
    extraReducers:{
        [loginUser.pending]:(state)=>{
            state.authStatus="pending";
        },
        [loginUser.fulfilled]:(state,action)=>{
                state.authStatus="fulfilled";
                state.token=action.payload.encodedToken;
                state.user=action.payload.foundUser;
                localStorage.setItem('token',state.token);
                localStorage.setItem('user',JSON.stringify(state.user))
        },
        [loginUser.rejected]:(state,action)=>{
            state.authStatus="Error";
            state.error=action.payload
        },
        [signupUser.pending]:(state)=>{
            state.authStatus="pending"
        },
        [signupUser.fulfilled]:(state,action)=>{
            state.authStatus="fulfilled";
            state.token=action.payload.encodedToken;
            state.user=action.payload.createdUser;
            localStorage.setItem('token',state.token);
            localStorage.setItem('user',JSON.stringify(state.user))
        },
        [signupUser.rejected]:(state,action)=>{
            state.authStatus="error";
            state.error=action.payload;
        },
        [updateUser.pending]:(state)=>{
            state.authStatus="pending"
        },
        [updateUser.fulfilled]:(state,action)=>{
            state.authStatus="fulfilled";
            state.user=action.payload;
            localStorage.setItem('user',JSON.stringify(state.user))
        },
        [updateUser.rejected]:(state,action)=>{
            state.authStatus="error";
            state.error=action.payload;
        }
    }
})

export const {logoutUser} =authenticationSlice.actions;
export default authenticationSlice.reducer;