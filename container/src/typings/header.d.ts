interface HeaderMountOptions {
  navigate: NavigateFunction;
  isSignedIn$: import("rxjs").BehaviorSubject<boolean>;
}

declare module "header/HeaderComponent" {
  const mount: (el: HTMLDivElement | null, options: HeaderMountOptions) => null;

  export { mount };
}
