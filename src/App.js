import { Spinner } from "@chakra-ui/react";
import React, { Suspense, lazy , Profiler, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { getAllBokmarkedPosts, getAllPosts, getUserPost } from "./features/postSlice";
import { getAllUser } from "./features/userSlice";
import logo from "./logo.png";
// import { ExplorePage, FeedPage, UserProfile } from "./pages";
// import { BookmarkPage } from "./pages/BookmarkPage/BookmarkPage";
//  import { Landingpage } from "./pages/Landingpage/Landingpage";
// import { Signin } from "./pages/Signin/Signin";
// import { Signup } from "./pages/Signup/Signup";
// import { SuggestedUserProfile } from "./pages/SuggestedUserProfile/SuggestedUserProfile";

const Landingpage=lazy(()=>import ("./pages/Landingpage/Landingpage"))
const Signin=lazy(()=>import ("./pages/Signin/Signin"))
const Signup=lazy(()=>import ("./pages/Signup/Signup"))
const FeedPage=lazy(()=>import ("./pages/FeedPage/FeedPage"))
const ExplorePage=lazy(()=>import ("./pages/ExplorePage/ExplorePage"))
const BookmarkPage=lazy(()=>import ("./pages/BookmarkPage/BookmarkPage"))
const SuggestedUserProfile=lazy(()=>import ("./pages/SuggestedUserProfile/SuggestedUserProfile"))
const UserProfile=lazy(()=>import ("./pages/UserProfile/UserProfile"))

function App() {
  const { token } = useSelector((state) => state.authentication);
  const dispatch=useDispatch()
  const {allUsers}=useSelector(state=>state.user)
  const {allPosts}=useSelector(state=>state.post)
  const {user}=useSelector(state=>state.authentication)
  useEffect(()=>{
    if(token){
      dispatch(getAllUser())
      dispatch(getAllPosts())
      dispatch(getAllBokmarkedPosts())
     dispatch(getUserPost(user.username))
    }
    
    
  },[token])
  return (
    <>
  
      <BrowserRouter>
      <Suspense fallback={<Spinner
  thickness='10px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='5xl'
/>}> 
        <Routes>
         
          <Route path="/" element={<Landingpage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feedpage" element={<FeedPage />} />
          <Route path="/profile" element={<UserProfile/>}/>
          <Route path="/bookmark" element={<BookmarkPage/>}/>
          <Route path="/explore" element={<ExplorePage/>}/>
          <Route path="/user-profile/:username" element={<SuggestedUserProfile/>}/>
          </Routes>
          </Suspense>
      </BrowserRouter>
         
         
          
      
    </>
  );
}
export default App;
