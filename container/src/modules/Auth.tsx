import React, { useEffect, useRef } from "react";
import { mount } from "auth/AuthModule";

export default () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        mount(ref.current);
    }, []);

    return <div ref={ref} />;
};
