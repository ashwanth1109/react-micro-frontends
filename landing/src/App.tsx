import React, { useCallback } from "react";
import { BehaviorSubject } from "rxjs";

const App = () => {
  const navigateToAuth = useCallback(() => {
    //
  }, []);

  return (
    <div>
      <h1>Landing Module</h1>
      <button onClick={navigateToAuth}>Navigate to Auth</button>
    </div>
  );
};

export default App;
