import {useState} from 'react';

export default function useIsLoggedIn() {
  const isLoggedInF = () => {
    const loggedInBoolean = sessionStorage.getItem('loggedIn');
    return loggedInBoolean;
  };

  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInF());

  const saveIsLoggedIn = userLoggedIn => {
    sessionStorage.setItem('loggedIn', userLoggedIn);
    setIsLoggedIn(userLoggedIn);
    console.log(userLoggedIn);
  };

  return {
    setIsLoggedIn: saveIsLoggedIn,
    isLoggedIn
  }
}
