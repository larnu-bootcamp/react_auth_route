import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import './LoginForm.css';
import { useNavigate } from "react-router-dom";

export default function LoginForm () {

  const { signin } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    email: "jose@larnu.com",
    discordId: "310544245155168256"
  });

  const handleChange = (event) => {
    setValues((prevValues) => ({
      ...prevValues,
      [event.target.name]: event.target.value
    }));
  }

  function submit(e) {
    e.preventDefault();
    setLoading(true);
    signin(values, () => {
      setLoading(false);
      navigate("/");
    });
  }

  return (
    <form className='form' onSubmit={submit}>
      <h1>Sign in to Discord </h1>
      <div className="container">
        <label>Email</label>
        <input 
          type="email"
          name='email'
          value={values.email || ''}
          onChange={handleChange}
          placeholder='email'
          required
        />
      </div>
      <div className="container">
        <label>Discord Id</label>
        <input 
          type="text"
          name='discordId'
          value={values.discordId || ''}
          onChange={handleChange}
          placeholder='Discord Id'
          required
        />
      </div>
      { loading ? <div>loading</div> : <button type="submit">Login</button> }
    </form>
  );

}