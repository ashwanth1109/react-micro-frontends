import { useHistory } from "react-router-dom";
import { useCallback } from "react";

interface UseRouterFunctions {
  navigate: NavigateFunction;
}

const useRouter = (): UseRouterFunctions => {
  const history = useHistory();

  const navigate = useCallback((route: string) => {
    if (route !== history.location.pathname) {
      history.push(route);
    }
  }, []);

  return { navigate };
};

export default useRouter;
