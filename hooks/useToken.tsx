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

  const getFirstName = () => {
    if (typeof window !== 'undefined') {
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken?.user.first_name;
    }
    return null;
  };

  const getID = () => {
    if (typeof window !== 'undefined') {
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken?.id;
    }
    return null;
  }

  const [token, setToken] = useState(getToken());
  const [username, setUsername] = useState(getFirstName());
  const [userId, setUserId] = useState(getID());


  const saveToken = (userToken:any) => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setUserId(userToken.id);
    setToken(userToken.token);
    setUsername(userToken.user.first_name);
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