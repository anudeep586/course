import React,{ useState } from 'react'
import  {Link, useNavigate} from 'react-router-dom'

const Login = () => {
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    let navigate=useNavigate()
    const onSubmit=async(e)=>{
        e.preventDefault()
        const data= await fetch(`http://localhost:8080/login`,{
          method:"POST",
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify({email:email,password:password})
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
          <div className="col-12 col-md-5 col-lg-3 col-xl-6">
            <div className="card">
              <div className="card-body p-5">
                <h2 className="text-uppercase text-center mb-5">Sign in</h2>
  
                <form  onSubmit={onSubmit}>
  
                  <div className="form-outline mb-3">
                    <input type="email" id="form3Example3cg" className="form-control form-control-lg" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email"/>
                  </div>
  
                  <div className="form-outline mb-3">
                    <input type="password" id="form3Example4cg" className="form-control form-control-lg" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password"/>
                  </div>
  
  
                  <div className="d-flex justify-content-center">
                    <button type="submit"
                      className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Login</button>
                  </div>
  
                  <p className="text-center text-muted mt-5 mb-0">Not have an account? <Link to="/signup"><p 
                      className="fw-bold text-body"><u>signup here</u></p></Link></p>
  
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

export default Login