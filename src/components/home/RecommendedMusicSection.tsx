import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getRecommendedPlaylists} from "../../redux/features/playlist/playlistSlice";
import Audio from "../ui/Audio";

const RecommendedMusicSection = () => {
  const dispatch = useAppDispatch()
  const { recommended } = useAppSelector(state => state.playlists);


  useEffect(() => {
    dispatch(getRecommendedPlaylists())
  }, [dispatch])
  return (
    <div className="pb-20 pt-20 pl-5 xl:pl-20">
        <h2 className="text-2xl font-extrabold sub-header">Recommended for You</h2>
        <div className="mt-8 grid grid-cols-2 gap-5">
        {
            recommended?.slice(0, 4).map(item => <div key={item.id}>
              <Audio audio={item} />
            </div>)
          }
        </div>
    </div>
  );
};

export default RecommendedMusicSection;