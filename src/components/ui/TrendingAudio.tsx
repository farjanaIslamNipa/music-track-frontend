import {useRef} from 'react';
import playIcon from '../../assets/images/trending-play.svg'
import pauseIcon from '../../assets/images/trending-pause.svg'
import {TMusic} from '../../types';
import useAudioPlayer from '../../hooks/useAudioPlayer';

const TrendingAudio = ({audio} : {audio: TMusic}) => {
  const ref = useRef<HTMLAudioElement>(null);
  const [play, toggleAudio] = useAudioPlayer(false, ref);

  
  return (
    <div className="relative bg-offWhite rounded-xl p-3">
    <div className="grid grid-cols-12 items-center gap-y-2 md:gap-y-0">
      <div className='col-span-12 md:col-span-3 lg:col-span-2'>
        <div className='h-[90px] w-[90px]'>
          <img src={audio?.coverImg} className='h-full w-full object-cover rounded-xl' alt="" />
        </div>
      </div>
      <div className="col-span-12 md:col-span-7 lg:col-span-8">
        <div className='pl-0 lg:pl-4 xl:pl-0'>
          <p><b>Track:</b> {audio?.title}</p>
          <p><b>Singer:</b> {audio?.singer}</p>
          <p className="uppercase text-sm font-bold"><b className="capitalize">Album:</b> {audio?.album}</p>
        </div>
      </div>
      <div className='col-span-12 md:col-span-2 flex justify-start md:justify-end items-center pr-5'>
        <p className='font-semibold pr-3 block md:hidden'>Play Music:</p>
        <button
          onClick={toggleAudio}
          type="button"
          className='bg-white h-10 w-10 flex justify-center items-center rounded-full opacity-80'
        >
          {!play ? (
            <img src={playIcon} alt="" className="h-4 w-4" />
          ) : (
            <img src={pauseIcon} alt="" className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
    <audio ref={ref} src={audio?.src} />
  </div>
  );
};

export default TrendingAudio;