import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Login = (props) => {


    const history = useHistory();

    const onClick = ()=>{
        history.push("/signup");
    };


    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]:e.target.value});
    };
    
    const [credentials, setCredentials] = useState({email:"", password:""});
    const {email, password} = credentials;


    // ------------------------- API Call For Logging In Account ------------------------- >
    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://cloud-book-backend-eta.vercel.app/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({email, password})
        });

        const json = await response.json();
        // console.log(json)

        if(json.success){
            localStorage.setItem("token", json.authToken);
            history.push('/')
            props.showAlert("Login Successfull", "success");
        } else {
            props.showAlert("Invalid Credentials, please try again", "danger");
        }
    };


  return (
    <div className='container mt-5'>
    
        <h1>Welcome! Please login.</h1>
       <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input onChange={onChange} type="email" className="form-control" name='email' id="email" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input onChange={onChange} type="password" className="form-control" name='password' id="password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <br />
            <br />
            <code style={{cursor: 'pointer'}} onClick={onClick}>Don't have an account? SignUp here.</code>
        </form>

    </div>
  )
}

export default Login
