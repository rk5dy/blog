import {useState} from 'react';

//custom hook for dealing with login issue
export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('loggedIn');
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    sessionStorage.setItem('loggedIn', JSON.stringify(userToken));
    setToken(userToken.token);
  };

  return {
    setToken: saveToken,
    token
  }
}
