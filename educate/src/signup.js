import React from 'react'
import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom'

const Signup = () => {
    const [username,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [repeatPassword,setRepeatPassword]=useState('')
    let navigate=useNavigate()
    const onSubmit=async(e)=>{
        e.preventDefault()
       const data= await fetch(`http://localhost:8080/user`,{
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({username:username,email:email,password:password})
        })
      const jsonData=await data.json();
      localStorage.setItem("jwtToken",jsonData.token);
      navigate("/home")
    }
  return (
    <section className="vh-75 bg-image">
    <div className="mask d-flex align-items-center h-100 gradient-custom-3">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-9 col-lg-3 col-xl-6">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Sign up</h2>
  
                <form  onSubmit={onSubmit}>
  
                  <div className="form-outline mb-4">
                    <input type="text" id="form3Example1cg" className="form-control form-control-lg" value={username} onChange={(e)=>setUserName(e.target.value)} placeholder="user name"/>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="email" id="form3Example3cg" className="form-control form-control-lg" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="enter your email"/>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4cg" className="form-control form-control-lg" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="enter the password"/>
                  </div>
  
                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4cdg" className="form-control form-control-lg" value={repeatPassword} onChange={(e)=>setRepeatPassword(e.target.value)} placeholder="repeat your password"/>
                  </div>
  
                  <div className="form-check d-flex justify-content-center mb-5">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                    <label className="form-check-label">
                      I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                    </label>
                  </div>
  
                  <div className="d-flex justify-content-center">
                    <button type="submit"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                  </div>
  
                  <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login"><span 
                      className="fw-bold text-body"><u>Login here</u></span></Link></p>
  
                </form>
  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Signup