import { useMutation } from '@apollo/client';
import { useState } from 'react';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
      });
    const [loginUser, { loading, error }] = useMutation(LOGIN_USER);
  
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
            Auth.login(res.data.login.token);
            console.log('User logged in successfully:', res.data);
            // Perform any necessary actions after successful login
          })
          .catch((error) => {
            console.error('Login error:', error.message);
            // Handle login error or display error message to the user
          });
      };
    
      return (
        <div style={styles.background}>
        <div style={styles.container}>
          <h1>Login Page</h1>
          <form onSubmit={handleSubmit}>
            {/* Input fields for username and password */}
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
          {error && <p>{error.message}</p>}
        </div>
        </div>
      );
    };
  

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      maxWidth: '300px',
      margin: '0 auto',
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
  
  export default Login;