import React, { useEffect, useRef } from "react";
import { mount } from "auth/AuthModule";

interface AuthProps {
  login: () => void;
}

export default ({ login }: AuthProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mount(ref.current, { login });
  }, []);

  return <div ref={ref} />;
};
