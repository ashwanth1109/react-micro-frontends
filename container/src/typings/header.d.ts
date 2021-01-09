interface HeaderMountOptions {
  navigate: NavigateFunction;
  isSignedIn$: import("rxjs").Observable<boolean>;
  logout: VoidFunction;
}

declare module "header/HeaderComponent" {
  const mount: (el: HTMLDivElement | null, options: HeaderMountOptions) => null;

  export { mount };
}
