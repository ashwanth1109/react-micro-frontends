import React, { useCallback, useEffect } from "react";

const App = () => {
  const navigateToAuth = useCallback(() => {
    //
  }, []);

  useEffect(() => {
    console.log("landing effect called");

    return () => {
      console.log("landing cleanup called");
    };
  }, []);

  return (
    <div>
      <h1>Landing Module</h1>
      <button onClick={navigateToAuth}>Navigate to Auth</button>
    </div>
  );
};

export default App;
