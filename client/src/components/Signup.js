import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import useStyles from '../utils/styles';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    city: '',
    state: '',
    zip: "",
  });

  const styles = useStyles();

  const [signupMutation, { loading, error }] = useMutation(SIGNUP_USER);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

console.log(formData)
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
    <div className={styles.background}>
      <div className={styles.container}>
        <h2>Sign Up</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />

          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
          />

          <input
            className={styles.input}
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />

          <input
            className={styles.input}
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
          />

          <input
            className={styles.input}
            type="number"
            name="zip"
            placeholder="Zip code"
            value={formData.zip}
            onChange={handleChange}
          />

          <button
            className={styles.button}
            // onClick={handleSubmit}
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
