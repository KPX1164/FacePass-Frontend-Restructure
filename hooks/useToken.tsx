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

  const getBookmarks = () => {
    if (typeof window !== 'undefined') {
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken?.user.bookmarks;
    }
    return null;
  }

  const getRole = () => {
    if (typeof window !== 'undefined') {
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      return userToken?.user.Role;
    }
    return null;
  }

  const [token, setToken] = useState(getToken());
  const [username, setUsername] = useState(getUsername());
  const [userId, setUserId] = useState(getID());
  const [bookmarks, setBookmarks] = useState(getBookmarks());
  const [role, setRole] = useState(getRole());

  const saveToken = (userToken) => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setBookmarks(userToken.user.bookmarks);
    setUserId(userToken.user.id);
    setToken(userToken.token);
    setUsername(userToken.user.username);
    setRole(userToken.user.role); // Store the user's role
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUsername(null);
    setRole(null);
  };

  return {
    setToken: saveToken,
    token,
    isLoggedIn: !!token,
    logout,
    username,
    userId,
    bookmarks,
    role // Include the user's role in the return object
  };
}

export default useToken;
