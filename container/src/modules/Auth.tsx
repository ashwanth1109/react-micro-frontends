import React, { useEffect, useRef } from "react";
import { mount } from "auth/AuthModule";
import { History } from "history";

interface AuthProps {
  login: VoidFunction;
  history: History<unknown>;
}

export default ({ login, history }: AuthProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mount(ref.current, { login, history });
  }, []);

  return <div ref={ref} />;
};
