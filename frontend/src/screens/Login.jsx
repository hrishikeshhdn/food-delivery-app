import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/loginuser", {
        email: credentials.email,
        password: credentials.password
      });

      const json = response.data;
      console.log(json);

      if (!json.success) {
        alert("Enter valid Credentials");
      } else {
        localStorage.setItem("authToken", json.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className='container'>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1" />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
          <Link to="/creatuser" className='m-3 btn btn-danger'>I'm a new User</Link>
        </form>
      </div>
    </>
  );
}
