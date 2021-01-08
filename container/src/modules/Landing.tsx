import React, { useEffect, useRef } from "react";
import { mount } from "landing/LandingModule";
import useRouter from "../hooks/useRouter";

export default () => {
  const ref = useRef<HTMLDivElement>(null);
  const { navigate } = useRouter();

  useEffect(() => {
    mount(ref.current, { navigate });
  }, []);

  return <div ref={ref} />;
};
