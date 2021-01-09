interface AuthMountOptions {
  login: VoidFunction;
  history: import("history").History<unknown>;
}

declare module "auth/AuthModule" {
  const mount: (el: HTMLDivElement | null, options: AuthMountOptions) => null;

  export { mount };
}
