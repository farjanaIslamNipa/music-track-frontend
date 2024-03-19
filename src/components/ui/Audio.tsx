import {useRef} from 'react';
import playIcon from '../../assets/images/play.svg'
import pauseIcon from '../../assets/images/pause.svg'
import {TMusic} from '../../types';
import useAudioPlayer from '../../hooks/useAudioPlayer';

const Audio = ({audio} : {audio: TMusic}) => {
  const playRef = useRef<HTMLAudioElement>(null);
  const [play, toggleAudio] = useAudioPlayer(false, playRef);

  
  return (
    <div className="relative rounded-lg pb-3 shadow h-full audio-card">
    <div className="">
    <div className='h-[200px] w-full'>
      <img src={audio?.coverImg} className='h-full w-full object-cover rounded-t-xl' alt="" />
    </div>
  
  <button
    onClick={toggleAudio}
    type="button"
    className="absolute left-[40%] top-[25%] control-btn"
  >
    {!play ? (
      <img src={playIcon} alt="" className="h-12 w-12" />
    ) : (
      <img src={pauseIcon} alt="" className="h-12 w-12" />
    )}
  </button>
  <div className="flex flex-col p-4">
    <p className="text-base">{audio?.title}</p>
    <p className="text-xs uppercase font-bold">{audio?.album}</p>
  </div>
    </div>
    <audio ref={playRef} src={audio?.src} />
  </div>
  );
};

export default Audio;