import React, { lazy, Suspense } from "react";

const LandingLazy = lazy(() => import("./modules/Landing"));

const App = () => {
  return (
    <div>
      <h1>Container App</h1>
      <div>
        <Suspense fallback={<div>Loading . . .</div>}>
          <LandingLazy />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
