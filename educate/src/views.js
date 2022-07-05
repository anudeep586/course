import React from 'react'
import { Routes, Route} from "react-router-dom"
import Course from './course'
import Home from './home'
import Login from './login'
import Signup from './signup'


const Views = () => {
  
  return (
    <Routes>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/login" element={<Login />}/>

      <Route path="/home" element={<Home />} />
      <Route path="home/course">
        <Route path=":id" element={<Course/>}/>
      </Route>

    <Route path="/post">
      <Route path=":id" element={<Course/>} />
    </Route>
    <Route path="*" element={<div>404 Not Found</div>}/>
    </Routes>
  )
}

export default Views