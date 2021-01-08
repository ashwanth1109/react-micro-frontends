import React, { useCallback } from "react";

const App = () => {
  const navigateToLanding = useCallback(() => {
    //
  }, []);

  return (
    <div>
      <h1>Auth Module</h1>
      <button onClick={navigateToLanding}>Navigate to Landing</button>
    </div>
  );
};

export default App;
