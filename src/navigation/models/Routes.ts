type ScreensWithoutParams = "More" | "Watch" | "Dashboard" | "Library";

interface ScreensWithParams {
  "movie-details": { id: string };
  "cinema-hall": { id: string };
  "seat-selection": { id: string };
}

export type Routes = keyof ScreensWithParams | ScreensWithoutParams;
export type RouteParam<
  K extends Routes | undefined = undefined
> = K extends keyof ScreensWithParams ? ScreensWithParams[K] : undefined;
export type RouteParams = { [K in Routes]: RouteParam<K> };
export type RoutesRecord = Record<Routes, RouteParams>;
