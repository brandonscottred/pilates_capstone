import { useEffect, useState } from "react";

const useAuth = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("authToken");
    const username = sessionStorage.getItem("username");

    if (token && username) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  return loggedIn;
};

export default useAuth;