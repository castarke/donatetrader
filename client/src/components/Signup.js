import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutations';
<<<<<<< HEAD
import backgroundImg from './signup_pic.jpg';
import Auth from '../utils/auth';
=======
import useStyles from '../utils/styles';
>>>>>>> 3f80cdb0e78bd06a6be88fafa5bdb3650ae6793b

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [signupMutation, { loading, error }] = useMutation(SIGNUP_USER);
  const classes = useStyles();

  const handleSignup = async () => {
    try {
      const response = await signupMutation({
        variables: {
          email,
          password,
          name,
        },
      });
<<<<<<< HEAD
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
          Auth.login(res.data.signup.token)
          console.log('User signed up successfully:', res.data);
          // Perform any necessary actions after successful signup
        })
        .catch((error) => {
          console.error('Signup error:', error.message);
          // Handle signup error or display error message to the user
        });
    } else {
      setErrors(validationErrors);
=======
    } catch (error) {
      console.log(error);
>>>>>>> 3f80cdb0e78bd06a6be88fafa5bdb3650ae6793b
    }
  };

  return (
    <div className={classes.background}>
      <div className={classes.container}>
        <h2>Sign Up</h2>
        <div className={classes.form}>
          <input
            className={classes.input}
            type="text"
            placeholder="Please enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className={classes.input}
            type="email"
            placeholder="Please enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={classes.input}
            type="password"
            placeholder="Please create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className={classes.button}
            onClick={handleSignup}
            disabled={loading}
          >
            {loading ? 'Signing up...' : 'Submit'}
          </button>
          {error && <p>Error occurred. Please try again.</p>}
        </div>
      </div>
    </div>
  );
}

export default Signup;