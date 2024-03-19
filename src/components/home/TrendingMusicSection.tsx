import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {useEffect} from "react";
import {getTrendingPlaylists} from "../../redux/features/playlist/playlistSlice";
import TrendingAudio from "../ui/TrendingAudio";

const TrendingMusicSection = () => {
  
  const dispatch = useAppDispatch()
  const { trending } = useAppSelector(state => state.playlists);


  useEffect(() => {
    dispatch(getTrendingPlaylists())
  }, [dispatch])
  return (
    <div className="pb-20 pt-20">
      <div className="flex justify-between items-end">
        <h2 className="text-2xl font-extrabold sub-header">Trending Playlist</h2>
        <Link to="/trending" className="font-bold underline text-primary">View All</Link>
      </div>
      <div className="mt-8 space-y-2">
          {
            trending?.map(audio => 
            <TrendingAudio key={audio.id} audio={audio} />
            )
          }
        </div>

    </div>
  );
};

export default TrendingMusicSection;