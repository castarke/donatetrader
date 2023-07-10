import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutations';
import backgroundImg from './signup_pic.jpg';

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
  const [signupMutation, { loading }] = useMutation(SIGNUP_USER);

  const [errors, setErrors] = useState({});

  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
        signupMutation({ variables: formData })
        .then((res) => {
          console.log('User signed up successfully:', res.data);
          // Perform any necessary actions after successful signup
        })
        .catch((error) => {
          console.error('Signup error:', error.message);
          // Handle signup error or display error message to the user
        });
    } else {
      setErrors(validationErrors);
    }
  };

  const validateForm = (formData) => {
    const errors = {};

    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

return(
    <div style={styles.background}>
      <div style={styles.container}>
        <h1>Signup Page</h1>
        <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Signing up...' : 'Signup'}
        </button>
      </form>
    </div>
    </div>
  );
};

const styles = {
  background: {
    backgroundColor: '#dcdcdc',
    backgroundImage: `url(${backgroundImg})`, // Set the background image
    backgroundSize: 'cover', // Adjust the background size
    backgroundRepeat: 'no-repeat', // Prevent repeating the image
    backgroundPosition: 'center', // Center the background image
    minHeight: '80vh', // Set a minimum height to cover the entire viewport
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    maxWidth: '300px',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid teal',
    borderRadius: '4px',
  },
  button: {
    padding: '10px 20px',
    background: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default Signup;