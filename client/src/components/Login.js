import React from 'react';
import { useState } from 'react';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import {useStyles} from '../utils/makeStyles';
import { useNavigate } from 'react-router-dom'


function Login({ setIsLoggedIn }) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [loginUser, { loading, error }] = useMutation(LOGIN_USER);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUser({ variables: formData })
      .then((res) => {
        const token = res.data.loginUser.token;
        Auth.login(token);
        setIsLoggedIn(true); // Set isLoggedIn to true
        console.log('User logged in successfully:', res.data);
        navigate('/home');
      })
      .catch((error) => {
        console.error('Login error:', error.message);
      });
  };

  return (
    <div className={classes.loginBackground}>
      <div className={classes.loginContainer}>
        <div className={classes.loginContent}>
        <h2 className={classes.loginHeading}>Login Page</h2>
          <form onSubmit={handleSubmit} className={classes.loginForm}>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={classes.loginInput}
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={classes.loginInput}
              placeholder="Password"
            />
            <button type="submit" disabled={loading} className={classes.loginButton}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          {error && <p>{error.message}</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;