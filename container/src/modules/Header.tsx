import React, { useEffect, useRef } from "react";
import { mount } from "header/HeaderComponent";
import useRouter from "../hooks/useRouter";
import { Observable } from "rxjs";

export default ({
  isSignedIn$,
  logout,
}: {
  isSignedIn$: Observable<boolean>;
  logout: VoidFunction;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { navigate } = useRouter();

  useEffect(() => {
    mount(ref.current, { navigate, isSignedIn$, logout });
  }, []);

  return <div ref={ref} />;
};
