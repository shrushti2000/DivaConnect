import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components";
import { getAllPosts, getUserPost } from "./features/postSlice";
import { getAllUser } from "./features/userSlice";
import logo from "./logo.png";
import { FeedPage } from "./pages";
import { Landingpage } from "./pages/Landingpage/Landingpage";
import { Signin } from "./pages/Signin/Signin";
import { Signup } from "./pages/Signup/Signup";
function App() {
  const { token ,user} = useSelector((state) => state.authentication);
  const dispatch=useDispatch()
  const {allUsers}=useSelector(state=>state.user)
  const {allPosts,userPosts}=useSelector(state=>state.post)
 
  useEffect(()=>{
    if(token){
      dispatch(getAllUser())
      dispatch(getAllPosts())
      dispatch(getUserPost(user.username))
    }
    
    
  },[token,allPosts])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feedpage" element={<FeedPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
