import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function Login(logData) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  function verification() {
    e.preventDefault();
    //console.log(logData.email);

    if (logData.email === email) {
      if (logData.password === password) {
        alert("Login Successful, navigate to dashboard.");
        navigate('/dashboard');
      } else {
        alert("Password is incorrect.");
      }
    } 
    else {
      alert("Email is not registered.");
    }

    //alert("Hi! "+email+" your password is "+password);
  }

  return (
    <div>
      <h2>Login Form</h2>

      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" onClick={verification} class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Login