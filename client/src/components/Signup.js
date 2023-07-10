import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { SIGNUP_USER } from '../utils/mutations';
import backgroundImg from './signup_pic.jpg';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [signupMutation, { loading, error }] = useMutation(SIGNUP_USER);

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
    <div style={styles.background}>
      <div style={styles.container}>
        <h2>Sign Up</h2>
        <div style={styles.form}>
          <input
            style={styles.input}
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            style={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Create Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            style={styles.button}
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