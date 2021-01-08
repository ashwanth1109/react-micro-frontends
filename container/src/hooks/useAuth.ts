import { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

interface UseAuthProps {
  login: VoidFunction;
  logout: VoidFunction;
}
const useAuth = (): UseAuthProps => {
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
