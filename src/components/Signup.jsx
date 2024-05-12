import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const Signup = (props) => {

    const history = useHistory();

    const onClick = ()=>{
        history.push("/login");
    };

    const [credentials, setCredentials] = useState({name:"", email:"", password:""});
    const {name, email, password} = credentials;

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value});
    };


    // ------------------------- API Call For Signing Up Account ------------------------- >
    const onSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch("https://cloud-book-backend-eta.vercel.app/api/auth/createuser", {
            method : "POST",
            headers : {
                "Content-Type":"application/json"
            },
            body : JSON.stringify({name, email, password})
        });

        const json = await response.json();
        // console.log(json);

        if(json.success){
            localStorage.setItem("token", json.authToken);
            history.push('/login');
            props.showAlert("SignUp SuccessFul, Login now Please", "info");
        } else {
            props.showAlert("Email already exists, Please try a different email", "danger");
         }
    };



  return (
    <div className='container mt-5'>
        <h1>SignUp Here</h1>
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input onChange={onChange} type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" minLength={3} />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input onChange={onChange} type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" minLength={5} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input onChange={onChange} type="password" className="form-control" name='password' id="password" />
            </div>
            <button type="submit" className="btn btn-primary">SignUp</button>
            <br />
            <br />
            <code style={{cursor: 'pointer'}} onClick={onClick}>Already have an account? Login here.</code>
        </form>

    </div>
  )
}

export default Signup
