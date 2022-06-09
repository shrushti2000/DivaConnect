import { Profiler, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { getAllPosts, getUserPost } from "./features/postSlice";
import { getAllUser } from "./features/userSlice";
import logo from "./logo.png";
import { FeedPage, UserProfile } from "./pages";
import { Landingpage } from "./pages/Landingpage/Landingpage";
import { Signin } from "./pages/Signin/Signin";
import { Signup } from "./pages/Signup/Signup";
import { SuggestedUserProfile } from "./pages/SuggestedUserProfile/SuggestedUserProfile";
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
      dispatch(getUserPost(user.username));
    }
    
    
  },[token])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feedpage" element={<FeedPage />} />
          <Route path="/profile" element={<UserProfile/>}/>
          <Route path="/user-profile/:username" element={<SuggestedUserProfile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
