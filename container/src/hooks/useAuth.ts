import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

interface UseAuthFunctions {
  login: VoidFunction;
  logout: VoidFunction;
}

const useAuth = (): UseAuthFunctions => {
  const history = useHistory();
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push("/dashboard");
    }
  }, [isSignedIn]);

  const login = useCallback(() => setIsSignedIn(true), []);
  const logout = useCallback(() => setIsSignedIn(false), []);

  return { login, logout };
};

export default useAuth;
