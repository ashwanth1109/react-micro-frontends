type NavigateFunction = (route: string) => void

interface LandingMountOptions {
  navigate: NavigateFunction;
}

declare module "landing/LandingModule" {
  const mount: (
    el: HTMLDivElement | null,
    options: LandingMountOptions
  ) => null;

  export { mount };
}
