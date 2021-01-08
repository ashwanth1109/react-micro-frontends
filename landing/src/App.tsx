import React, { useCallback } from "react";
import { BehaviorSubject } from "rxjs";

const App = ({ route$ }: { route$: BehaviorSubject<string> }) => {
  route$.subscribe((val) => {
    console.log("Route emitted inside landing:", val);
  });

  const navigateToAuth = useCallback(() => {
    route$.next("/auth");
  }, []);

  return (
    <div>
      <h1>Landing Module</h1>
      <button onClick={navigateToAuth}>Navigate to Auth</button>
    </div>
  );
};

export default App;
