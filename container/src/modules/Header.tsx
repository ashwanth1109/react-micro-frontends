import React, { useEffect, useRef } from "react";
import { mount } from "header/HeaderComponent";
import useRouter from "../hooks/useRouter";
import { BehaviorSubject } from "rxjs";

export default ({ isSignedIn$ }: { isSignedIn$: BehaviorSubject<boolean> }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { navigate } = useRouter();

  useEffect(() => {
    mount(ref.current, { navigate, isSignedIn$ });
  }, []);

  return <div ref={ref} />;
};
