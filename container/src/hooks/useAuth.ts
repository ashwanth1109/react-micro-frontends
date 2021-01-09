import { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { History } from "history";
import { BehaviorSubject, Observable } from "rxjs";

interface UseAuthFunctions {
  login: VoidFunction;
  logout: VoidFunction;
  history: History<unknown>;
  isSignedIn$: Observable<boolean>;
}

const isSignedIn$ = new BehaviorSubject<boolean>(false);

const useAuth = (): UseAuthFunctions => {
  const history = useHistory();

  useEffect(() => {
    const subscription = isSignedIn$.subscribe((val) => {
      if (val) {
        history.push("/dashboard");
      } else if (history.location.pathname === "/dashboard") {
        history.push("/");
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = useCallback(() => isSignedIn$.next(true), []);
  const logout = useCallback(() => isSignedIn$.next(false), []);

  return { login, logout, history, isSignedIn$: isSignedIn$.asObservable() };
};

export default useAuth;
