import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutations';
import backgroundImg from './signup_pic.jpg';
import Auth from '../utils/auth';
import useStyles from '../utils/styles';
function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
  
  const classes = useStyles();
  const [signupMutation, { loading,error}] = useMutation(SIGNUP_USER);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signupMutation({ variables: formData })
      .then((res) => {
        console.log('User signed up successfully:', res.data);
        // Perform any necessary actions after successful signup
      })
      .catch((error) => {
        console.error('Signup error:', error.message);
        // Handle signup error or display error message to the user
      });
  };

  return (
    <div>
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        {/* Input fields for username, email, and password */}
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Signup'}
        </button>
      </form>
      {error && <p>{error.message}</p>}
    </div>
  );
}

export default Signup;