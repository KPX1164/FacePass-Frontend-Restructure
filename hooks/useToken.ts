import { useState, useEffect } from 'react';

function useToken() {
  const getToken = () => {
    if (typeof window !== 'undefined') {
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken?.token;
    }
    return null;
  };

  const getUsername = () => {
    if (typeof window !== 'undefined') {
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken?.user.username;
    }
    return null;
  };

  const getID = () => {
    if (typeof window !== 'undefined') {
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken?.user.id;
    }
    return null;
  }

  const [token, setToken] = useState(getToken());
  const [username, setUsername] = useState(getUsername());
  const [userId, setUserId] = useState(getID());

  const saveToken = (userToken) => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setUserId(userToken.id);
    setToken(userToken.token);
    setUsername(userToken.username);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUsername(null);
  };
  
 

  return {
    setToken: saveToken,
    token,
    isLoggedIn: !!token,
    logout,
    username,
    userId
  };
}

export default useToken;