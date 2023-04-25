import { Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import Home from "./views/Home";
import DefualtPage from "./views/DefualtPage";
import Profile from "./views/Profile";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile/:id" element={<Profile/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="*" element={<DefualtPage/>}/>
      </Routes>
    </>
  );
}

export default App;
