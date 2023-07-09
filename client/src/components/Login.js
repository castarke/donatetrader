import { useMutation } from '@apollo/client';
import { useState } from 'react';
import Auth from '../utils/auth';
import { LOGIN_USER } from '../utils/mutations';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginUser, { loading, error }] = useMutation(LOGIN_USER);
  
    const handleLogin = async () => {
      try {
        const { data } = await loginUser({
          variables: {
            email,
            password,
          },
        });
  
        const token = data.login.token; // Assuming the token is returned as `data.login.token`
  
        if (token) {
          Auth.login(token);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div style={styles.container}>
        <h2>Login</h2>
        <div style={styles.form}>
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
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            style={{
              ...styles.button,
              backgroundColor: loading ? '#ccc' : '#4CAF50',
            }}
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && <p>Error occurred. Please try again.</p>}
        </div>
      </div>
    );
  }

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