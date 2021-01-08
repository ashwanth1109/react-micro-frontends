interface AuthMountOptions {
  login: VoidFunction;
}

declare module "auth/AuthModule" {
  const mount: (el: HTMLDivElement | null, options: AuthMountOptions) => null;

  export { mount };
}
