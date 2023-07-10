import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutations';
import useStyles from '../utils/styles';

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
    } catch (error) {
      console.log(error);
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