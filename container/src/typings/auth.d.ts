interface MountOptions {
  login: VoidFunction;
}

declare module "auth/AuthModule" {
  const mount: (el: HTMLDivElement | null, options: MountOptions) => null;

  export { mount };
}
