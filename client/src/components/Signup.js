import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import { useStyles } from '../utils/makeStyles';

function Signup({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    city: '',
    state: '',
    zip: '',
  });

  const classes = useStyles();

  const [signupMutation, { loading, error }] = useMutation(SIGNUP_USER);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signupMutation({ variables: formData })
      .then((res) => {
        const token = res.data.signup.token;
        Auth.login(token);
        setIsLoggedIn(true); // Set isLoggedIn to true
        console.log('User signed up successfully:', res.data);
      })
      .catch((error) => {
        console.error('Signup error:', error.message);
      });
  };

  return (
    <div className={classes.signupBackground}>
    <div className={classes.signupContainer}>
    <h2 className={classes.signupHeading}>Let's Donate or Trade!</h2>
      <form className={classes.signupForm} onSubmit={handleSubmit}>
        <input
          className={classes.signupInput}
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />

        <input
          className={classes.signupInput}
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          className={classes.signupInput}
          type="password"
          name="password"
          placeholder="Create Password"
          value={formData.password}
          onChange={handleChange}
        />

        <input
          className={classes.signupInput}
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
        />

        <input
          className={classes.signupInput}
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
        />

        <input
          className={classes.signupInput}
          type="number"
          name="zip"
          placeholder="Zip code"
          value={formData.zip}
          onChange={handleChange}
        />

        <button
          className={classes.submitButton}
          disabled={loading}
        >
          {loading ? 'Signing up...' : 'Submit'}
        </button>

        {error && <p>Error occurred. Please try again.</p>}
      </form>
    </div>
  </div>
);
}
export default Signup;
