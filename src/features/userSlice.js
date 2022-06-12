import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { followUserService, getAllUserService, unfollowUserService } from "../Services/userService";
import { updateUser } from "./authenticationSlice";

const initialState = {
  allUsers: [],
  userStatus: "",
  notFllowing: [],
};

export const getAllUser = createAsyncThunk(
  "post/getAllUser",
  async (_, thunkAPI) => {
    try {
      const response = await getAllUserService();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const followUnfollowUser = createAsyncThunk(
  "post/followUnfollowUser",
  async ({ userId, dispatch, isFollow }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = isFollow
        ? await followUserService(token, userId)
        : await unfollowUserService(token, userId);
      dispatch(updateUser(response.data.user));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllUser.pending]: (state) => {
      state.userStatus = "pending";
    },
    [getAllUser.fulfilled]: (state, action) => {
      state.userStatus = "fulfilled";
      state.allUsers = action.payload.users;
    },
    [getAllUser.rejected]: (state, action) => {
      state.userStatus = "rejected";
      state.allUsers = action.payload;
    },
    [followUnfollowUser.pending]: (state) => {
      state.userStatus = "pending";
    },
    [followUnfollowUser.fulfilled]: (state, action) => {
      state.userStatus = "fulfilled";
      state.allUsers = [...state.allUsers].map((user) => {
        if (action.payload.followUser.username === user.username) {
          return action.payload.followUser;
        }
        return user;
      });
    },
    [followUnfollowUser.rejected]: (state, action) => {
      state.userStatus = "rejected";
      state.allUsers = action.payload;
    },
  },
});

export default userSlice.reducer;
