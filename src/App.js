import { Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  getAllBokmarkedPosts,
  getAllPosts,
  getUserPost,
} from "./features/postSlice";
import { getAllUser } from "./features/userSlice";
import { ExplorePage, FeedPage, UserProfile } from "./pages";
import { BookmarkPage } from "./pages/BookmarkPage/BookmarkPage";
import { Landingpage } from "./pages/Landingpage/Landingpage";
import { Signin } from "./pages/Signin/Signin";
import { Signup } from "./pages/Signup/Signup";
import { SuggestedUserProfile } from "./pages/SuggestedUserProfile/SuggestedUserProfile";

function App() {
  const { token } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authentication);
  useEffect(() => {
    if (token) {
      dispatch(getAllUser());
      dispatch(getAllPosts());
      dispatch(getAllBokmarkedPosts());
      dispatch(getUserPost(user.username));
    }
  }, [token]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feedpage" element={<FeedPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/bookmark" element={<BookmarkPage />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route
            path="/user-profile/:username"
            element={<SuggestedUserProfile />}
          />
          <Route
            path="*"
            element={
              <>
                <Text fontSize="4xl" m="20px" textAlign="center">
                  Sorry! No page found
                </Text>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
