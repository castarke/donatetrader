import React, { createContext, useState } from 'react';
import decode from 'jwt-decode';

export const AuthContext = createContext();

const AuthService = {
  getProfile() {
    return decode(this.getToken());
  },
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  },
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  },
  getToken() {
    return localStorage.getItem('id_token');
  },
  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  },
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/');
  },
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(AuthService.getProfile());
  return (
    <AuthContext.Provider value={{ user, setUser, ...AuthService }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthService;
