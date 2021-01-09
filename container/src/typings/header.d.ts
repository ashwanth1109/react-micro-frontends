interface HeaderMountOptions {
  navigate: NavigateFunction;
}

declare module "header/HeaderComponent" {
  const mount: (el: HTMLDivElement | null, options: HeaderMountOptions) => null;

  export { mount };
}
