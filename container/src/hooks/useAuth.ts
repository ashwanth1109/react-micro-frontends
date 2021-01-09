import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { History } from "history";

interface UseAuthFunctions {
  login: VoidFunction;
  logout: VoidFunction;
  history: History<unknown>;
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

  return { login, logout, history };
};

export default useAuth;
