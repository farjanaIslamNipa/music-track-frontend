import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getTrendingPlaylists} from "../../redux/features/playlist/playlistSlice";
import Audio from "../../components/ui/Audio";


const RecommendedPage = () => {
  const dispatch = useAppDispatch()
  const { recommended } = useAppSelector(state => state.playlists);


  useEffect(() => {
    dispatch(getTrendingPlaylists())
  }, [dispatch])
  return (
    <div>
      <header className="recommended-bg flex justify-center items-center h-[300px] lg:h-[400px]">
        <h1 className="text-offWhite text-4xl sm:text-5xl font-extrabold">Recommended Music</h1>
      </header>
      <main className="custom-container my-10 lg:my-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {
              recommended?.map(item => <div key={item.id}>
                <Audio audio={item} />
              </div>)
            }
          </div>
      </main>
    </div>
  );
};

export default RecommendedPage;