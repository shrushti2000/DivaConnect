import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addCommentService,
  deleteCommentService,
  editCommentService,
} from "../Services/commentService";
import {
  addPostService,
  deleteUserPostService,
  dislikePostService,
  editPostService,
  getAllPostService,
  getUserPostService,
  likePostService,
} from "../Services/postService";

const initialState = {
  allPosts: [],
  userPosts: [],
  postToBeEdited: {},
};
export const setPostToBeEdited = createAsyncThunk(
  "post/postToBeEdited",
  async (post, thunkAPI) => {
    return { ...post };
  }
);

export const getAllPosts = createAsyncThunk(
  "post/getAllPosts",
  async (_, thunkAPI) => {
    try {
      const response = await getAllPostService();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserPost = createAsyncThunk(
  "post/getUserPost",
  async (username, thunkAPI) => {
    try {
      const response = await getUserPostService(username);
      console.log(response);
      return response.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editUserPost = createAsyncThunk(
  "post/editUserPost",
  async (postData, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await editPostService(postData, token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteUserPost = createAsyncThunk(
  "post/deleteUserPost",
  async (postId, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await deleteUserPostService(postId, token);
      return response.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addUserPost = createAsyncThunk(
  "post/addUserPost",
  async (postData, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await addPostService(postData, token);
      return response.data.posts;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const likeAndDislikePost = createAsyncThunk(
  "post/likeAndDislikePost",
  async ({ postId, isLike }, thunkAPI) => {
    try {
      console.log("likedd");
      const token = localStorage.getItem("token");
      const response = isLike
        ? await likePostService(postId, token)
        : await dislikePostService(postId, token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addComment = createAsyncThunk(
  "post/addComment",
  async ({ postId, commentData }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await addCommentService(postId, commentData, token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteComment = createAsyncThunk(
  "post/deleteComment",
  async ({ postId, commentId }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const response = await deleteCommentService(postId, commentId, token);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const editComment = createAsyncThunk(
  "post/editComment",
  async ({ postId, commentId, commentData }, thunkAPI) => {
    try {
      console.log("edit postslice");
      const token = localStorage.getItem("token");
      const response = await editCommentService(
        postId,
        commentId,
        commentData,
        token
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [setPostToBeEdited.pending]: (state, action) => {
      state.postStatus = "pending";
    },
    [setPostToBeEdited.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.postToBeEdited = action.payload;
    },
    [setPostToBeEdited.rejected]: (state, action) => {
      state.postStatus = "rejected";
    },
    [getAllPosts.pending]: (state) => {
      state.postStatus = "pending";
    },
    [getAllPosts.fulfilled]: (state, action) => {
      postSlice.postStatus = "fulfilled";
      state.allPosts = action.payload;
    },
    [getAllPosts.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
    [getUserPost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [getUserPost.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.userPosts = action.payload;
    },
    [getUserPost.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.userPosts = action.payload;
    },
    [addUserPost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [addUserPost.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload;
    },
    [addUserPost.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
    [editUserPost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [editUserPost.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload.posts;
    },
    [editUserPost.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
    [deleteUserPost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [deleteUserPost.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload.posts;
    },
    [deleteUserPost.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
    [likeAndDislikePost.pending]: (state) => {
      state.postStatus = "pending";
    },
    [likeAndDislikePost.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload.posts;
    },
    [likeAndDislikePost.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
    [addComment.pending]: (state) => {
      state.postStatus = "pending";
    },
    [addComment.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload.posts;
    },
    [addComment.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
    [deleteComment.pending]: (state) => {
      state.postStatus = "pending";
    },
    [deleteComment.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload.posts;
    },
    [deleteComment.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
    [editComment.pending]: (state) => {
      state.postStatus = "pending";
    },
    [editComment.fulfilled]: (state, action) => {
      state.postStatus = "fulfilled";
      state.allPosts = action.payload.posts;
    },
    [editComment.rejected]: (state, action) => {
      state.postStatus = "rejected";
      state.allPosts = action.payload;
    },
  },
});
export default postSlice.reducer;
