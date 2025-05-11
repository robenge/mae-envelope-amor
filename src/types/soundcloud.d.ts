
interface SoundCloudWidgetEvents {
  READY: string;
  PLAY: string;
  PAUSE: string;
  FINISH: string;
  ERROR: string;
}

interface SoundCloudWidget {
  Events: SoundCloudWidgetEvents;
  Widget: (element: HTMLElement | string) => {
    bind: (event: string, callback: () => void) => void;
    unbind: (event: string) => void;
    play: () => Promise<void>;
    pause: () => void;
    toggle: () => void;
    seekTo: (milliseconds: number) => void;
    setVolume: (volume: number) => void;
    getVolume: (callback: (volume: number) => void) => void;
    getDuration: (callback: (duration: number) => void) => void;
    getPosition: (callback: (position: number) => void) => void;
    getCurrentSound: (callback: (sound: any) => void) => void;
  };
}

interface Window {
  SC: SoundCloudWidget;
}
