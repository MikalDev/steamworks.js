export function init(appId?: number): Omit<Client, 'init' | 'runCallbacks'>;
export function restartAppIfNecessary(appId: number): boolean;
export function electronEnableSteamOverlay(disableEachFrameInvalidation?: boolean): void;
export type Client = typeof import('./client');
export const SteamCallback: any;
