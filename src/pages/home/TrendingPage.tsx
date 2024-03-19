import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {getTrendingPlaylists} from "../../redux/features/playlist/playlistSlice";
import Audio from "../../components/ui/Audio";


const TrendingPage = () => {
  const dispatch = useAppDispatch()
  const { trending } = useAppSelector(state => state.playlists);

  useEffect(() => {
    dispatch(getTrendingPlaylists())
  }, [dispatch])
  return (
    <div>
      <header className="trending-bg flex justify-center items-center h-[300px] lg:h-[400px]">
        <h1 className="text-offWhite text-4xl sm:text-5xl font-extrabold">Trending Music</h1>
      </header>
      <main className="custom-container my-10 lg:my-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {
              trending?.map(item => <div key={item.id}>
                <Audio audio={item} />
              </div>)
            }
          </div>
      </main>
    </div>
  );
};

export default TrendingPage;