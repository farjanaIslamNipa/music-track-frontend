import { RefObject, useState } from 'react';

const useAudioPlayer = (initialPlayState: boolean, audioElementRef: RefObject<HTMLAudioElement>): [boolean, () => void] => {
  const [play, setPlay] = useState(initialPlayState);

  const toggleAudio = (): void => {
    if (play) {
      audioElementRef.current?.pause();
      setPlay(false);
    } else {
      void audioElementRef.current?.play();
      setPlay(true);
    }
  };

  return [play, toggleAudio];
};

export default useAudioPlayer;