import { Route, Routes } from "react-router-dom"

import Landingpage from "../pages/Landingpage"
import Get from "../pages/Get"
import SignupforBuyer from "../pages/SignupforBuyer"
import SignupResurant from "../pages/SignupResurant"
import SignupforRiders from "../pages/SignupforRiders"
import Signin from "../pages/Signin"
import Dashboard from "../pages/Dashboard"




function App() {


  return (
    <>
      <Routes> 
        <Route path="/" element={<Landingpage />} />
        <Route path="/Get" element={<Get />} />
        <Route path="/signup" element={<SignupforBuyer/>} />
        <Route path="/resturant" element={<SignupResurant/>} />
          <Route path="/Riders" element={<SignupforRiders/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>


    </>
  )
}

export default App
